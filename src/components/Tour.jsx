import React, { useMemo, useContext } from 'react'
import { MapContext } from '../providers/MapProvider'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion, AnimatePresence } from 'framer-motion'

import * as styles from '../styles/tour.module.scss'

const Tour = () => {
    const [map, setMap] = useContext(MapContext)
    console.log(map)
    console.log(map.currentTour.stops[map.currentStop].gatsbyImageData)

    const slide = useMemo(() => {
        console.log("the image: ", map.currentTour.stops[map.currentStop].image.gatsbyImageData)
        const thisImage = getImage(map.currentTour.stops[map.currentStop].image.gatsbyImageData)

        return (
                <div className={styles.slide}>
                    <GatsbyImage image={thisImage} alt="beutiful" />
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
                {map.openTour && map.startTour && (
                    <div className={styles.tourControls}>
                        <p onClick={() =>{
                            setMap(state => ({ ...state, currentStop: state.currentStop + 1 }))
                        }}>next {map.currentStop}</p>
                    </div>
                )}
                {map.openTour && !map.startTour ? (
                    <div 
                        className={styles.startTour}
                        onClick={() => setMap(state => ({ ...state, startTour: true }))}
                    >
                        <p>start tour</p>
                    </div>
                ) : slide }
            </motion.section>
        </AnimatePresence>
    )
}

export default Tour