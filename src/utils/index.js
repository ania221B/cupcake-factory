import { useGlobalContext } from '../context'

/**
 * Creates a camelcase version of standard text with spaces or a hyphenated text
 * @param {String} string Text to capitalize
 * @returns {String} Text string written using camelCase
 */
export function makeCamelCaseText (string) {
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
 * Creates a capitalized version of standard text with spaces or a hyphenated text
 * @param {String} string Text to capitalize
 * @returns {String} Capitalized text string
 */
export function makeCapitalizedText (string) {
  const capitalized = []
  if (string.includes(' ')) {
    string.split(' ').forEach(item => {
      const newItem = item.substring(0, 1).toUpperCase() + item.substring(1)
      capitalized.push(newItem)
    })
  } else {
    string.split('-').forEach(item => {
      const newItem = item.substring(0, 1).toUpperCase() + item.substring(1)
      capitalized.push(newItem)
    })
  }
  return capitalized.join(' ')
}

/**
 * Converts standard text string into all lowercase hyphenated version of the said text string
 * @param {String} string Text to convert
 * @returns {String} All lowercase, hyphenated string
 */
export function makeHyphenatedLowerCase (string) {
  return string.toLowerCase().trim().replace(/\s+/g, '-')
}

/**
 * Converts a camel case text string into all lowercase hyphenated (kebab case) version of the said text string
 * @param {String} string Text to convert
 * @returns {String} All lowercase, hyphenated string
 */
export function makeCamelCaseKebabCase (string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Formats price to always have 2 decimal places (e.g. 5 -> "5.00")
 * @param {Number} priceToFormat Price as a number
 * @returns Formatted price
 */
export function formatPrice (priceToFormat) {
  if (typeof priceToFormat !== 'number' || isNaN(priceToFormat)) {
    throw new Error(`The price to format, ${priceToFormat} is not a number`)
  }
  return priceToFormat.toFixed(2)
}

/**
 * Claculates the value of the discount for products on sale
 * @param {Number} promoPrice price the product has while on sale
 * @param {Number} regularPrice price the product has while not on sale
 * @returns amount of discount
 */
export function calculateDiscount (promoPrice, regularPrice) {
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
export function safeParseFloat (value) {
  const num = parseFloat(value)
  return isNaN(num) ? null : num
}

/**
 * Checks if maximum value is greater than minimum value
 * @param {Number} minVal minimum value
 * @param {Number} maxVal maximum value
 * @returns error message or null
 */
export function compareMinMax (minVal, maxVal) {
  const min = safeParseFloat(minVal)
  const max = safeParseFloat(maxVal)

  if (min === null || max === null) return null
  if (max <= min) return 'Max price must be greater than min price'
  return null
}

/**
 * Formats date, so that it is displayed in the 3-character month name 1 or 2-digit day, 4-digit year format
 * @param {Date} date Current date
 * @returns {String} String with formatted date
 */
export function getFormatedDate (dateToFormat, longName = false) {
  const date = new Date(dateToFormat)
  const monthsInAYear = [
    { longName: 'January', shortName: 'Jan' },
    { longName: 'February', shortName: 'Feb' },
    { longName: 'March', shortName: 'Mar' },
    { longName: 'April', shortName: 'Apr' },
    { longName: 'May', shortName: 'May' },
    { longName: 'June', shortName: 'Jun' },
    { longName: 'July', shortName: 'Jul' },
    { longName: 'August', shortName: 'Aug' },
    { longName: 'Spetember', shortName: 'Sep' },
    { longName: 'October', shortName: 'Oct' },
    { longName: 'Novermber', shortName: 'Nov' },
    { longName: 'December', shortName: 'Dec' }
  ]
  const year = date.getFullYear()
  const month = longName
    ? monthsInAYear[date.getMonth()].longName
    : monthsInAYear[date.getMonth()].shortName
  const day = date.getDate()
  return `${month} ${day}, ${year}`
}

/**
 * Converts date to a hyphenated string for the use in `dateTime` parameter
 * @param {Date} date Current date
 * @returns {String} Hyphenated string with date
 */
export function getDateTimeString (sourceDate) {
  const date = new Date(sourceDate)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

/**
 * Gets a fake restock date for unavailable products
 * @returns {Date} a date a week later from current, skipping both Saturdays and Sundays
 */
export function getRestockDate () {
  const date = new Date()
  const weekday = date.getDay()

  if (weekday === 0) {
    date.setDate(date.getDate() + 8)
  } else if (weekday === 6) {
    date.setDate(date.getDate() + 9)
  } else {
    date.setDate(date.getDate() + 7)
  }
  return date
}

/**
 * Calculates blog post reading time based on the lenght of the post text content
 * @param {Array} text an array with the body/text content of the post divided into sections
 * @returns {Number} Time needed to read the post
 */
export function calculateReadingTime (text) {
  const avgReadingSpeed = 225
  let wordCount = 0
  text.forEach(section => {
    Object.entries(section).forEach(([key, value]) => {
      if (typeof value === 'string' && key !== 'sectionType') {
        wordCount += value.split(' ').length
      }
    })
  })
  const time = Math.ceil(wordCount / avgReadingSpeed)
  return time
}
/**
 *
 * @param {Number} number value to check
 * @param {Number} min minimum allowed value
 * @param {Number} max maximum allowed value
 * @returns {min|max|number} min if number is lower than allowed minimum value, max if number is greater than allowed maximum or number in other cases
 */
export function checkNumber (number, min, max) {
  if (number < min) {
    return min
  } else if (number > max) {
    return max
  } else {
    return number
  }
}

/**
 * Pluralizes given product category
 * @param {String} category type/category of a product
 * @returns plural form of the category
 */
export function pluralizeCategory (category) {
  if (!category) return null
  if (category === 'pastry') return 'pastries'
  return `${category}s`
}

/**
 * Calculates total price for each item in the cart
 * @param {Number} itemPrice unit price of a given item
 * @param {Number} itemQuantity quantity of each item from the cart
 * @returns {Number} a number representing total price for each item in cart
 */
export function calculateItemTotal (itemPrice, itemQuantity) {
  return parseInt(itemPrice * itemQuantity)
}

/**
 * Calculates total number and total price of items in the cart
 * @returns {Object} an object with total number of items in the cart and the total price of the said items
 */
export function calculateCartTotals () {
  const { cart } = useGlobalContext()
  const totalItemCount = cart.reduce(
    (sum, item) => parseInt(sum + item.quantity),
    0
  )
  const cartTotal = cart.reduce((sum, item) => {
    const itemTotal = item.price * item.quantity
    return parseInt(sum + itemTotal)
  }, 0)

  return { totalItemCount, cartTotal }
}
