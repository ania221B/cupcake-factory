import { Button } from '../components/common'
import { useGlobalContext } from '../context'
import { IoTrash } from 'react-icons/io5'
import { CartItem } from '../components/ui'
import { calculateCartTotals, formatPrice } from '../utils'

function Cart () {
  const { headerHeight, cart, clearCart } = useGlobalContext()

  const { totalItemCount, cartTotal } = calculateCartTotals()

  return (
    <section
      className=' section'
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className='container' data-container='small'>
        {cart.length === 0 ? (
          <article className='cart cart--empty'>
            <h2 className='cart__title section__title'>Your Cart</h2>
            <p className='cart__subtitle'>...is currently empty</p>
            <Button
              buttonText='Start shopping'
              ariaLabel='Go back to store to start shopping'
              isLink={true}
              path={'/store'}
              isAccent={true}
              hasArrow={true}
            ></Button>
          </article>
        ) : (
          <article className='cart'>
            <Button
              buttonText='Continue shopping'
              ariaLabel='Go back to store to start shopping'
              isLink={true}
              path={'/store/all-products'}
              hasArrow={true}
              isInvisible={true}
            ></Button>
            <header>
              <h2 className='section__title'>Your Cart</h2>
              <p className='cart__item-counter'>
                <span>{totalItemCount}</span>
              </p>
            </header>

            <Button
              buttonText={
                <>
                  <span>
                    <IoTrash></IoTrash>
                  </span>
                  <span>Clear Cart</span>
                </>
              }
              onClick={clearCart}
              isIcon={true}
            ></Button>
            <ul role='list' className='cart__list'>
              {cart.map(product => {
                return (
                  <li key={product.id}>
                    <CartItem item={product}></CartItem>
                  </li>
                )
              })}{' '}
            </ul>
            <dl className='cart__total deco deco--separator deco--separator-top section__title section__title-small'>
              <dt>Cart total:</dt>
              <dd>${formatPrice(cartTotal)}</dd>
            </dl>
          </article>
        )}
      </div>
    </section>
  )
}
export default Cart
