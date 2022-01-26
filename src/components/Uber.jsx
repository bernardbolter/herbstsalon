import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import { motion } from 'framer-motion'
import { uberTransitions } from '../animations/pageTransitions'

import * as styles from '../styles/uber.module.scss' 

const Uber = ({ location }) => {
    const data = useStaticQuery(graphql`
    query UberQuery {
        contentfulUber {
          notesDeutsch {
            raw
          }
          uberDeutsch {
            raw
          }
          uberEnglish {
            raw
          }
          notesEnglish {
            raw
          }
        }
      }
    `)
    console.log(data)
    return (
        <motion.section
            key={location.pathname}
            variants={uberTransitions}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.container} 
        >
            <p>Uber</p>
            <Link
                to="/"
            >main</Link>
        </motion.section>
    )
}

export default Uber