import { Button, SectionHeader } from '../components/common'
import { HeroSection, ProductFeatureSection } from '../components/sections'
import ContactSection from '../components/sections/ContactSection'
import { footerLinks } from '../data'

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
          {footerLinks
            .filter(link => link.title === 'contact')
            .map(link => {
              return (
                <ul className='contact-details grid-auto-fit' role='list'>
                  {link.details.map(detail => {
                    const { id, icon, text, path, subtext } = detail
                    return (
                      <li
                        key={id}
                        className='contact-details__item deco deco--separator deco--separator-top'
                      >
                        <div className='contact-details__icon'>{icon}</div>
                        <div>
                          <h3 className='contact-details__heading'>{text}</h3>
                          <a href={path} className='force-link-wrap'>
                            {subtext}
                          </a>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )
            })}
        </div>
      </section>
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
