import { usePageLocation } from '../../hooks'
import ProductCard from '../ui/ProductCard'

function ProductList ({ list }) {
  const path = usePageLocation()
  const isAllProductsPage = path === '/store/all-products'

  if (!list.length) {
    return (
      <div className='flow'>
        <h2 className='ff-secondary fs-700 fw-700'>No products to display</h2>
        <p>
          Try searching for something else, like <q>cake</q>.
        </p>
      </div>
    )
  }
  return (
    <ul
      className={
        isAllProductsPage
          ? 'card-list grid-auto-fit padding-0'
          : 'card-list grid-auto-fit margin-block-start-64 padding-0'
      }
      role='list'
      aria-live={isAllProductsPage ? 'polite' : undefined}
    >
      {list.map(item => {
        return (
          <li key={item.id}>
            <ProductCard item={item}></ProductCard>
          </li>
        )
      })}
    </ul>
  )
}
export default ProductList
