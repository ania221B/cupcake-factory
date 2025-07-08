import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { calculateItemTotal, checkNumber, formatPrice } from '../../utils'
import { Button, QuantityFormControl } from '../common'
import { IoTrash } from 'react-icons/io5'
import { useEffect } from 'react'

function CartItem ({ item }) {
  const { id, image, name, slug, description, price, quantity } = item
  const { removeCartItem, setItemQuantity, cartItemMin, cartItemMax } =
    useGlobalContext()

  useEffect(() => {
    if (quantity === 0) {
      removeCartItem(id)
    }
  }, [quantity])
  return (
    <article className='cart__item'>
      <div className='cart__item__img'>
        <img src={image} alt={name} />
      </div>
      <div className='cart__item__details'>
        <h3 className='cart__item__name'>
          <Link to={`/store/${slug}`}>{name}</Link>
        </h3>
        <p className='cart__item__description'>{description}</p>

        <dl className='cart__item__unit-price'>
          <dt>Price:</dt>
          <dd className='fw-700'>${formatPrice(price)}</dd>
        </dl>

        <Button
          buttonText={<IoTrash></IoTrash>}
          ariaLabel='Remove item from cart'
          onClick={() => removeCartItem(id)}
          isIcon={true}
        ></Button>

        <QuantityFormControl
          quantity={quantity}
          onIncrease={() =>
            setItemQuantity(
              id,
              checkNumber(quantity + 1, cartItemMin, cartItemMax)
            )
          }
          onDecrease={() =>
            setItemQuantity(
              id,
              checkNumber(quantity - 1, cartItemMin, cartItemMax)
            )
          }
          onChange={newQty => setItemQuantity(id, newQty)}
        ></QuantityFormControl>

        <dl className='cart__item__total-price'>
          <dt>Item total:</dt>
          <dd className='fw-700'>
            ${formatPrice(calculateItemTotal(price, quantity))}
          </dd>
        </dl>
      </div>
    </article>
  )
}
export default CartItem
