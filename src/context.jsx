import { createContext, useContext, useEffect, useState } from 'react'
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
  const [allProducts, setAllProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState(initialFilters)
  const [priceError, setPriceError] = useState(null)

  /**
   * Creates a camelcase version of standard text with spaces or a hyphenated text
   * @param {String} string Text to capitalize
   * @returns {String} Capitalized text string
   */
  function makeCapitalizedText (string) {
    const capitalized = []
    if (string.includes(' ')) {
      string.split(' ').forEach((item, index) => {
        if (index === 0) {
          capitalized.push(item)
        } else {
          const newItem = item.substring(0, 1).toUpperCase() + item.substring(1)
          capitalized.push(newItem)
        }
      })
    } else {
      string.split('-').forEach((item, index) => {
        if (index === 0) {
          capitalized.push(item)
        } else {
          const newItem = item.substring(0, 1).toUpperCase() + item.substring(1)
          capitalized.push(newItem)
        }
      })
    }
    return capitalized.join('')
  }

  /**
   * Formats price
   * @param {Number} priceToFormat price as a number needed formating
   * @returns formatted price
   */
  function formatPrice (priceToFormat) {
    const price = priceToFormat.toString()

    if (price.includes('.')) {
      if (price.length === 5) {
        return price
      }
      if (price.length < 5) {
        return price.padEnd(5, 0)
      }
    }
    return (price + '.').padEnd(5, 0)
  }

  /**
   * Claculates the value of the discount for products on sale
   * @param {Number} promoPrice price the product has while on sale
   * @param {Number} regularPrice price the product has while not on sale
   * @returns amount of discount
   */
  function calculateDiscount (promoPrice, regularPrice) {
    const discount =
      100 - (parseFloat(promoPrice) / parseFloat(regularPrice)) * 100
    return parseFloat(discount.toFixed(1))
  }

  /**
   * Safely parses a string as a float.
   * Returns null if the input is empty or not a valid number.
   * @param {String} value string to check
   * @returns {number|null}
   */
  function safeParseFloat (value) {
    const num = parseFloat(value)
    return isNaN(num) ? null : num
  }

  /**
   * Checks if maximum value is greater than minimum value
   * @param {Number} minVal minimum value
   * @param {Number} maxVal maximum value
   * @returns error message or null
   */
  function compareMinMax (minVal, maxVal) {
    const min = safeParseFloat(minVal)
    const max = safeParseFloat(maxVal)
    if (min === null || max === null) {
      setPriceError(null)
      return
    }
    if (max <= min) {
      setPriceError('Max price must be greater than min price')
    } else {
      setPriceError(null)
    }
  }

  /**
   * Filters products based on filters applied
   * @param {String} text text typed in by the user into the search bar
   */
  function filterProducts (text) {
    const term = text.trim().toLowerCase()
    const activeTypes = Object.entries(filters.type)
      .filter(([_, value]) => value)
      .map(([key]) => key)

    const newProducts = allProducts.filter(product => {
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

  useEffect(() => {
    filterProducts(inputText)
  }, [filters, inputText])
  useEffect(() => {
    compareMinMax(filters.priceMin, filters.priceMax)
  }, [filters.priceMin, filters.priceMax])

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
        formatPrice,
        makeCapitalizedText,
        calculateDiscount,
        priceError,
        setPriceError,
        compareMinMax,
        resetFilters
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
