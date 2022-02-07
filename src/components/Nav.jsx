import React, { useContext } from 'react'
import { Link } from 'gatsby'

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
    console.log(nav.navOpen)
    const size = useWindowSize()

    return (
        <nav className={styles.container}>
            {size.width < 768 && (
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
                    marginTop: size.width < 768 ? 60 : 0
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
                            uberOpen: !state.uberOpen
                        }))
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
                            eventsOpen: state.eventsOpen ? false : null
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
                >
                    {artists.artists.map(artist => (
                        <Link
                            key={artist.slug}
                            to={`/${artist.slug}`}
                        >
                            <p>{artist.name}</p>
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
                            artistOpen: state.artistOpen ? false : null
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
                >
                    {artists.artists.map(artist => (
                        <Link
                            key={artist.slug}
                            to={`/${artist.slug}`}
                        >
                            <p>{artist.title}</p>
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