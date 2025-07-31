import SocialMediaList from '../lists/SocialMediaList'
import ContactForm from '../../forms/ContactForm'

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
              Whether you’re planning a special event, have a custom cake idea
              in mind, or simply want to ask about our daily offerings—we’re
              here to help.
            </p>
            <p>
              Our team loves chatting all things sweet, and we’ll do our best to
              answer your questions quickly and thoroughly. No question is too
              small (or too big!) when it comes to creating something delicious.
            </p>
            <p>
              You can reach out via email, phone, or through our contact
              form—we’ll get back to you as soon as we can. Want to stop by in
              person? Wonderful! We’d love to welcome you to our shop and help
              you find the perfect treat. Whether you’re a long-time customer or
              just discovering us, we’re always happy to hear from you.
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
