import React, { useState, useEffect, createContext } from 'react'

export const MapContext = createContext()

const MapProvider = ({ children }) => {
    const [map, setMap] = useState({
        viewArtists: false,
        viewEvents: false,
        lng: 13.359980,
        lat: 52.494414,
        zoom: 16,
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