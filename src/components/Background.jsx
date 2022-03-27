import React from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import { useWindowSize } from '../hooks/useWindowSize'

const Background = () => {
    const size = useWindowSize()
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                position: 'fixed',
                zIndex: -1,
                margin: 0,
                padding: 0,
                top: 0,
                left: 0,
            }}
        >
            {size.width > 768
                ? (
                    <StaticImage
                        src="../images/back-logo-lg.png"
                        alt="transparent logo"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            height: '100vh'
                        }}
                        placholder="tracedSVG"
                        layout="fullWidth"
                    />
                ) : (
                    <StaticImage
                        src="../images/back-logo-sm.png"
                        alt="transparent logo"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            height: '100vh'
                        }}
                        placholder="tracedSVG"
                        layout="fullWidth"
                    />
                )
            }

            {/* <motion.div
                initial={{
                    opacity: 1
                }}
                animate={{
                    opacity: 0
                }}
                exit={{
                    opacity: 1
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5
                }}
            > */}
                <StaticImage 
                        src="../images/background2.jpg"
                        alt="mobile background with Pallesium" 
                        style={{ 
                            position: 'unset',
                            zIndex: 1
                        }}
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    />
            {/* </motion.div> */}
            

            {/* {size.width > 768
                ? (
                    <StaticImage 
                        src="../images/background.jpg" 
                        alt="destop background with Pallesium" 
                        style={{ 
                            position: 'unset',
                            zIndex: 1
                        }}
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    />
                ) : (
                    <StaticImage 
                        src="../images/background2.jpg"
                        alt="mobile background with Pallesium" 
                        style={{ 
                            position: 'unset',
                            zIndex: 1
                        }}
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    />
                )
            }  */}
        </div>
    )
}

export default Background