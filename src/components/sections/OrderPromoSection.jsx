import { Button, SectionHeader } from '../common'
import ProductFeatureSection from './ProductFeatureSection'

function OrderPromoSection () {
  function handleOrder () {
    console.log('Thank you for your order')
  }
  return (
    <section className='section'>
      <div className='container'>
        <div className='order-wrapper text-center'>
          <SectionHeader title='Order & get your bonus'></SectionHeader>

          <div className='char-limit-1'>
            <p>
              Eleifend tincidunt cum amet id mi, sodales amet ut non habitant
              accumsan risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis beatae labore quam dolores quis error! Vivamus
              elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
              leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
          </div>
          <Button
            buttonText={'order now'}
            onClick={handleOrder}
            isLines={true}
          ></Button>

          <ProductFeatureSection></ProductFeatureSection>
        </div>
      </div>
    </section>
  )
}
export default OrderPromoSection
