import { Button } from '../common'

function NewsletterForm () {
  function handleNewsletterSubmission (e) {
    e.preventDefault()
    console.log(`You're subscribed now`)
  }
  return (
    <form action='' className='newsletter-form'>
      <label htmlFor='newsletter-email' className='sr-only'>
        Email:
      </label>
      <input id='newsletter-email' type='text' placeholder='Email address' />

      <Button
        type={'submit'}
        buttonText={'Subscribe'}
        onClick={handleNewsletterSubmission}
        isLines={true}
      ></Button>
    </form>
  )
}
export default NewsletterForm
