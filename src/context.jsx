import { createContext, useContext, useState } from 'react'
import { products } from './data'

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

  const [allProducts, setAllProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(products)

  function filterProducts (text) {
    const term = text.trim().toLowerCase()
    const newProducts = allProducts.filter(product => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      )
    })

    setFilteredProducts(newProducts)

    console.log('searchTerm:', term)
    console.log('new product list:', newProducts)
  }
  return (
    <GlobalContext.Provider
      value={{
        location,
        heroImageData,
        headerHeight,
        setHeaderHeight,
        allProducts,
        setAllProducts,
        filteredProducts,
        setFilteredProducts,
        filterProducts
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
