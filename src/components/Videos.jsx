import React from 'react'
import { randomNumberPosNeg } from '../helpers'
import { motion } from 'framer-motion'

import * as styles from '../styles/videos.module.scss'

const Videos = ({ names }) => {
    console.log(names)
    return (
        <div className={styles.container}>
            {names.map(name => (
                <div className={styles.videoContainer} key={name}>
                    <motion.div 
                        className={styles.videoBack}
                        initial={{
                            rotate: randomNumberPosNeg(2)
                        }} 
                    />
                    <video controls style={{width: "100%", position: "relative", zIndex: 101}}>
                        <source src={`../${name}.mp4`} type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    )
}

export default Videos