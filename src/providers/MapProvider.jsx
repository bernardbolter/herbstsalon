import React, { useState, useEffect, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { shuffle } from "../helpers";

export const MapContext = createContext()

const MapProvider = ({ children }) => {

    const tourData = useStaticQuery(graphql`
        query TourQuery {
            allContentfulTour {
                edges {
                    node {
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
            }
        }
    `)

    const [map, setMap] = useState({
        allTour: [],
        viewArtists: false,
        viewEvents: false,
        lng: 13.359980,
        lat: 52.494414,
        zoom: 15,
        openTour: false,
        startTour: false,
        currentTour: {},
        currentStop: 0,
        mapNoClick: false,
        karteNavOpen: true
    })

    useEffect(() => {
        if ( tourData.allContentfulTour.edges.length !== 0 ) {
            var allTours = []
            tourData.allContentfulTour.edges.map(tour => {
                var rawLines = []
                tour.node.line.map(l => {
                    return rawLines.push([l.coords.lon, l.coords.lat])
                })
                var rawTour = {
                    lines: rawLines,
                    artist: tour.node.artist,
                    title: tour.node.title,
                    stops: tour.node.stop,
                    slug: tour.node.slug,
                    description: tour.node.description.description
                }
                allTours.push(rawTour)
            })
            setMap(state => ({ ...state, allTours: shuffle(allTours) }))
        }
    }, [tourData])

    return (
        <MapContext.Provider
            value={[map, setMap]}
        >
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider
