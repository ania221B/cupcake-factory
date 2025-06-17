import { IoMdStar } from 'react-icons/io'
import ProductLabels from './ProductLabels'

function ProductHeader ({
  variant,
  name,
  description,
  rating,
  bestseller,
  newArrival,
  sale,
  type
}) {
  return (
    <header
      className={
        variant === 'card'
          ? 'product-item__header'
          : 'product-item--single__header'
      }
    >
      {variant === 'single' && (
        <>
          <ProductLabels
            bestseller={bestseller}
            newArrival={newArrival}
            sale={sale}
          ></ProductLabels>

          <dl className='product-item--single__category'>
            <dt className='sr-only'>Type:</dt>
            <dd>{type}</dd>
          </dl>
        </>
      )}

      <h2
        className={
          variant === 'card'
            ? 'product-item__name'
            : 'product-item--single__name page-title'
        }
      >
        {name}
      </h2>
      <p
        className={
          variant === 'card'
            ? 'product-item__description'
            : 'product-item--single__description'
        }
      >
        {description}
      </p>

      <dl
        className={
          variant === 'card'
            ? 'product-item__rating'
            : 'product-item--single__rating'
        }
      >
        <dt className='sr-only'>Rating:</dt>
        <dd>
          <span className='sr-only'>Rated {rating} out of 5 stars.</span>
          <span aria-hidden='true'>{rating}</span>
          <span
            className={
              variant === 'card'
                ? 'product-item__star'
                : 'product-item--single__star'
            }
            aria-hidden='true'
          >
            <IoMdStar></IoMdStar>
          </span>
        </dd>
      </dl>
    </header>
  )
}
export default ProductHeader
