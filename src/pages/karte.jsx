import React, { useState, useEffect, useMemo, useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import ReactMapGL, {NavigationControl, Source, Layer, FlyToInterpolator, Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

import Nav from '../components/Nav'
import KarteNav from '../components/KarteNav'
import MapPoint from '../components/MapPoint'

import { NavContext } from "../providers/NavProvider";
import { MapContext } from "../providers/MapProvider";
import { ArtistContext } from "../providers/ArtistProvider";

import * as styles from '../styles/karte.module.scss'

const Karte = ({ location }) => {
    const [nav, setNav] = useContext(NavContext)
    const [artists, setArtists] = useContext(ArtistContext)
    const [map, setMap] = useContext(MapContext)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100vh",
        latitude: map.lat,
        longitude: map.lng,
        zoom: map.zoom
    })

    const markers = useMemo(() => artists.artists.map(point => {
        if (point.location !== null) {

            return (
                <Marker
                    key={point.slug}
                    longitude={point.location.lon}
                    latitude={point.location.lat}
                >
                    <MapPoint point={point} />
                </Marker>
            )
        }
    }))

    return (
        <motion.div
            className={styles.container}
            style={{
                background: nav.colors.karte
            }}
        >
            <Nav location={location}/>
            <KarteNav />
            <ReactMapGL
                {...viewport}
                style={{ position: 'fixed', zIndex: 202 }}
                mapStyle="mapbox://styles/mapbox/light-v10"
                onMove={nextViewport => setViewport(nextViewport)}
                mapboxAccessToken={`${process.env.GATSBY_MAPBOX}`}
            >
                {markers}
                <NavigationControl 
                    position="bottom-left"
                    showCompass={false}
                />
            </ReactMapGL>
        </motion.div>
    )
}

export default Karte