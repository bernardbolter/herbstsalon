import React, { useContext } from 'react'
import { NavContext } from '../providers/NavProvider'
import { motion } from 'framer-motion'
import AudioPlayer from 'react-h5-audio-player'
import { hexToRGB } from '../helpers'

import * as styles from '../styles/podcast.module.scss'

const Podcast = ({ podcast }) => {
    const [nav] = useContext(NavContext)
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.podcast}
        >
            <p
                style={{
                    background: nav.artistPage ? hexToRGB(nav.colors.kunst, 0.8) : hexToRGB(nav.colors.konzept, 0.8)
                }}
            >Interview</p>
            <AudioPlayer
                src={podcast}
                showJumpControls={false}
                showFilledProgress={false}
            />
            <div className={styles.podcastBack} />
        </motion.div>
    )
}

export default Podcast