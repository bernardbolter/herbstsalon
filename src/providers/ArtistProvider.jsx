import React, { useState, useEffect, createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { shuffle } from "../helpers";

export const ArtistContext = createContext()

const ArtistProvider = ({ children }) => {
    const artistData = useStaticQuery(graphql`
        query ArtistQuery {
            allContentfulArtist {
                edges {
                  node {
                    location {
                      lat
                      lon
                    }
                    name
                    slug
                    title
                  }
                }
              }
        }
    `)

    const [artists, setArtists] = useState({
        artists: []
    })

    useEffect(() => {
        const rawArtists = []
        if (artistData.allContentfulArtist.edges.length !== 0) {
            artistData.allContentfulArtist.edges.map(artist => {
                rawArtists.push(artist.node)
            })
        }
        setArtists(state => ({ ...state, artists: shuffle(rawArtists) }))
    }, [artistData])

    return (
        <ArtistContext.Provider
            value={[artists, setArtists]}
        >
            {children}
        </ArtistContext.Provider>
    )
}

export default ArtistProvider