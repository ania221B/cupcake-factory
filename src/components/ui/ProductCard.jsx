import { IoMdStar } from 'react-icons/io'
import { useGlobalContext } from '../../context'

function ProductCard ({ item }) {
  const {
    imgMain,
    imgSecondary,
    imgTitle,
    name,
    description,
    pricePerKg,
    regularPrice,
    lowestPrice30Days,
    currentPrice,
    rating,
    bestseller,
    newArrival,
    sale,
    availability
  } = item
  const { formatPrice, calculateDiscount } = useGlobalContext()
  return (
    <article className='product-item'>
      <div className='product-item__img'>
        <img src={imgMain} alt={name} title={imgTitle} />
        <img src={imgSecondary} alt={name} title={imgTitle} />
      </div>

      {bestseller && <span className='label bestseller-label'>Bestseller</span>}
      {newArrival && <span className='label new-arrival-label'>New</span>}
      {sale && <span className='label sale-label'>Sale</span>}
      <div className='product-item__body'>
        <dl>
          <div className='product-item__header-wrapper'>
            <div className='product-item__header flow'>
              <dt className='product-item__name'>{name}</dt>
              <dd>{description}</dd>
            </div>
            <div className='product-item__rating'>
              <dt className='sr-only'>Rating:</dt>
              <dd>
                <span>{rating}</span>
                <span className='product-item__star'>
                  <IoMdStar></IoMdStar>
                </span>
              </dd>
            </div>
          </div>

          <div className='product-item__pricing'>
            <div className='product-item__unit-price'>
              <dt>Price per kg:</dt>
              <dd>${formatPrice(pricePerKg)}/kg</dd>
            </div>

            <div className='product-item__price-current'>
              <dt className='sr-only'>Price:</dt>
              {sale ? (
                <dd className='clr-primary-500'>
                  <span className='product-item__discount'>
                    {calculateDiscount(currentPrice, regularPrice)}% off
                  </span>
                  <span>${formatPrice(currentPrice)}</span>
                </dd>
              ) : (
                <dd>${formatPrice(currentPrice)}</dd>
              )}
            </div>

            {sale && (
              <dl className='product-item__sale-pricing deco deco--separator deco--separator-top'>
                <div className='product-item__price-lowest'>
                  <dt>Lowest price from 30 days before sale:</dt>
                  <dd>${formatPrice(lowestPrice30Days)}</dd>
                </div>
                <div className='product-item__price-regular'>
                  <dt>Regular price:</dt>
                  <dd>${formatPrice(regularPrice)}</dd>
                </div>
              </dl>
            )}
          </div>
        </dl>
        {availability ? (
          <button className='product-item__btn btn btn--card bg-animation'>
            Add to cart
          </button>
        ) : (
          <button className='product-item__btn btn btn--card' disabled>
            Will be back soon
          </button>
        )}
      </div>
    </article>
  )
}
export default ProductCard
