import React, { useContext } from 'react'
import { ArtistContext } from '../providers/ArtistProvider'
import { MapContext } from '../providers/MapProvider'
import { NavContext } from '../providers/NavProvider'

// markup
const IndexPage = () => {
  const [artist, setArtist] = useContext(ArtistContext)
  const [nav, setNav] = useContext(NavContext)
  const [map, setMap] = useContext(MapContext)

  console.log(artist)
  console.log(map)
  console.log(nav)
  return (
    <main>
      <p>INdex</p>
    </main>
  )
}

export default IndexPage
