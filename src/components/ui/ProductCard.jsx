import { IoMdStar } from 'react-icons/io'

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
    sale
  } = item
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
              <dd>${pricePerKg}/kg</dd>
            </div>

            <div className='product-item__price-current'>
              <dt className='sr-only'>Price:</dt>
              <dd>${currentPrice}</dd>
            </div>

            {sale && (
              <dl className='product-item__sale-pricing deco deco--separator deco--separator-top'>
                <div className='product-item__price-lowest'>
                  <dt>Lowest price:</dt>
                  <dd>${lowestPrice30Days}</dd>
                </div>
                <div className='product-item__price-regular'>
                  <dt>Regular price:</dt>
                  <dd>${regularPrice}</dd>
                </div>
              </dl>
            )}
          </div>
        </dl>
        <button className='product-item__btn btn btn--card bg-animation'>
          Add to cart
        </button>
      </div>
    </article>
  )
}
export default ProductCard
