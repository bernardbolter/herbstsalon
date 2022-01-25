import React, { useState, useEffect, createContext } from 'react'

export const NavContext = createContext()

const NavProvider = ({ children }) => {
    const [nav, setNav] = useState({
        navOpen: false
    })

    return (
        <NavContext.Provider
            value={[nav, setNav]}
        >
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider