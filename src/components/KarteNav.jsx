import React, { useState, useEffect, useContext} from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { motion, AnimatePresence } from "framer-motion"

import { hexToRGB, randomNumber, randomNumberPosNeg, shuffle } from "../helpers";

import { MapContext } from "../providers/MapProvider"
import { NavContext } from "../providers/NavProvider"

import EyeOpen from "../svg/EyeOpen"
import EyeClosed from '../svg/EyeClosed'

import * as styles from '../styles/karte-nav.module.scss'

const KarteNav = ({ location }) => {
    console.log(location)
    const tourLinks = useStaticQuery(graphql`
        query TourLinks {
            allContentfulTour {
                edges {
                    node {
                        artist
                        title
                        slug
                    }
                }
            }
        }
    `)

    const [map, setMap] = useContext(MapContext)
    const [nav, setNav] = useContext(NavContext)
    const [links, setLinks] = useState([])

    useEffect(() => {
        const newLinks = []
        tourLinks.allContentfulTour.edges.map(tour => {
            return newLinks.push(tour.node)
        })
        console.log(newLinks)
        setLinks(shuffle(newLinks))
    }, [tourLinks])

    console.log(links)

    return (
        <>
            <motion.div
                className={styles.arrow}
                onClick={() => setMap(state => ({ ...state, karteNavOpen: !state.karteNavOpen }))}
                initial={{
                    rotate: 175,
                    translateY: 0,
                    translateX: 0,
                    scale: 1
                }}
                animate={{
                    rotate: map.karteNavOpen ? 175 : -5,
                    translateY: map.karteNavOpen ? 0 : 7,
                    translateX: map.karteNavOpen ? 0 : -4,
                    scale: map.karteNavOpen ? 1 : 1.3
                }}
                transition={{
                    duration: .5,
                    ease: "linear"
                }}
            >
                <svg viewBox="0 0 25 15">
                    <path d="M24.1576 6.5638H3.1861L9.07148 1.48004C9.42366 1.17564 9.46244 0.643646 9.15805 0.291811C8.85484 -0.0603752 8.32244 -0.0991584 7.97023 0.20484L0.29188 6.83807C0.10815 6.99634 0.00198335 7.2263 1.76844e-05 7.46919C-0.00154934 7.71169 0.101089 7.94322 0.282081 8.10423L5.28321 12.564L7.90367 14.6364C8.05802 14.759 8.24292 14.8181 8.42587 14.8181C8.67425 14.8181 8.92105 14.7084 9.08755 14.4985C9.37627 14.1334 9.31398 13.6037 8.94926 13.315L6.36641 11.2747L2.97463 8.24874H24.1577C24.6227 8.24874 25 7.87188 25 7.40647C25.0004 6.94146 24.6227 6.56381 24.1577 6.56381L24.1576 6.5638Z" />
                </svg>
            </motion.div>
            <motion.nav
                className={styles.container}
                initial={{
                    translateX: 0,
                }}
                animate={{
                    translateX: map.karteNavOpen ? 0 : 300,                
                }}
                transition={{
                    duration: .5,
                    ease: "linear"
                }}
            >
                <div 
                    className={styles.header}   
                >
                        <svg viewBox="0 0 31 31" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4973 0.453003C23.7303 0.453003 30.45 7.17219 30.45 15.5003C30.45 23.7333 23.7308 30.453 15.4973 30.453C7.1692 30.453 0.450012 23.7338 0.450012 15.5003C0.450012 7.17219 7.1692 0.453003 15.4973 0.453003V0.453003ZM24.0144 6.88857L16.7274 16.7304L6.88558 24.0174L14.1726 14.1756L24.0144 6.88857ZM15.4973 14.6488C15.8758 14.6488 16.2543 15.0274 16.2543 15.5007C16.2543 15.8792 15.8758 16.2577 15.4973 16.2577C15.024 16.2577 14.6455 15.8792 14.6455 15.5007C14.6455 15.0274 15.024 14.6488 15.4973 14.6488ZM6.03358 15.5007L10.7655 14.2703C10.9548 13.6078 11.2388 13.04 11.6173 12.4722L10.387 10.3903L12.4689 11.6206C13.0367 11.2421 13.6045 10.9581 14.2671 10.7688L15.4974 6.03685L16.633 10.7688C16.917 10.8635 17.2008 10.958 17.4848 11.0528L16.2545 11.9046C15.9705 11.9046 15.7812 11.8099 15.4975 11.8099C13.5101 11.8099 11.8066 13.5133 11.8066 15.5007C11.8066 15.7847 11.9014 15.974 11.9014 16.2577L11.0495 17.4881C10.9548 17.2041 10.8603 16.9203 10.7655 16.6363L6.03358 15.5007ZM19.8507 13.5133C20.04 13.7025 20.04 13.9866 20.1347 14.2703L24.8666 15.5007L20.1347 16.6363C19.9454 17.2988 19.6614 17.9612 19.2829 18.4344L20.5132 20.5164L18.4313 19.286C17.958 19.6646 17.2956 19.9486 16.6331 20.1379L15.4975 24.8698L14.2672 20.1379C13.9832 20.0431 13.6994 20.0431 13.5101 19.8539L14.6457 19.002C14.9297 19.0968 15.2135 19.0968 15.4976 19.0968C17.485 19.0968 19.0936 17.4879 19.0936 15.5007C19.0936 15.2167 19.0936 14.9329 18.9989 14.6489L19.8507 13.5133ZM16.2546 1.96797L15.4976 3.86066L14.7405 1.96797C7.83223 2.34651 2.3432 7.83573 1.96447 14.744L3.85716 15.5011L1.96447 16.2581C2.34301 23.0719 7.83223 28.5609 14.7405 28.939L15.4976 27.1409L16.2546 28.939C23.0684 28.5605 28.5574 23.0713 28.9356 16.2581L27.1374 15.5011L28.9356 14.744C28.557 7.83573 23.0678 2.3467 16.2546 1.96797V1.96797Z" />
                        </svg>
                        <div className={styles.headerText}>
                            <p>Karte</p>
                            <p>Navigation</p>
                        </div>
                        <motion.div 
                            className={styles.headerBack} 
                            style={{ background: hexToRGB(nav.colors.karte, .8) }}
                            initial={{
                                translateX: 0,
                                translateY: 0,
                                rotate: 2
                            }}
                            animate={{
                                translateX: !map.karteNavOpen ? -200 : 0,
                                translateY: !map.karteNavOpen ? -20 : 0,
                                rotate: 2
                            }}
                            transition={{
                                duration: .5,
                                ease: "linear"
                            }}
                        />
                </div>

                <motion.div 
                    className={styles.artistContainer}
                >
                    <div 
                        className={styles.link}
                        onClick={() => {
                            setMap(state => ({
                                ...state, 
                                viewArtists: !state.viewArtists,
                                viewEvents: state.viewEvents && false
                            }))
                        }}    
                    >
                        <div className={styles.eyeContainer}>
                            {map.viewArtists
                            ? <EyeClosed color={nav.colors.kunst} width={33} /> 
                            : <EyeOpen color={nav.colors.kunst} width={38} />
                            }
                            <p style={{color: nav.colors.kunst}}>{map.viewArtists ? "Hide" : "View"}</p>
                        </div>
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
                            setMap(state => ({
                                ...state, 
                                viewArtists: state.viewEvents && false,
                                viewEvents: !state.viewEvents
                            }))
                        }}
                    >
                        <div className={styles.eyeContainer}>
                            {map.viewEvents
                                ? <EyeClosed color={nav.colors.konzept} width={33} /> 
                                : <EyeOpen color={nav.colors.konzept} width={38} />
                            }
                            <p style={{color: nav.colors.konzept}}>{map.viewArtists ? "Hide" : "View"}</p>
                        </div>          
                        <p
                            style={{ color: nav.colors.konzept }}
                        >
                            <span>Konzept</span>
                            <span>& Aktionen</span>  
                        </p>
                    </div>
                </motion.div>

                <div className={styles.toursContainer}>
                    <div className={styles.toursHeader}>
                        <svg viewBox="0 0 40 22" 
                            style={{ fill: nav.colors.karte }}>
                            <path d="M20.0001 0.000147889C10.3158 0.000147889 0 3.02459 0 8.61796C0 13.5897 8.12635 16.5314 16.7159 17.1115L14.5263 19.3071C13.8948 19.9284 13.8948 20.9229 14.5263 21.5442C14.8212 21.8344 15.2421 22 15.6632 22C16.0844 22 16.4633 21.8344 16.8001 21.5442L21.5578 16.7797C22.1893 16.1584 22.1893 15.1639 21.5578 14.5426L16.7578 9.86069C16.1263 9.23933 15.1157 9.23933 14.4843 9.86069C13.8528 10.4821 13.8528 11.4765 14.4843 12.0979L16.4213 14.0039C8.21071 13.3825 3.15806 10.6063 3.15806 8.65932C3.15806 6.42215 9.72643 3.14889 19.9581 3.14889C30.2318 3.14889 36.7582 6.42185 36.7582 8.65932C36.7582 10.2752 33.3477 12.554 26.9897 13.5898C26.1054 13.714 25.5582 14.5426 25.6845 15.4128C25.8945 16.1998 26.7369 16.7799 27.5789 16.6556C35.3684 15.3713 40 12.3468 40 8.61781C40 3.02467 29.6842 0 19.9999 0L20.0001 0.000147889Z" />
                        </svg>
                        <p style={{ color: nav.colors.karte }}>Touren</p>
                    </div>
                    
                    {links.map(link => (
                        <div className={styles.tourContainer} key={link.artist}>
                            <div 
                                className={styles.tourLink}
                                onClick={() => {
                                    var newTour = map.allTours.find(tour => {
                                        return tour.slug === link.slug
                                    })
                                    if (map.currentTour.slug === link.slug && map.openTour) {
                                        setMap(state => ({ ...state, currentTour: newTour, openTour: false, startTour: false }))
                                    } else {
                                        setMap(state => ({ ...state, currentTour: newTour, openTour: true, currentStop: 0}))
                                    }
                                }}
                            >
                                <div className={styles.linkStartContainer}>
                                    <h2>{map.openTour && (map.currentTour.slug === link.slug) ? 'Stop' : 'Start'}</h2>
                                    {map.openTour && (map.currentTour.slug === link.slug) ? (
                                        <svg viewBox="0 0 25 25" key="stop">
                                            <path d="M16.2368 7.6579H8.76316C8.15795 7.6579 7.6579 8.15794 7.6579 8.76316V16.2368C7.6579 16.8421 8.15795 17.3421 8.76316 17.3421H16.2368C16.8421 17.3421 17.3421 16.8421 17.3421 16.2368V8.76316C17.3421 8.15794 16.8421 7.6579 16.2368 7.6579V7.6579Z" />
                                            <path d="M12.5 0C5.60526 0 0 5.60526 0 12.5C0 19.3947 5.60526 25 12.5 25C19.3947 25 25 19.3947 25 12.5C25 5.60526 19.3947 0 12.5 0ZM12.5 23.0526C6.68421 23.0526 1.94737 18.3158 1.94737 12.5C1.94737 6.68421 6.68421 1.94737 12.5 1.94737C18.3158 1.94737 23.0526 6.68421 23.0526 12.5C23.0526 18.3158 18.3158 23.0526 12.5 23.0526V23.0526Z" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 20 23" key="start">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 11.4285C20 12.2137 19.5771 12.9004 18.9467 13.2737L3.25762 22.5445C3.25218 22.5482 3.24638 22.5507 3.24167 22.5543L3.23261 22.5594C2.91374 22.7485 2.54052 22.8572 2.14302 22.8572C0.959914 22.8572 0 21.8981 0 20.7142V2.14302C0 0.959915 0.959914 0 2.14302 0C2.54053 0 2.91375 0.109434 3.23261 0.298588V0.297863L3.24167 0.302573C3.24638 0.306922 3.25218 0.309457 3.25762 0.31308L18.9467 9.58329C19.5775 9.95723 20 10.6436 20 11.4284" />
                                        </svg>
                                    )}
                                    
                                </div>
                                <div className={styles.linkTextContainer}>
                                    <h3>{link.title}</h3>
                                    <p> - {link.artist}</p>
                                </div>
                            </div>
                            <motion.div
                                initial={{
                                    rotate: randomNumberPosNeg(3),
                                    translateX: randomNumber(4,20)
                                }} 
                                className={styles.toursBack} 
                                style={{ 
                                    background: hexToRGB(nav.colors.karte, .7)
                                }}
                            />
                        </div>
                        ))
                    }
                </div>
            </motion.nav>
        </>
    )
}

export default KarteNav