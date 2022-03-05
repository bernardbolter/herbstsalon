import React, { useContext } from 'react'
import { MapContext } from "../providers/MapProvider"
import { motion, AnimatePresence } from 'framer-motion'

import * as styles from '../styles/tour.module.scss'

const Tour = () => {
    const [map, setMap] = useContext(MapContext)
    return (
        <AnimatePresence>
            <motion.section className={styles.container}>
                <p>tour</p>
            </motion.section>
        </AnimatePresence>
    )
}

export default Tour