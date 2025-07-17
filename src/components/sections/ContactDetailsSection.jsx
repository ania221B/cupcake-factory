import { heroImages } from '../../data'
import { ContactDetailsLink } from '../common'
import { HeroImage } from '../ui'

function ContactDetailsSection ({ list }) {
  const mainImage = heroImages.contact
  return (
    <section className='section'>
      <div className='container'>
        <ul className='contact-details grid-auto-fit' role='list'>
          {list.map(detail => {
            return (
              <ContactDetailsLink
                detail={detail}
                key={detail.id}
              ></ContactDetailsLink>
            )
          })}
        </ul>
      </div>
      <div className='container' data-container='full-bleed'>
        <HeroImage
          image={mainImage}
          imgClass='hero__img hero__img--contact'
        ></HeroImage>
      </div>
    </section>
  )
}
export default ContactDetailsSection
