import React, { useMemo, useContext } from 'react'
import { MapContext } from '../providers/MapProvider'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactPlayer from 'react-player'
import { motion, AnimatePresence } from 'framer-motion'

import * as styles from '../styles/tour.module.scss'

const Tour = () => {
    const [map, setMap] = useContext(MapContext)
    console.log(map)

    const slide = useMemo(() => {
        console.log("the image: ", map.currentTour.stops[map.currentStop].image.gatsbyImageData)
        var theImage
        var theVideo
        if (map.currentTour.slug === 'traces-perceptions-reflections') {
            theVideo = map.currentTour.stops[map.currentStop].image.file.url
        } else {
            theImage = getImage(map.currentTour.stops[map.currentStop].image.gatsbyImageData)
        }
        console.log(map.currentTour.stops[map.currentStop].image.file.url)

        return (
                <div className={styles.slide}>
                    {map.currentTour.slug === 'traces-perceptions-reflections'
                        ? <GatsbyImage image={theImage} alt="beutiful" />
                        : <ReactPlayer url={`https:${map.currentTour.stops[map.currentStop].image.file.url}`} />
                    }
                </div>
            )
    }, [map.currentStop])

    return (
        <AnimatePresence>
            <motion.section 
                className={styles.container}
                initial={{ translateY: 200 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: 200 }}  
            >
                {map.openTour && !map.startTour && (
                    <div 
                        className={styles.startTourHeader}
                        onClick={() => setMap(state => ({ ...state, startTour: true }))}    
                    >
                        <p>Start Tour</p>
                        <svg viewBox="0 0 20 23">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 11.4285C20 12.2137 19.5771 12.9004 18.9467 13.2737L3.25762 22.5445C3.25218 22.5482 3.24638 22.5507 3.24167 22.5543L3.23261 22.5594C2.91374 22.7485 2.54052 22.8572 2.14302 22.8572C0.959914 22.8572 0 21.8981 0 20.7142V2.14302C0 0.959915 0.959914 0 2.14302 0C2.54053 0 2.91375 0.109434 3.23261 0.298588V0.297863L3.24167 0.302573C3.24638 0.306922 3.25218 0.309457 3.25762 0.31308L18.9467 9.58329C19.5775 9.95723 20 10.6436 20 11.4284" />
                        </svg>
                    </div>
                )}

                {map.openTour && map.startTour && (
                    <div className={styles.tourControls}>
                        <p>{map.currentStop + 1}. {map.currentTour.stops[map.currentStop].title}</p>
                        <div className={styles.tourButtons}>
                            {map.currentStop !== 0 && (
                                <p onClick={() =>{
                                    if (!map.mapNoClick) {
                                        setMap(state => ({ 
                                            ...state, 
                                            currentStop: state.currentStop - 1,
                                            mapNoClick: true
                                        }))
                                    }
                                    setTimeout(() => {
                                        setMap(state => ({ ...state, mapNoClick: false }))
                                    }, 2000)
                                }}>last slide</p>
                            )}
                            <p onClick={() => {
                                if (!map.mapNoClick) {
                                    setMap(state => ({ 
                                        ...state, 
                                        currentStop: state.currentStop === state.currentTour.stops.length - 1 ? 0 : state.currentStop + 1,
                                        startTour: state.currentStop === state.currentTour.stops.length - 1 ? false : true,
                                        openTour: state.currentStop === state.currentTour.stops.length -1 ? false : true,
                                        mapNoClick: true
                                    }))
                                }
                                setTimeout(() => {
                                    setMap(state => ({ ...state, mapNoClick: false }))
                                }, 2000)
                            }}>{map.currentStop === map.currentTour.stops.length - 1 ? "stop tour" : "next stop"}</p>
                        </div>
                    </div>
                )}

                {map.currentTour.stops[map.currentStop].description !== null && map.startTour && (
                    <div className={styles.stopDescription}>
                        <p>{map.currentTour.stops[map.currentStop].description.description}</p>
                    </div>
                )}

                {map.openTour && !map.startTour ? (
                    <div className={styles.startTour}>   
                        <p>{map.currentTour.description}</p>
                    </div> 
                ) : slide }
            </motion.section>
        </AnimatePresence>
    )
}

export default Tour