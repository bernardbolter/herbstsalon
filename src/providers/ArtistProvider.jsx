import React, { useState, useEffect, createContext } from 'react'

export const ArtistContext = createContext()

const ArtistProvider = ({ children }) => {
    const [artists, setArtists] = useState({
        artists: "bernard"
    })

    // useEffect(() => {
    //     setArtist(state => ({ ...state, artists: [{ name: "bernard" }] }))
    // }, [])

    return (
        <ArtistContext.Provider
            value={[artists, setArtists]}
        >
            {children}
        </ArtistContext.Provider>
    )
}

export default ArtistProvider