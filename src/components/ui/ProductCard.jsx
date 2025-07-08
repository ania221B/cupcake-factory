import Button from '../common/Button'
import { Link } from 'react-router-dom'
import {
  ProductHeader,
  ProductImages,
  ProductLabels,
  ProductPricing
} from '../common'
import { useGlobalContext } from '../../context'

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

  const { addToCart } = useGlobalContext()

  return (
    <article className='product-item'>
      <Link to={`/store/${slug}`}>
        <ProductImages images={images}></ProductImages>

        <ProductLabels
          bestseller={bestseller}
          newArrival={newArrival}
          sale={sale}
        ></ProductLabels>

        <div className='product-item__body'>
          <div>
            <ProductHeader
              variant='card'
              name={name}
              description={description}
              rating={rating}
            ></ProductHeader>

            <ProductPricing
              variant='card'
              currentPrice={currentPrice}
              pricePerKg={pricePerKg}
              regularPrice={regularPrice}
              lowestPrice30Days={lowestPrice30Days}
              sale={sale}
            ></ProductPricing>
          </div>
        </div>
      </Link>

      {availability ? (
        <Button
          buttonText='Add to cart'
          onClick={() => {
            addToCart(item, 1)
          }}
          isItemCard={true}
        ></Button>
      ) : (
        <Button
          buttonText='Will be back soon'
          isItemCard={true}
          isInactive={true}
        ></Button>
      )}
    </article>
  )
}
export default ProductCard
