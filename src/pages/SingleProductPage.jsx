import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {
  Breadcrumb,
  Button,
  ProductHeader,
  QuantityFormControl,
  ThumbnailGallery
} from '../components/common'
import { checkNumber, makeCapitalizedText, pluralizeCategory } from '../utils'
import ProductPricing from '../components/common/ProductPricing'
import { useState } from 'react'

function SingleProductPage () {
  const { headerHeight, allProducts, addToCart, productMin, productMax } =
    useGlobalContext()

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

  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <section
        className='section'
        style={{
          '--header-height': `${headerHeight}px`
        }}
      >
        <div className='container'>
          <Breadcrumb
            items={[
              { label: 'home', path: '/' },
              { label: 'store', path: '/store' },
              { label: 'all products', path: '/store/all-products' },
              {
                label: `${pluralizeCategory(type)}`,
                path: `/store/all-products/${type}`
              },
              { label: `${name}`, path: null }
            ]}
          ></Breadcrumb>
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

              <div className='product-item--single__cart-controls cart-controls'>
                <QuantityFormControl
                  quantity={quantity}
                  onIncrease={() =>
                    setQuantity(prev =>
                      checkNumber(prev + 1, productMin, productMax)
                    )
                  }
                  onDecrease={() =>
                    setQuantity(prev =>
                      checkNumber(prev - 1, productMin, productMax)
                    )
                  }
                  onChange={newQty =>
                    setQuantity(checkNumber(newQty, productMin, productMax))
                  }
                ></QuantityFormControl>
                {availability ? (
                  <Button
                    buttonText='Add to cart'
                    onClick={() => addToCart(currentProduct, quantity)}
                    isItemCard={true}
                  ></Button>
                ) : (
                  <Button
                    buttonText='Will be back soon'
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
