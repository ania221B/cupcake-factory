import NewsletterSection from './NewsletterSection'
import SocialLinksSection from './SocialLinksSection'

function ConnectSection () {
  return (
    <section className='section connect-section'>
      <div className='container even-columns'>
        <NewsletterSection></NewsletterSection>
        <SocialLinksSection></SocialLinksSection>
      </div>
    </section>
  )
}
export default ConnectSection
