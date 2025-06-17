import { calculateDiscount, formatPrice } from '../../utils'

function ProductPricing ({
  variant,
  currentPrice,
  pricePerKg,
  regularPrice,
  lowestPrice30Days,
  sale
}) {
  if (variant === 'card') {
    return (
      <dl
        className={
          sale
            ? 'product-item__pricing deco deco--separator deco--separator-top'
            : 'product-item__pricing'
        }
      >
        <dt className='product-item__unit-price-tag'>Price per kg:</dt>
        <dd className={'product-item__unit-price-value'}>
          ${formatPrice(pricePerKg)}/kg
        </dd>

        <dt className='sr-only'>Current price:</dt>
        {sale ? (
          <dd className='product-item__price-current clr-primary-500 margin-block-end-12'>
            <span className='sr-only'>
              Current price is ${formatPrice(currentPrice)}.{' '}
              {calculateDiscount(currentPrice, regularPrice)}% off the regular
              price of ${formatPrice(regularPrice)}.
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

            <dt className='product-item__price-regular-tag'>Regular price:</dt>
            <dd className='product-item__price-regular-value'>
              ${formatPrice(regularPrice)}
            </dd>
          </>
        )}
      </dl>
    )
  }
  return (
    <dl
      className={
        sale
          ? 'product-item--single__pricing deco deco--separator deco--separator-top'
          : 'product-item--single__pricing'
      }
    >
      <dt className='sr-only'>Current price:</dt>
      {sale ? (
        <dd className='product-item--single__price-current clr-primary-500 margin-block-end-32'>
          <span className='sr-only'>
            Current price is ${formatPrice(currentPrice)}.{' '}
            {calculateDiscount(currentPrice, regularPrice)}% off the regular
            price of ${formatPrice(regularPrice)}.
          </span>

          <span aria-hidden='true'>${formatPrice(currentPrice)}</span>

          <span className='product-item--single__discount' aria-hidden='true'>
            {calculateDiscount(currentPrice, regularPrice)}% off
          </span>
        </dd>
      ) : (
        <dd className='product-item--single__price-current'>
          <span className='sr-only'>
            Current price is ${formatPrice(currentPrice)}.
          </span>
          <span aria-hidden='true'>${formatPrice(currentPrice)}</span>
        </dd>
      )}

      {sale ? (
        <>
          {' '}
          <dt className='product-item--single__unit-price-tag margin-block-end-32'>
            Price per kg:
          </dt>
          <dd className='product-item--single__unit-price-value margin-block-end-32'>
            ${formatPrice(pricePerKg)}/kg
          </dd>
        </>
      ) : (
        <>
          <dt className='product-item--single__unit-price-tag'>
            Price per kg:
          </dt>
          <dd className='product-item--single__unit-price-value'>
            ${formatPrice(pricePerKg)}/kg
          </dd>
        </>
      )}

      {sale && (
        <>
          <dt className='product-item--single__price-lowest-tag'>
            Lowest price from 30 days before sale:
          </dt>
          <dd className='product-item--single__price-lowest-value'>
            ${formatPrice(lowestPrice30Days)}
          </dd>

          <dt className='product-item--single__price-regular-tag'>
            Regular price:
          </dt>
          <dd className='product-item--single__price-regular-value'>
            ${formatPrice(regularPrice)}
          </dd>
        </>
      )}
    </dl>
  )
}
export default ProductPricing
