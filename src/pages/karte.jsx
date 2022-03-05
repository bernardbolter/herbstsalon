import React, { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { NavContext } from '../providers/NavProvider'

import Nav from '../components/Nav'
import KarteNav from '../components/KarteNav'
import Map from '../components/Map'
import Tour from '../components/Tour'

import * as styles from '../styles/karte.module.scss'

const Karte = ({ location }) => {
    const [nav] = useContext(NavContext)
    
    return (
        <AnimatePresence>
            <motion.div
                className={styles.container}
                style={{
                    background: nav.colors.karte
                }}
            >
                <Nav location={location}/>
                <KarteNav />
                <Map />
                <Tour />
            </motion.div>
        </AnimatePresence>
    )
}

export default Karte