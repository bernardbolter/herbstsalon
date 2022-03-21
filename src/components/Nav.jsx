import React, { useState, useContext, useEffect } from 'react'
import { Link, navigate } from 'gatsby'

import { NavContext } from '../providers/NavProvider'
import { ArtistContext } from "../providers/ArtistProvider";
import { useWindowSize } from "../hooks/useWindowSize";

import Menu from '../components/Menu'

import { motion } from "framer-motion";
import { 
    menu, 
    links,
    artistsAnime,
    eventsAnime
} from "../animations/navAnimations";

import * as styles from '../styles/nav.module.scss'

const Nav = ({ location }) => {
    const [nav, setNav] = useContext(NavContext)
    const [artists] = useContext(ArtistContext)
    const variant = nav.navOpen ? "arrow" : "hamburger"
    const size = useWindowSize()

    useEffect(() => {
        if (size.window > 769 || location.pathname === '/') {
            setNav(state => ({ ...state, navOpen: true, hamburger: false }))
        } else {
            setNav(state => ({ ...state, navOpen: false, hamburger: true }))
        }
    }, [size.window, location])

    return (
        <nav className={styles.container}>
            {nav.hamburger && (
                <>
                    <motion.div 
                        className={styles.hamburger}
                        initial="hamburger"
                        animate={variant}
                        variants={menu}
                    />
                    <Menu />
                </>
            )}
            
            <motion.div 
                className={styles.links}
                style={{
                    marginTop: nav.hamburger ? 60 : 0
                }}
                initial="hamburger"
                animate={variant}
                variants={links}
            >
                <div 
                    className={styles.link}
                    onClick={() => {
                        console.log("uber")
                        setNav(state => ({
                            ...state,
                            uberOpen: !state.uberOpen,
                            artistOpen: state.artistOpen ? false : null,
                            eventsOpen: state.eventsOpen ? false : null
                        }))
                        if (location.pathname === "/karte/") {
                            navigate("/")
                        }
                    }}    
                >
                    <motion.div 
                        className={styles.linkBack}
                        style={{ 
                            background: nav.colors.uber,
                            top: -3,
                            left: -2,
                            width: 70,
                            height: 50
                        }}
                        animate={{
                            skewX:[4,6,4],
                            skewY: [-2,-3,-2],
                            opacity: [.8,.6,.8]
                        }}
                        transition={{
                            ease: "linear",
                            duration: 5,
                            repeat: Infinity
                        }}
                    />
                    <motion.p
                        style={{
                            transform: "rotate(-3deg)"
                        }}
                    >Über</motion.p>
                </div>

                <div
                    className={styles.link}
                    onClick={() => {
                        setNav(state => ({
                            ...state,
                            artistOpen: !state.artistOpen,
                            eventsOpen: state.eventsOpen ? false : null,
                            uberOpen: state.uberOpen ? false : null
                        }))
                    }} 
                >
                    <motion.div
                        className={styles.linkBack}
                        style={{ 
                            background: nav.colors.kunst,
                            width: 120,
                            height: 60,
                            left: -3
                        }}
                        animate={{
                            skewX:[-4,-6,-4],
                            skewY: [2,3,2],
                            opacity: [.8,.6,.8]
                        }}
                        transition={{
                            ease: "linear",
                            duration: 5,
                            repeat: Infinity
                        }}
                    />
                    <p
                        style={{
                            transform: "rotate(3deg)"
                        }}
                    >
                        <span>Künstlerin</span>
                        <span>& Künstler</span>
                    </p>
                </div>

                <motion.div
                    className={styles.artists}
                    initial="artistsOff"
                    animate={nav.artistOpen ? "artistsOn" : "artistsOff"}
                    variants={artistsAnime}
                    transition={{
                        duration: .3,
                        ease: "linear"
                    }}
                >
                    {artists.artists.map(artist => (
                        <Link
                            key={artist.slug}
                            onClick={() => setNav(state => ({ ...state, artistPage: true, artistOpen: false }))}
                            to={`/${artist.slug}`}
                            style={{
                                backgroundColor: nav.colors.kunst
                            }}
                        >
                            {artist.name}   
                        </Link>
                    ))}
                </motion.div>

                <div
                    className={styles.link}
                    style={{
                        marginTop: 8
                    }}
                    onClick={() => {
                        setNav(state => ({
                            ...state,
                            eventsOpen: !state.eventsOpen,
                            artistOpen: state.artistOpen ? false : null,
                            uberOpen: state.uberOpen ? false : null
                        }))
                    }} 
                >
                    <motion.div
                        className={styles.linkBack}
                        style={{ 
                            background: nav.colors.konzept,
                            width: 110,
                            height: 60,
                            left: -3,
                        }}
                        animate={{
                            skewX:[1, 3, 1],
                            skewY: [-2, -3, -2],
                            opacity: [.6,.4,.6]
                        }}
                        transition={{
                            ease: "linear",
                            duration: 5,
                            repeat: Infinity
                        }}
                    />
                    <motion.p
                        style={{
                            transform: "rotate(-3deg)"
                        }}
                    >
                        <span>Konzept</span>
                        <span>& Aktionen</span>  
                    </motion.p>
                </div>

                <motion.div
                    className={styles.events}
                    initial="eventsOn"
                    animate={nav.eventsOpen ? "eventsOn" : "eventsOff"}
                    variants={eventsAnime}
                    transition={{
                        duration: .3,
                        ease: "linear"
                    }}
                >
                    {artists.artists.map(artist => (
                        <Link
                            key={artist.slug}
                            onClick={() => setNav(state => ({ ...state, artistPage: false, eventsOpen: false }))}
                            to={`/${artist.slug}`}
                            style={{
                                backgroundColor: nav.colors.konzept
                            }}
                        >
                            {artist.title}
                        </Link>
                    ))}
                </motion.div>

                <Link
                    className={styles.link}
                    style={{
                        marginTop: 7
                    }}
                    to="/karte/"
                >
                    <motion.div
                        className={styles.linkBack}
                        style={{ 
                            background: nav.colors.karte, 
                            width: 100,
                            height: 60,
                            left: -3,
                        }}
                        animate={{
                            skewX:[-1, -3, -1],
                            skewY: [2, 3, 2],
                            opacity: [.6,.4,.6]
                        }}
                        transition={{
                            ease: "linear",
                            duration: 5,
                            repeat: Infinity
                        }}
                    />
                    <p>
                        <span>Karte</span>
                        <span>& Kontakt</span>  
                    </p>
                </Link>
            </motion.div>
        </nav>
    )
}

export default Nav