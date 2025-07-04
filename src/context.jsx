import { createContext, useContext, useEffect, useState } from 'react'
import { products } from './data'
import { compareMinMax } from './utils'
import { blogPosts } from './data/blogPosts'

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
  const initialFilters = {
    bestseller: false,
    newArrival: false,
    sale: false,
    type: {
      cake: false,
      cookie: false,
      pastry: false,
      dessert: false
    },
    availability: false,
    rating: 0,
    priceMin: 0,
    priceMax: 30
  }
  const [headerHeight, setHeaderHeight] = useState(0)
  const [inputText, setInputText] = useState('')
  const [currentCategory, setCurrentCategory] = useState(null)
  const [allProducts, setAllProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState(initialFilters)
  const [priceError, setPriceError] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [allPosts, setAllPosts] = useState(blogPosts)
  const [sortedPosts, setSortedPosts] = useState(blogPosts)
  const [sortBy, setSortBy] = useState('newest')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const demoUser = {
    username: 'demo-user',
    password: '!password123'
  }

  /**
   * Checks minimum & maximum price values
   * @param {Number} minVal minimum price
   * @param {Number} maxVal maximum price
   */
  function validatePrices (minVal, maxVal) {
    const errorMessage = compareMinMax(minVal, maxVal)
    setPriceError(errorMessage)
  }

  /**
   * Filters products based on filters applied
   * @param {String} text text typed in by the user into the search bar
   */
  function filterProducts (text, category = null) {
    const term = text.trim().toLowerCase()
    const activeTypes = Object.entries(filters.type)
      .filter(([_, value]) => value)
      .map(([key]) => key)

    const newProducts = allProducts.filter(product => {
      // Category
      if (category && product.type !== category) return false
      // Tag
      if (filters.bestseller && !product.bestseller) return false

      if (filters.newArrival && !product.newArrival) return false

      if (filters.sale && !product.sale) return false

      // Type
      if (activeTypes.length > 0 && !activeTypes.includes(product.type))
        return false

      // Availability
      if (filters.availability && !product.availability) return false

      // Minimum Rating
      if (!isNaN(filters.rating) && product.rating < filters.rating)
        return false

      // Price
      if (!isNaN(filters.priceMin) && product.currentPrice < filters.priceMin)
        return false

      if (!isNaN(filters.priceMax) && product.currentPrice > filters.priceMax)
        return false

      // Text search
      return (
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      )
    })

    setFilteredProducts(newProducts)
  }

  /**
   * Resets filter values to initial ones
   */
  function resetFilters () {
    setInputText('')
    setFilters(initialFilters)
  }

  function sortPosts (sortBy) {
    const newPosts = allPosts.toSorted((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date)
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date)
      if (sortBy === 'a-z') return a.title.localeCompare(b.title)
      if (sortBy === 'z-a') return b.title.localeCompare(a.title)
    })
    setSortedPosts(newPosts)
  }

  useEffect(() => {
    filterProducts(inputText, currentCategory)
  }, [filters, inputText, currentCategory])
  useEffect(() => {
    validatePrices(filters.priceMin, filters.priceMax)
  }, [filters.priceMin, filters.priceMax])
  useEffect(() => {
    sortPosts(sortBy)
  }, [sortBy])

  return (
    <GlobalContext.Provider
      value={{
        location,
        heroImageData,
        initialFilters,
        headerHeight,
        setHeaderHeight,
        inputText,
        setInputText,
        allProducts,
        setAllProducts,
        filteredProducts,
        setFilteredProducts,
        filterProducts,
        filters,
        setFilters,
        validatePrices,
        priceError,
        setPriceError,
        compareMinMax,
        resetFilters,
        isSearching,
        setIsSearching,
        allPosts,
        setAllPosts,
        sortedPosts,
        setSortedPosts,
        sortBy,
        setSortBy,
        isLoggedIn,
        setIsLoggedIn,
        demoUser,
        currentCategory,
        setCurrentCategory
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
