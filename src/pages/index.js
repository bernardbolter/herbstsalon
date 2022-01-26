import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { ArtistContext } from '../providers/ArtistProvider'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

import * as styles from '../styles/index.module.scss' 

// markup
const IndexPage = () => {
  const [artist, setArtist] = useContext(ArtistContext)
  const [nav, setNav] = useContext(NavContext)
  const [map, setMap] = useContext(MapContext)

  console.log(artist)
  console.log(map)
  console.log(nav)
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: .5
      }}
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
