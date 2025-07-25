import { products } from '../../data/products'
import { usePageLocation } from '../../hooks'
import { Button, SectionHeader } from '../common'
import ProductList from '../lists/ProductList'

function NewArrivalsSection () {
  const newArrivals = products.filter(product => product.newArrival === true)
  const path = usePageLocation()
  const isStorePage = path === '/store'
  return (
    <section className='new-arrivals section deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader
          title='New Arrivals'
          text='Fresh from our oven and full of inspiration, these new creations are ready to tempt your taste buds. Be the first to try what’s just landed.'
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

        <ProductList list={newArrivals}></ProductList>
      </div>
    </section>
  )
}
export default NewArrivalsSection
