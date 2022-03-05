import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { MapContext } from '../providers/MapProvider'

import Background from '../components/Background'
import Map from '../components/Map'
import KarteNav from '../components/KarteNav'
import Tour from '../components/Tour'
import Nav from '../components/Nav'

import * as styles from '../styles/tour.module.scss'

const TourPage = ({ data }) => {
    const [map, setMap] = useContext(MapContext)
    console.log(data)

    useEffect=(() => {
        if (map.currentTour.length !== 0) {
            setMap(state => ({ ...state, currentTour: data.contentfulTour }))
        }
    }, [data, map.currentTour])

    return (
        <main className={styles.container}>
            <Background />
            <Nav />
            <KarteNav />
            <Map />
            <Tour />
        </main>
    )
}

export const query = graphql`
    query ($slug: String!) {
        contentfulTour(slug: { eq: $slug }) {
            artist
            id
            line {
                coords {
                        lat
                        lon
                    }
                    name
                }
            slug
            stop {
                zoom
                tourSlug
                title
                stopLocation {
                    lat
                    lon
                }
                slug
                image {
                    gatsbyImageData
                    description
                }
            }
        }
    }
`

export default TourPage