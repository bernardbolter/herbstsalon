import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import * as styles from '../styles/uber.module.scss' 

const Uber = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: .5
            }}
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