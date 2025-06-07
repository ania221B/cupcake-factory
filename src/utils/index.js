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
 * Converts text string into all lowercase hyphenated version of the said text string
 * @param {String} string Text to convert
 * @returns {String} All lowercase, hyphenated string
 */
export function makeHyphenatedLowerCase (string) {
  return string.toLowerCase().trim().replace(/\s+/g, '-')
}

/**
 * Formats price
 * @param {Number} priceToFormat price as a number needed formating
 * @returns formatted price
 */
export function formatPrice (priceToFormat) {
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
