import React, { useState, useEffect, useMemo, useContext } from 'react'

import MapPoint from '../components/MapPoint'
import MapLine from '../components/MapLine'

import { MapContext } from '../providers/MapProvider'
import { ArtistContext } from '../providers/ArtistProvider'
import { useWindowSize } from "../hooks/useWindowSize";

import ReactMapGL, {NavigationControl, FlyToInterpolator, Marker} from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from 'mapbox-gl'

mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Map = ({}) => {
    const size = useWindowSize()
    const [map, setMap] = useContext(MapContext)
    const [artists] = useContext(ArtistContext)

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
        <section style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            zIndex: 100,
            margin: 0,
            padding: 0,
            top: 0,
            left: 0
        }}>
            <ReactMapGL
                {...viewport}
                style={{ position: 'fixed', zIndex: 202 }}
                mapStyle="mapbox://styles/mapbox/light-v10"
                onMove={nextViewport => setViewport(nextViewport)}
                mapboxAccessToken={`${process.env.GATSBY_MAPBOX}`}
            >
                {(map.viewArtists || map.viewEvents) && markers}
                {map.startTour && <MapLine />}

                <NavigationControl 
                    position="bottom-left"
                    showCompass={false}
                />
            </ReactMapGL>
        </section>
    )
}

export default Map