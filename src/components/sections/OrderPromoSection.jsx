import { Button, SectionHeader } from '../common'
import ProductFeatureSection from './ProductFeatureSection'

function OrderPromoSection () {
  return (
    <section className='section deco deco--diamond deco--separator deco--separator-bottom deco--separator-short'>
      <div className='container'>
        <div className='order-wrapper text-center'>
          <SectionHeader title='Order & get your bonus'></SectionHeader>

          <div className='char-limit-1'>
            <p>
              Make your first purchase today and enjoy a surprise bonus item in
              your package.
            </p>

            <p>
              This offer is valid for all orders placed before the end of the
              month.
            </p>
          </div>
          <Button
            buttonText={'order now'}
            path='/store/all-products'
            isLink={true}
            hasArrow={true}
            isLines={true}
          ></Button>

          <ProductFeatureSection></ProductFeatureSection>
        </div>
      </div>
    </section>
  )
}
export default OrderPromoSection
