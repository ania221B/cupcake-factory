import SocialMediaList from '../lists/SocialMediaList'
import ContactForm from './ContactForm'

function ContactSection () {
  return (
    <section className='contact section deco deco--diamond'>
      <div className='container columns-one-one'>
        <div>
          <header className='flow deco deco--separator-bottom padding-block-end-48'>
            <h2 className='section__title'>
              Don't hesitate to contact us for any questions!
            </h2>
            <p className='fw-700'>
              Vulputate egestas nullam volutpat diam nisi at venenatis
              adipiscing massa posuere massa nulla massa id integer.
            </p>
            <p>
              Cras ullamcorper fermentum arcu in sed fermentum velit nulla
              scelerisque pharetra tristique lectus justo faucibus purus est
              purus gravida nibh odio ante.
            </p>
          </header>
          <SocialMediaList></SocialMediaList>
        </div>
        <ContactForm></ContactForm>
      </div>
    </section>
  )
}
export default ContactSection
