import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM, SET_ITEM_QUANTITY } from './actions'

function cartReducer (state, action) {
  if (action.type === ADD_ITEM) {
    const product = action.payload
    const existingItem = state.find(item => item.id === product.id)

    if (existingItem) {
      return state.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      )
    } else {
      return [...state, product]
    }
  }
  if (action.type === CLEAR_CART) {
    return []
  }
  if (action.type === REMOVE_ITEM) {
    const newCart = state.filter(item => item.id !== action.payload.id)

    return [...newCart]
  }
  if (action.type === SET_ITEM_QUANTITY) {
    const { id, quantity } = action.payload
    return state.map(item => (item.id === id ? { ...item, quantity } : item))
  }

  throw new Error(`There is no action type matching ${action.type}`)
}

export default cartReducer
