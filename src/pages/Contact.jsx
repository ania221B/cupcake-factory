import { Button, SectionHeader } from '../components/common'
import {
  ContactDetailsSection,
  HeroSection,
  ProductFeatureSection
} from '../components/sections'
import ContactSection from '../components/sections/ContactSection'
import { footerLinks } from '../data'

function Contact () {
  const contactDetailsList = footerLinks.find(
    item => item.title === 'contact'
  ).details

  function handleOrder () {
    console.log('Thank you for your order')
  }
  return (
    <>
      <HeroSection title={'Contact us'}></HeroSection>
      <ContactSection></ContactSection>
      <ContactDetailsSection list={contactDetailsList}></ContactDetailsSection>
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
    </>
  )
}
export default Contact
