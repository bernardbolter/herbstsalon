import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { motion } from 'framer-motion'
import { indexTransitions } from '../animations/pageTransitions'

import { ArtistContext } from '../providers/ArtistProvider'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

import * as styles from '../styles/index.module.scss' 

// markup
const IndexPage = ({ location }) => {
  console.log(location)
  const [artist, setArtist] = useContext(ArtistContext)
  const [nav, setNav] = useContext(NavContext)
  const [map, setMap] = useContext(MapContext)

  console.log(artist)
  console.log(map)
  console.log(nav)
  return (
    <motion.main
      key={location.pathname}
      variants={indexTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
    >
      <p>INdex</p>
      <Link
        to="/uber"
      >uber</Link>
    </motion.main>
  )
}

export default IndexPage
