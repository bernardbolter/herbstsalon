import React, { useState } from 'react'
import { graphql } from 'gatsby'

import * as styles from '../styles/artist.module.scss'

const Artist = ({ data }) => {
    console.log("artist data: ", data)
    const [artist, setArtist] = useState(data.contentfulArtist)
    console.log("setArtist: ", artist)
    return (
        <main className={styles.container}>
            <h1>{artist.name}</h1>
            <h2>{artist.title}</h2>
        </main>
    )
}

export const query = graphql`
    query ($slug: String!) {
        contentfulArtist(slug: { eq: $slug }) {
            name
            slug
            title
            location {
                lat
                lon
            }
        }
    }
`

export default Artist