import { createContext, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

const GlobalContext = createContext()

export function useGlobalContext () {
  return useContext(GlobalContext)
}

function AppContext ({ children }) {
  const heroImageData = {
    alt: 'cake stand with heart-shaped cookies and a cup with coffee and heart-shaped sweets floating on the surface all in different shades of pink',
    title: 'Photo by Jill Wellington from Pexels',
    src: 'assets/hero-pexels-jill-wellington.jpg'
  }
  const [headerHeight, setHeaderHeight] = useState(0)
  return (
    <GlobalContext.Provider
      value={{ location, heroImageData, headerHeight, setHeaderHeight }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
