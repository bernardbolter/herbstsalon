import React, { useState, useEffect, createContext } from 'react'

export const MapContext = createContext()

const MapProvider = ({ children }) => {
    const [map, setMap] = useState({
        map: "got a map"
    })

    return (
        <MapContext.Provider
            value={[map, setMap]}
        >
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider