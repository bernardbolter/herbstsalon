import React, { useContext } from 'react'

import { motion } from 'framer-motion'
import { indexTransitions } from '../animations/pageTransitions'

import { ArtistContext } from '../providers/ArtistProvider'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

import Nav from '../components/Nav'
import Uber from '../components/Uber'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Background from '../components/Background'

import { useWindowSize } from '../hooks/useWindowSize'

import * as styles from '../styles/index.module.scss' 

// markup
const IndexPage = ({ location }) => {
  const [artist, setArtist] = useContext(ArtistContext)
  console.log(artist)
  const [nav, setNav] = useContext(NavContext)
  console.log(nav)
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
      <Background />
      <Nav location={location}/>
      <Uber />
      <Logo />
      <Footer />
    </motion.main>
  )
}

export default IndexPage