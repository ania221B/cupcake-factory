import { BookingForm, HeroSection } from '../components/sections'

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
