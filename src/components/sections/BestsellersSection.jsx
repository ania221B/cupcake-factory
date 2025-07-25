import { products } from '../../data/products'
import { usePageLocation } from '../../hooks'
import { Button, SectionHeader } from '../common'
import ProductList from '../lists/ProductList'

function BestsellersSection () {
  const bestsellers = products.filter(product => product.bestseller === true)

  const path = usePageLocation()
  const isStorePage = path === '/store'

  return (
    <section className='bestsellers section bg-primary-100 deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader
          title='Bestsellers'
          text='These customer favorites are loved for a reason—crafted to perfection and enjoyed time and again. Discover the treats everyone’s raving about.'
        >
          {isStorePage ? (
            <Button
              buttonText={'See all'}
              path={'all-products'}
              isLink={'true'}
              isLines={true}
              ariaLabel={'View all proudcts'}
            ></Button>
          ) : (
            <Button
              buttonText={'Go to store'}
              path={'store'}
              isLink={'true'}
              isLines={true}
            ></Button>
          )}
        </SectionHeader>

        <ProductList list={bestsellers}></ProductList>
      </div>
    </section>
  )
}
export default BestsellersSection
