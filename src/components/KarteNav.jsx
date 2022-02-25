import React, { useContext} from 'react'
import { motion } from "framer-motion"

import { MapContext } from "../providers/MapProvider"
import { NavContext } from "../providers/NavProvider"

import EyeOpen from "../svg/EyeOpen"
import EyeClosed from '../svg/EyeClosed'

import * as styles from '../styles/karte-nav.module.scss'

const KarteNav = () => {
    const [map, setMap] = useContext(MapContext)
    const [nav, setNav] = useContext(NavContext)

    return (
        <motion.nav
            className={styles.container}
        >
            <div className={styles.header}>
                <div 
                    className={styles.headerBack} 
                    style={{ background: nav.colors.karte, opacity: .85 }}    
                />
                <p>Karte Navigation</p>
            </div>
            <motion.div 
                className={styles.artistContainer}
            >
                <div 
                    className={styles.artistBackground}   
                />
                <div 
                    className={styles.link}
                    onClick={() => {
                        console.log("clicked events")
                        setMap(state => ({
                            ...state, 
                            viewArtists: !state.viewArtists,
                            viewEvents: state.viewEvents ? false : null
                        }))
                    }}    
                >
                    {map.viewArtists ? <EyeClosed color={nav.colors.kunst} /> : <EyeOpen color={nav.colors.kunst} />}
                    <p
                        style={{ color: nav.colors.kunst }}
                    >
                        <span>Künstlerin</span>
                        <span>& Künstler</span>
                    </p>
                </div>
                <div 
                    className={styles.link}
                    onClick={() => {
                        console.log("clicked events")
                        setMap(state => ({
                            ...state, 
                            viewArtists: state.viewEvents ? false : null,
                            viewEvents: !state.viewEvents
                        }))
                    }}
                >
                    {map.viewEvents ? <EyeClosed color={nav.colors.konzept} /> : <EyeOpen color={nav.colors.konzept} />}
                    <p
                        style={{ color: nav.colors.konzept }}
                    >
                        <span>Konzept</span>
                        <span>& Aktionen</span>  
                    </p>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default KarteNav