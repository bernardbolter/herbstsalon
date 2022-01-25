import React from 'react'
import NavProvider from '../providers/NavProvider'
import ArtistProvider from '../providers/ArtistProvider'
import MapProvider from '../providers/MapProvider'

const RootLayout = ({ element }) => (
    <NavProvider>
        <ArtistProvider>
            <MapProvider>
                {element}
            </MapProvider>
        </ArtistProvider>
    </NavProvider>
)

export default RootLayout