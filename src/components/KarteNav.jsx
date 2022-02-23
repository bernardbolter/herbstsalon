import React, { useContext} from 'react'
import { motion } from "framer-motion";

import { MapContext } from "../providers/MapProvider";
import { NavContext } from "../providers/NavProvider";

import EyeOpen from '../svg/eyeOpen'
import EyeClosed from '../svg/eyeClosed'

import * as styles from '../styles/karte-nav.module.scss'

const KarteNav = () => {
    const [map, setMap] = useContext(MapContext)
    const [nav, setNav] = useContext(NavContext)

    return (
        <motion.nav
            className={styles.container}
        >
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
                {map.viewArtists ? <EyeClosed /> : <EyeOpen />}
                <p>
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
                <p>
                    <span>Konzept</span>
                    <span>& Aktionen</span>  
                </p>
            </div>
        </motion.nav>
    )
}

export default KarteNav