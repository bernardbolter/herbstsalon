import React from 'react'

import * as styles from '../styles/map-point.module.scss'

const MapPoint = ({ point }) => {
    return (
        <div className={styles.container}>
            <p>{point.name}</p>
        </div>
    )
}

export default MapPoint