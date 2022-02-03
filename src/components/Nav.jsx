import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { NavContext } from '../providers/NavProvider'

import Menu from '../components/Menu'

import { motion } from "framer-motion";
import { menu } from "../animations/navAnimations";

import * as styles from '../styles/nav.module.scss'

const Nav = ({ location }) => {
    const [nav, setNav] = useContext(NavContext)
    const variant = nav.navOpen ? "arrow" : "hamburger"
    console.log(nav.navOpen)

    return (
        <nav className={styles.container}>
            <motion.div 
                className={styles.hamburger}
                initial="hamburger"
                animate={variant}
                variants={menu}
            />
            <Menu />
            <div className={nav.navOpen ? `${styles.links} ${styles.linksOpen}`: styles.links}>
                <div 
                    className={styles.link}
                    onClick={() => {
                        setNav(state => ({
                            ...state,
                            uberOpen: !state.uberOpen
                        }))
                    }}    
                >
                    <div 
                        className={styles.linkBack}
                        style={{ background: nav.colors.uber }}
                    />
                    <p>Über</p>
                </div>
                <p
                    className={styles.artists}
                    onClick={() => {
                        setNav(state => ({
                            ...state,
                            artistOpen: !state.artistOpen,
                            eventsOpen: state.eventsOpen ? false : null
                        }))
                    }}
                >
                    <span>Künstlerin</span>
                    <span>& Künstler</span>
                </p>
                <p
                    className={styles.konzept}
                    onClick={() => {
                        setNav(state => ({
                            ...state,
                            eventsOpen: !state.eventsOpen,
                            artistOpen: state.artistOpen ? false : null
                        }))
                    }}
                >
                    <span>Konzept</span>
                    <span>& Aktionen</span>  
                </p>
                <Link
                    className={styles.karte}
                    to="/karte/"
                >Karte</Link>
            </div>
        </nav>
    )
}

export default Nav