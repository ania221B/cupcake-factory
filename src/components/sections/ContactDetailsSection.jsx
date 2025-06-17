import { ContactDetailsLink } from '../common'

function ContactDetailsSection ({ list }) {
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
    </section>
  )
}
export default ContactDetailsSection
