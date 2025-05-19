import { Button } from '../components/common'
import {
  CTASection,
  HeroSection,
  ProductFeatureSection
} from '../components/sections'
import ContactSection from '../components/sections/ContactSection'

function Contact () {
  function handleOrder () {
    console.log('Thank you for your order')
  }
  return (
    <>
      <HeroSection title={'Contact us'}></HeroSection>
      <ContactSection></ContactSection>
      <section className='section'>
        <div className='container'>
          <header className='text-center'>
            <h2 className='section__title'>Order & get your bonus</h2>
            <p>
              Eleifend tincidunt cum amet id mi, sodales amet ut non habitant
              accumsan risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis beatae labore quam dolores quis error!
            </p>
          </header>
          <ProductFeatureSection></ProductFeatureSection>
          {/* <button className='btn btn--accent bg-animation btn--arrow'>
            <span>Order now</span>
            <span>&#8594;</span>
          </button> */}

          <Button
            buttonText={'order now'}
            onClick={handleOrder}
            hasArrow={true}
            isAccent={true}
          ></Button>

          <CTASection></CTASection>
        </div>
      </section>
    </>
  )
}
export default Contact
