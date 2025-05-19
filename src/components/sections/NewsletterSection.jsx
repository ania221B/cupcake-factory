import { SectionHeader } from '../common'
import NewsletterForm from './NewsletterForm'

function NewsletterSection () {
  return (
    <section className='newsletter'>
      <div className='flow'>
        <SectionHeader
          subtitle='Stay in touch'
          title='Get the newsletter'
          titleClasses='section__title-small'
        ></SectionHeader>
        <NewsletterForm></NewsletterForm>
      </div>
    </section>
  )
}
export default NewsletterSection
