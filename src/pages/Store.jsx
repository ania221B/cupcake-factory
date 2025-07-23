import { UnderConstruction } from '../components/common'
import {
  BestsellersSection,
  OrderPromoSection,
  TestimonialSection
} from '../components/sections'
import NewArrivalsSection from '../components/sections/NewArrivalsSection'
import { useGlobalContext } from '../context'
import { storeImages } from '../data'

function Store () {
  const { headerHeight } = useGlobalContext()
  return (
    <>
      <section
        className='section hero--store bg-primary-100 flow'
        style={{ '--header-height': `${headerHeight}px` }}
      >
        <header className='hero__header deco deco--line deco--line text-center'>
          <h1 className='page-title'>Welcome to our Store</h1>
        </header>

        <div
          className='container hero--store__wrapper'
          data-container='full-bleed'
        >
          {storeImages.map(image => {
            return (
              <picture className='hero--store__img' key={image.id}>
                <source
                  srcSet={image.desktop.avif}
                  type='image/avif'
                  media='(min-width: 912px)'
                />
                <source
                  srcSet={image.desktop.webp}
                  type='image/webp'
                  media='(min-width: 912px)'
                />
                <source
                  srcSet={image.tablet.avif}
                  type='image/avif'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={image.tablet.webp}
                  type='image/webp'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={image.mobile.webp}
                  type='image/avif'
                  media='(max-width: 767px)'
                />
                <source
                  srcSet={image.mobile.webp}
                  type='image/webp'
                  media='(max-width: 767px)'
                />
                <img src={image.fallback} alt={image.alt} title={image.title} />
              </picture>
            )
          })}
        </div>
      </section>
      <NewArrivalsSection></NewArrivalsSection>
      <BestsellersSection></BestsellersSection>
      <OrderPromoSection></OrderPromoSection>
      <TestimonialSection></TestimonialSection>
    </>
  )
}
export default Store
