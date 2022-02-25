import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

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
                left: 0
            }}
        >
            {size.width > 768
                ? (
                    <StaticImage 
                        src="../images/desktop_background.jpg" 
                        alt="destop background with Pallesium" 
                        style={{ position: 'unset' }}
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    />
                ) : (
                    <StaticImage 
                        src="../images/mobile_background.jpg"
                        alt="mobile background with Pallesium" 
                        style={{ position: 'unset' }}
                        placeholder="tracedSVG"
                        layout="fullWidth"
                    />
                )
            } 
        </div>
    )
}

export default Background