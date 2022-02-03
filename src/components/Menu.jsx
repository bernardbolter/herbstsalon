import React, { useContext } from 'react'

import { NavContext } from "../providers/NavProvider"

import { motion } from 'framer-motion'
import { top, center, bottom } from '../animations/menuAnimations'

import * as styles from '../styles/menu.module.scss'

const Menu = () => {
    const [nav, setNav] = useContext(NavContext)
    const variant = nav.navOpen ? "arrow" : "hamburger"

    const lineProps = {
        vectorEffect: "non-scaling-stroke",
        initial: "hamburger",
        animate: variant,
        ...lineProps
      };

    return (
        <motion.svg
            className={styles.container}
            viewBox={`0 0 50 50`}
            overflow="visible"
            preserveAspectRatio="none"
            width={50}
            height={50}
            onClick={() => {
                setNav(state => ({...state, navOpen: !state.navOpen}))
            }}
        >
            <motion.line
                x1="13"
                x2="37"
                y1="15"
                y2="15"
                variants={top}
                {...lineProps}
            />
            <motion.line
                x1="13"
                x2="37"
                y1="25"
                y2="25"
                variants={center}
                {...lineProps}
            />
            <motion.line
                x1="13"
                x2="37"
                y1="35"
                y2="35"
                variants={bottom}
                {...lineProps}
            />
        </motion.svg>
    )
}

export default Menu