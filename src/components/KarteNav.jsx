import React, { useState, useEffect, useContext} from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { motion } from "framer-motion"

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
        tourLinks.allContentfulTour.edges.map(tour => {
            setLinks(state => ([...state, {...tour.node}]))
        })
    }, [tourLinks])

    console.log(links)

    return (
        <motion.nav
            className={styles.container}
            style={{
                borderColor: nav.colors.karte
            }}
        >
            <div 
                className={styles.header}
                style={{ background: nav.colors.karte }}    
            >
                    <svg viewBox="0 0 31 31" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.4973 0.453003C23.7303 0.453003 30.45 7.17219 30.45 15.5003C30.45 23.7333 23.7308 30.453 15.4973 30.453C7.1692 30.453 0.450012 23.7338 0.450012 15.5003C0.450012 7.17219 7.1692 0.453003 15.4973 0.453003V0.453003ZM24.0144 6.88857L16.7274 16.7304L6.88558 24.0174L14.1726 14.1756L24.0144 6.88857ZM15.4973 14.6488C15.8758 14.6488 16.2543 15.0274 16.2543 15.5007C16.2543 15.8792 15.8758 16.2577 15.4973 16.2577C15.024 16.2577 14.6455 15.8792 14.6455 15.5007C14.6455 15.0274 15.024 14.6488 15.4973 14.6488ZM6.03358 15.5007L10.7655 14.2703C10.9548 13.6078 11.2388 13.04 11.6173 12.4722L10.387 10.3903L12.4689 11.6206C13.0367 11.2421 13.6045 10.9581 14.2671 10.7688L15.4974 6.03685L16.633 10.7688C16.917 10.8635 17.2008 10.958 17.4848 11.0528L16.2545 11.9046C15.9705 11.9046 15.7812 11.8099 15.4975 11.8099C13.5101 11.8099 11.8066 13.5133 11.8066 15.5007C11.8066 15.7847 11.9014 15.974 11.9014 16.2577L11.0495 17.4881C10.9548 17.2041 10.8603 16.9203 10.7655 16.6363L6.03358 15.5007ZM19.8507 13.5133C20.04 13.7025 20.04 13.9866 20.1347 14.2703L24.8666 15.5007L20.1347 16.6363C19.9454 17.2988 19.6614 17.9612 19.2829 18.4344L20.5132 20.5164L18.4313 19.286C17.958 19.6646 17.2956 19.9486 16.6331 20.1379L15.4975 24.8698L14.2672 20.1379C13.9832 20.0431 13.6994 20.0431 13.5101 19.8539L14.6457 19.002C14.9297 19.0968 15.2135 19.0968 15.4976 19.0968C17.485 19.0968 19.0936 17.4879 19.0936 15.5007C19.0936 15.2167 19.0936 14.9329 18.9989 14.6489L19.8507 13.5133ZM16.2546 1.96797L15.4976 3.86066L14.7405 1.96797C7.83223 2.34651 2.3432 7.83573 1.96447 14.744L3.85716 15.5011L1.96447 16.2581C2.34301 23.0719 7.83223 28.5609 14.7405 28.939L15.4976 27.1409L16.2546 28.939C23.0684 28.5605 28.5574 23.0713 28.9356 16.2581L27.1374 15.5011L28.9356 14.744C28.557 7.83573 23.0678 2.3467 16.2546 1.96797V1.96797Z" />
                    </svg>
                    <div className={styles.headerText}>
                        <p>Karte</p>
                        <p>Navigation</p>
                    </div>
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

            <div 
                className={styles.tours}
                        style={{ background: nav.colors.karte }}
            >
                <p>Touren</p>
            </div>

            <div className={styles.tourContainer}>
                {links.map(link => (
                    <div 
                        className={styles.tourLink}
                        onClick={() => {
                            if (location.pathname === `/${link.slug}/`) {
                                setMap(state => ({ ...state, openTour: !state.openTour }))
                            } else {
                                navigate(`/${link.slug}/`)
                            }
                        }}
                        key ={link.artist}
                    >
                        <h2>{(location.pathname === `/${link.slug}/` && map.openTour) ? 'Stop' : 'Start'}</h2>
                        <p style={{ color: nav.colors.karte }}>{link.artist}</p>
                        <h3>Tour</h3>
                    </div>
                ))
                }
            </div>
        </motion.nav>
    )
}

export default KarteNav