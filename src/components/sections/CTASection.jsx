import { Button } from '../common'

function CTASection () {
  return (
    <section className='cta section'>
      <div className='container bg-primary-100 flow deco deco--diamond'>
        <h2 className='section__subtitle'>Visit us</h2>
        <p className='section__title'>Chocolate wonders await...</p>
        <p>
          Throwing a party? Want to take someone special somewhere magical? Wish
          to relax and treat yourself to an amazing delight?
        </p>

        <Button
          buttonText={'book a table'}
          hasArrow={true}
          isAccent={true}
        ></Button>
      </div>
    </section>
  )
}
export default CTASection
