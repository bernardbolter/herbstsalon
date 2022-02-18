import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { motion } from 'framer-motion'
import { indexTransitions } from '../animations/pageTransitions'

import { ArtistContext } from '../providers/ArtistProvider'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

import Nav from '../components/Nav'
import Uber from '../components/Uber'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

import { useWindowSize } from '../hooks/useWindowSize'

import * as styles from '../styles/index.module.scss' 

// markup
const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BackgroundQuery {
      contentfulUber {
        mobile {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        desktop {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  console.log(data)
  const desktopImage = getImage(data.contentfulUber.desktop)
  const mobileImage = getImage(data.contentfulUber.mobile)
  const size = useWindowSize()

  const [artist, setArtist] = useContext(ArtistContext)
  console.log(artist)
  const [nav, setNav] = useContext(NavContext)
  const [map, setMap] = useContext(MapContext)

  // console.log(nav)

  return (
    <motion.main
      key={location.pathname}
      variants={indexTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
    >
      <div className={styles.background}>
        {size.width > 768
          ? <GatsbyImage image={desktopImage} alt="destop background" style={{ position: 'unset' }} />
          : <GatsbyImage image={mobileImage} alt="mobile background" style={{ position: 'unset' }} />
        }   
      </div>
      <Nav />
      <Uber />
      <Logo />
      <Footer />
    </motion.main>
  )
}

export default IndexPage
