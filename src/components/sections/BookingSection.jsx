import { Button } from '../common'

function BookingSection () {
  return (
    <section className='booking section'>
      <div className='container bg-primary-100 flow deco deco--diamond'>
        <h2 className='section__subtitle'>Visit us</h2>
        <p className='section__title'>Chocolate wonders await...</p>
        <p>
          Throwing a party? Want to take someone special somewhere magical? Wish
          to relax and treat yourself to an amazing delight?
        </p>

        <Button
          buttonText={'book a table'}
          path='/book-a-table'
          isLink={true}
          hasArrow={true}
          isAccent={true}
        ></Button>
      </div>
    </section>
  )
}
export default BookingSection
