import React, { useContext } from 'react'
import { NavContext } from '../providers/NavProvider'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from '../styles/curators.module.scss'

const Curators = () => {
    const [nav] = useContext(NavContext)
    return (
        <div className={styles.container}>
            <h5>Kuratiert von:</h5>
            <h1 style={{ color: nav.colors.uber }}>Margita Weiler &</h1>
            <h1 style={{ color: nav.colors.uber }}>Stephan Kruhl</h1>
            <p>Im Rahmen Von:</p>
            <StaticImage
                style={{ opacity: .75 }}
                width={100}
                src="../images/cb-logo.png"
                alt="cb logo"
                placholder="tracedSVG"
            />
        </div>
    )
}

export default Curators