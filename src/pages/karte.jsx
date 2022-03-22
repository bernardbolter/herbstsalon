import React, { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { NavContext } from '../providers/NavProvider'
import { MapContext } from '../providers/MapProvider'

import Background from '../components/Background'
import Map from '../components/Map'
import KarteNav from '../components/KarteNav'
import Nav from '../components/Nav'
import Tour from '../components/Tour'

import * as styles from '../styles/karte.module.scss'

const Karte = ({ location }) => {
    const [nav] = useContext(NavContext)
    const [map] = useContext(MapContext)
    
    return (
        <AnimatePresence>
            <motion.div className={styles.container}>
                <Background />
                <Nav location={location} />
                <KarteNav location={location} />
                <Map />
                {map.openTour && <Tour />}
            </motion.div>
        </AnimatePresence>
    )
}

export default Karte