import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { MapContext } from '../providers/MapProvider'

import Background from '../components/Background'
import Map from '../components/Map'
import KarteNav from '../components/KarteNav'
import Nav from '../components/Nav'
import Tour from '../components/Tour'

import * as styles from '../styles/tour-page.module.scss'

const TourPage = ({ data, location }) => {
    const [map, setMap] = useContext(MapContext)
    console.log(data)

    useEffect(() => {
        const rawLines = []
        data.contentfulTour.line.map(l => {
            return rawLines.push([l.coords.lon, l.coords.lat])
        })
        const rawTour = {
            lines: rawLines,
            artist: data.contentfulTour.artist,
            stops: data.contentfulTour.stop,
            slug: data.contentfulTour.slug,
            description: data.contentfulTour.description.description
        }
        setMap(state => ({ ...state, currentTour: rawTour, openTour: true }))

    }, [data.contentfulTour, setMap])

    console.log(map.currentTour)

    return (
        <main className={styles.container}>
            <Background />
            <Nav location={location} />
            <KarteNav location={location} />
            <Map />
            {map.openTour && <Tour />}
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
              title
              location {
                lat
                lon
              }
              slug
              image {
                gatsbyImageData
                description
              }
              description {
                description
              }
            }
            description {
              description
            }
        }
    }
`

export default TourPage