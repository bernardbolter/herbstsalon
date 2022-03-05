import React, { useState, useEffect, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const MapContext = createContext()

const MapProvider = ({ children }) => {
    const toursData = useStaticQuery(graphql`
    query TourQuery {
      allContentfulTour {
        edges {
          node {
            line {
              coords {
                lat
                lon
              }
              name
            }
            artist
            description {
              description
            }
            stop {
              description {
                description
              }
              image {
                gatsbyImageData
                title
              }
              tourSlug
              zoom
              stopLocation {
                lat
                lon
              }
              slug
            }
            slug
          }
        }
      }
    }
    `)

    const [map, setMap] = useState({
        viewArtists: false,
        viewEvents: false,
        lng: 13.359980,
        lat: 52.494414,
        zoom: 16,
        startTour: false,
        tours: [],
        currentTour: {},
        tourStop: 0,
        currentStop: {},
        lastStop: 0,
        coords: [],
    })

    useEffect(() => {
        const rawTours = []
        if (toursData.allContentfulTour.edges.length !== 0) {
            
            toursData.allContentfulTour.edges.map(tour => {
                console.log("mapP: ", tour.node)
                const rawLines = []
                tour.node.line.map(l => {
                  console.log("line: ", l)
                  rawLines.push([l.coords.lon, l.coords.lat])
                })
                console.log(rawLines)
                const rawTour = {
                  lines: rawLines,
                  artist: tour.node.artist,
                  // description: tour.node.description.description,
                  stops: tour.node.stop,
                  slug: tour.node.slug
                }
                rawTours.push(rawTour)
            })
        }
        setMap(state => ({ ...state, tours: rawTours }))
    }, [toursData])

    return (
        <MapContext.Provider
            value={[map, setMap]}
        >
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider