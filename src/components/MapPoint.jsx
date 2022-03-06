import React, { useState, useMemo, useContext } from 'react'
import { navigate } from 'gatsby'
import { MapContext } from "../providers/MapProvider";
import { NavContext } from "../providers/NavProvider";

import * as styles from '../styles/map-point.module.scss'

const MapPoint = ({ point }) => {
    const [map] = useContext(MapContext)
    const [nav] = useContext(NavContext)
    const [info, setInfo] = useState(false)

    const initials = useMemo(() => {
        return point.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
    }, [point.name])

    return (
        <>
        <div 
            className={styles.point}
            onClick={() => setInfo(!info)}
            style={{ color: map.viewArtists ? nav.colors.kunst : nav.colors.konzept }}   
        >
            {!info && <p>{initials.substring(0,2)}</p>}
            <svg viewBox="0 0 40 62">
                
                <path 
                    d="M0 0V62L39.5 0H0Z" 
                    fill={map.viewArtists ? nav.colors.kunst : nav.colors.konzept}/>
            </svg>
        </div>
        {info && (
            <div 
                className={styles.info}
                style={{ background: map.viewArtists ? nav.colors.kunst : nav.colors.konzept }}
                onClick={() => navigate(`/${point.slug}/`)}
            >
                <h2>{map.viewArtists ? point.name : point.title}</h2>
            </div>
        )}
        </>
    )
}

export default MapPoint