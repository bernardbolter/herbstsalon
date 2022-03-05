import React, { useMemo, useContext } from 'react'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

import { Source, Layer } from 'react-map-gl'

const MapLine = () => {
    const [map] = useContext(MapContext)
    const [nav] = useContext(NavContext)

    console.log(map.tours[0].lines)

    // const coords = useMemo(() => {
    //     return 
    // }, [map.currentTour])


    const dataOne = {
        type: "Feature",
        geometry: {
          type: "LineString",
            //   coordinates: map.coords
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