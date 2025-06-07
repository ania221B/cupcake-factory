import { IoMdStar } from 'react-icons/io'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import { formatPrice, calculateDiscount } from '../../utils'

function ProductCard ({ item }) {
  const {
    images,
    name,
    slug,
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

  const mainImage = images?.[0] || {}
  const secondaryImage = images?.[1] || {}

  return (
    <article className='product-item'>
      <Link to={`/store/${slug}`}>
        <div className='product-item__img'>
          <picture>
            {mainImage?.formats?.avif && (
              <source srcSet={mainImage.formats.avif} type='image/avif' />
            )}
            {mainImage?.formats?.webp && (
              <source srcSet={mainImage.formats.webp} type='image/webp' />
            )}
            <img
              src={mainImage?.formats?.jpg}
              alt={mainImage?.alt}
              title={mainImage?.title}
              loading='lazy'
            />
          </picture>
          <picture>
            {secondaryImage?.formats?.avif && (
              <source srcSet={secondaryImage.formats.avif} type='image/avif' />
            )}
            {secondaryImage?.formats?.webp && (
              <source srcSet={secondaryImage.formats.webp} type='image/webp' />
            )}
            <img
              src={secondaryImage?.src}
              alt={secondaryImage?.alt}
              title={secondaryImage?.title}
              loading='lazy'
            />
          </picture>
        </div>
        {bestseller && (
          <span className='label bestseller-label'>Bestseller</span>
        )}
        {newArrival && <span className='label new-arrival-label'>New</span>}
        {sale && <span className='label sale-label'>Sale</span>}

        <div className='product-item__body'>
          <div>
            <header className='product-item__header'>
              <h2 className='product-item__name'>{name}</h2>
              <p className='product-item__description'>{description}</p>

              <dl className='product-item__rating'>
                <dt className='sr-only'>Rating:</dt>
                <dd>
                  <span className='sr-only'>
                    Rated {rating} out of 5 stars.
                  </span>
                  <span aria-hidden='true'>{rating}</span>
                  <span className='product-item__star' aria-hidden='true'>
                    <IoMdStar></IoMdStar>
                  </span>
                </dd>
              </dl>
            </header>
            <dl
              className={
                sale
                  ? 'product-item__pricing deco deco--separator deco--separator-top'
                  : 'product-item__pricing'
              }
            >
              <dt className='product-item__unit-price-tag'>Price per kg:</dt>
              <dd className='product-item__unit-price-value'>
                ${formatPrice(pricePerKg)}/kg
              </dd>

              <dt className='sr-only'>Current price:</dt>
              {sale ? (
                <dd className='product-item__price-current clr-primary-500 margin-block-end-12'>
                  <span className='sr-only'>
                    Current price is ${formatPrice(currentPrice)}.{' '}
                    {calculateDiscount(currentPrice, regularPrice)}% off the
                    regular price of ${formatPrice(regularPrice)}.
                  </span>
                  <span className='product-item__discount' aria-hidden='true'>
                    {calculateDiscount(currentPrice, regularPrice)}% off
                  </span>
                  <span aria-hidden='true'>${formatPrice(currentPrice)}</span>
                </dd>
              ) : (
                <dd className='product-item__price-current'>
                  <span className='sr-only'>
                    Current price is ${formatPrice(currentPrice)}.
                  </span>
                  <span aria-hidden='true'>${formatPrice(currentPrice)}</span>
                </dd>
              )}

              {sale && (
                <>
                  <dt className='product-item__price-lowest-tag'>
                    Lowest price from 30 days before sale:
                  </dt>
                  <dd className='product-item__price-lowest-value'>
                    ${formatPrice(lowestPrice30Days)}
                  </dd>

                  <dt className='product-item__price-regular-tag'>
                    Regular price:
                  </dt>
                  <dd className='product-item__price-regular-value'>
                    ${formatPrice(regularPrice)}
                  </dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </Link>

      {availability ? (
        <Button
          buttonText='Add to cart'
          onClick={() => console.log('product added to cart')}
          isItemCard={true}
        ></Button>
      ) : (
        <Button
          buttonText='Will be back soon'
          onClick={() => console.log('product added to cart')}
          isItemCard={true}
          isInactive={true}
        ></Button>
      )}
    </article>
  )
}
export default ProductCard
