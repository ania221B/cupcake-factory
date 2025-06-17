import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { Button, ProductHeader, ThumbnailGallery } from '../components/common'
import { makeCapitalizedText } from '../utils'
import { FaMinus, FaPlus } from 'react-icons/fa'
import ProductPricing from '../components/common/ProductPricing'
import { useState } from 'react'

function SingleProductPage () {
  const { headerHeight, allProducts } = useGlobalContext()
  const { productSlug } = useParams()

  const currentProduct = allProducts.find(
    product => product.name === makeCapitalizedText(productSlug)
  )

  const {
    images,
    name,
    description,
    fullDescription,
    type,
    pricePerKg,
    regularPrice,
    lowestPrice30Days,
    currentPrice,
    rating,
    bestseller,
    newArrival,
    sale,
    availability
  } = currentProduct

  const [quantity, setQuantity] = useState(0)
  const minQuantity = 0
  const maxQuantity = 100

  function checkQuantity (quantity) {
    if (quantity < 0) {
      return minQuantity
    } else if (quantity > 100) {
      return maxQuantity
    } else {
      return quantity
    }
  }
  return (
    <>
      <section
        className='section'
        style={{
          '--header-height': `${headerHeight}px`
        }}
      >
        <div className='container'>
          <article className='product-item--single columns-one-one'>
            <ThumbnailGallery images={images}></ThumbnailGallery>

            <div className='product-item--single__body'>
              <ProductHeader
                variant='single'
                name={name}
                description={description}
                rating={rating}
                bestseller={bestseller}
                newArrival={newArrival}
                sale={sale}
                type={type}
              ></ProductHeader>

              <ProductPricing
                variant='single'
                currentPrice={currentPrice}
                pricePerKg={pricePerKg}
                regularPrice={regularPrice}
                lowestPrice30Days={lowestPrice30Days}
                sale={sale}
              ></ProductPricing>

              <div className='product-item--single__quantity-controls'>
                <Button
                  buttonText={<FaMinus />}
                  ariaLabel='Decrease product quantity in cart'
                  onClick={() =>
                    setQuantity(prevQuantity => checkQuantity(prevQuantity - 1))
                  }
                  isAccent={true}
                ></Button>
                <input
                  type='number'
                  name='product-quantity'
                  id='product-quantity'
                  min={minQuantity}
                  max={maxQuantity}
                  value={quantity}
                  onChange={e => setQuantity(e.target.value.trim())}
                />
                <label htmlFor='product-quantity' className='sr-only'>
                  Product count
                </label>
                <Button
                  buttonText={<FaPlus />}
                  ariaLabel='Increase product quantity in cart'
                  onClick={() =>
                    setQuantity(prevQuantity => checkQuantity(prevQuantity + 1))
                  }
                  isAccent={true}
                ></Button>
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
              </div>

              <section className='product-item--single__full-description'>
                <h3>More info:</h3>
                <p>{fullDescription}</p>
              </section>

              <dl className='product-item--single__availability'>
                <dt>Availability:</dt>
                {availability ? (
                  <dd>In stock</dd>
                ) : (
                  <dd>
                    Will be back soon. Estimated restock date:{' '}
                    <time dateTime='2025-07-07'>July 7, 2025</time>
                  </dd>
                )}
              </dl>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export default SingleProductPage
