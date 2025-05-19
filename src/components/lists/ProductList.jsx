import ProductCard from '../ui/ProductCard'

function ProductList ({ list }) {
  return (
    <ul className='card-list grid-auto-fit margin-xl padding-0' role='list'>
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
