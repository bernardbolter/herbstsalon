import React from 'react'

import { motion } from 'framer-motion'
import { indexTransitions } from '../animations/pageTransitions'

import Nav from '../components/Nav'
import Uber from '../components/Uber'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Curators from '../components/Curators'


import * as styles from '../styles/index.module.scss' 

const IndexPage = ({ location }) => {

  return (
    <>
    <Background />
    <Nav location={location}/>
    <motion.main
      key={location.pathname}
      variants={indexTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
    >
      <Uber />
      <Footer />
      <Curators />
    </motion.main>
    </>
  )
}

export default IndexPage