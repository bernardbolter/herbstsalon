import React, { useState, useEffect, createContext } from 'react'
import { shuffle } from '../helpers'
import { useWindowSize } from "../hooks/useWindowSize";

export const NavContext = createContext()

const NavProvider = ({ children }) => {
    const size = useWindowSize()

    const [nav, setNav] = useState({
        navOpen: false,
        hamburger: false,
        logoCenter: true,
        uberOpen: false,
        artistOpen: false,
        eventsOpen: false,
        language: 'de',
        deutsch: true,
        artistPage: true,
        uberContainerWidth: null,
        uberContainerWidthNeg: null,
        colors: {
            uber: "#4255B3",
            kunst: "#B57535",
            konzept: "#B02853",
            karte: "#74997F"
        }
    })

    useEffect(() => {
        const rawColors = ["#4255B3", "#B57535", "#B02853", "#74997F"]
        const shuffledColors = shuffle(rawColors)
        setNav(state => ({ ...state, colors: { uber: shuffledColors[0], kunst: shuffledColors[1], konzept: shuffledColors[2], karte: shuffledColors[3] }}))
    }, [])

    useEffect(() =>{
        if (size.width < 768) {
            setNav(state => ({ ...state, navOpen: false }))
        } else {
            setNav(state => ({...state, navOpen: true}))
        }
    }, [size.width])

    useEffect(() => {
        var containerWidth
        console.log("effect nav: ", size)
        if (size.width > 768) {
            containerWidth = size.width * .8
        } else {
            containerWidth = size.width
        }
        if (containerWidth !== undefined) {
            setNav(state => ({
                ...state,
                uberContainerWidth: containerWidth,
                uberContainerWidthNeg: -containerWidth
            }))
        }
    }, [size.width])

    return (
        <NavContext.Provider
            value={[nav, setNav]}
        >
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider