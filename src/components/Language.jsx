import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { NavContext } from '../providers/NavProvider'

import * as styles from '../styles/language.module.scss'

const Language = () => {
    const [nav, setNav] = useContext(NavContext)

    return (
        <div 
            className={styles.language}
            onClick={() => {
            console.log("set lang")
            setNav(state => ({ ...state, deutsch: !state.deutsch }))
            }}   
        >
            <motion.svg   
            viewBox="0 0 25 25"
            className={styles.langCircle}
            initial={{
                translateX: 0
            }}
            animate={{
                translateX: nav.deutsch ? 0 : 34
            }}
            transition={{
                duration: .3,
                ease: "linear"
            }}
            >
                <circle cx="12" cy="12" r="12"/>
            </motion.svg>
            <p
            style={{
                opacity: nav.deutsch ? 1 : .6
            }}
            >DE</p>
            <p
            style={{
                opacity: nav.deutsch ? .6 : 1
            }}
            >EN</p>
        </div>
    )
}

export default Language
