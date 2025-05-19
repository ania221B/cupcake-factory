import { products } from '../../data'
import { usePageLocation } from '../../hooks'
import { Button, SectionHeader } from '../common'
import ProductList from '../lists/ProductList'

function BestsellersSection () {
  // const bestsellers = products.filter(product => product.bestseller === true)
  const bestsellers = products.filter(
    product => product.bestseller === true || product.sale === true
  )
  const path = usePageLocation()
  const isStorePage = path === '/store'
  return (
    <section className='bestsellers section bg-primary-100 deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader
          title='Bestsellers'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        >
          {isStorePage ? (
            <Button
              buttonText={'See all'}
              // path={'products'}
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
