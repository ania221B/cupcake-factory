import { HeroSection } from '../components/sections'
import { BookingForm } from '../forms'

function BookATable () {
  return (
    <>
      <HeroSection title='Book a table'></HeroSection>
      <section className='section'>
        <div className='container' data-container='x-small'>
          <BookingForm></BookingForm>
        </div>
      </section>
    </>
  )
}
export default BookATable
