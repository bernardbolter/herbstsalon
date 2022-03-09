import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useWindowSize } from '../hooks/useWindowSize'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import { NavContext } from '../providers/NavProvider'
import { hexToRGB } from '../helpers'

import Background from '../components/Background'
import Nav from '../components/Nav'

import * as styles from '../styles/artist.module.scss'

const Artist = ({ data, location }) => {
    console.log("artist data: ", data)
    const [artist, setArtist] = useState(data.contentfulArtist)
    const [podcastImage, setPodcastImage] = useState(null)
    console.log("setArtist: ", artist)
    const size = useWindowSize()

    useEffect(() => {
        if (artist.podcastImage !== null) {
            setPodcastImage(getImage(artist.podcastImage.gatsbyImageData))
        }
    }, [artist.podcastImage])

    const [nav, setNav] = useContext(NavContext)
    return (
        <>
        <Nav location={location} />
        <Background />
        <motion.main 
            initial={{
                translateX: size.width > 768 ? "85%" : "100%"
            }}
            animate={{
                translateX: 0
            }}
            exit={{
                translateX: size.width > 768 ? "85%" : "100%"
            }}
            transition={{
                duration: 1,
                ease: "linear"
            }}
            className={styles.container}
            style={{  
                background: nav.artistPage ? hexToRGB(nav.colors.kunst, 0.9) : hexToRGB(nav.colors.konzept, 0.9),
                width: size.width > 768 ? "85%" : "100%"
            }}
        >
            <div className={styles.header}>

                <div className={styles.title}>
                    <h1>{nav.artistPage ? artist.name : artist.title}</h1>
                    <p>{nav.artistPage ? "presents" : "by"}</p>
                    <h2>{nav.artistPage ? artist.title : artist.name}</h2>
                </div>

                {artist.podcastImage !== null && (
                    <div className={styles.podcast}>
                    <GatsbyImage image={podcastImage} alt="podcast image" />
                    <AudioPlayer
                        src={artist.podcast.file.url}
                        showJumpControls={false}
                        showFilledProgress={false}
                    />
                </div>
                )}
                
            </div>
            
        </motion.main>
        </>
    )
}

export const query = graphql`
    query ($slug: String!) {
        contentfulArtist(slug: { eq: $slug }) {
            megaimages {
                totalPopulation
                title
                megacity {
                  gatsbyImageData
                    }
                    city {
                        artist
                        englishName
                        name
                        population
                        song
                        video
                }
            }
            location {
                lat
                lon
            }
            id
            name
            podcastImage {
                gatsbyImageData
            }
            slug
            title
            podcast {
                file {
                  url
                }
              }
        }
    }
`

export default Artist