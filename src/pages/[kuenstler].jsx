import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import * as styles from '../styles/kuenstler.module.scss'

const Kuenstler = () => {
    const artistData = useStaticQuery(graphql`
    query ArtistDataQuery {
        contentfulArtist(slug: {eq: ""}) {
          name
          slug
          title
        }
      }
    `)
    return (
        <section className={StyleSheet.container}>
            <p>{artistData.contentfulArtists.name}</p>
        </section>
    )
}

export default Kuenstler