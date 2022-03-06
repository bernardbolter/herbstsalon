import React, { useContext } from 'react'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

import { Source, Layer } from 'react-map-gl'

const MapLine = () => {
    const [map] = useContext(MapContext)
    const [nav] = useContext(NavContext)

    const dataOne = {
        type: "Feature",
        geometry: {
          type: "LineString",
            coordinates: map.currentTour.lines
        }
    }

    return (
        <Source
            id="first line"
            type="geojson"
            data={dataOne}
        >
            <Layer
                id="lineLayer"
                type="line"
                source="my-data"
                layout={{
                    "line-join" : "round",
                    "line-cap" : "round"
                }}
                paint={{
                    "line-color" : nav.colors.karte,
                    "line-width" : 4
                }}
            />
        </Source>
    )
}

export default MapLine