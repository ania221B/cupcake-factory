import { useState } from 'react'
import { Button } from '../components/common'
import { HeroSection } from '../components/sections'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { checkNumber } from '../utils'

function BookATable () {
  const [guests, setGuests] = useState(0)
  const minGuests = 0
  const maxGuests = 12
  return (
    <>
      <HeroSection title='Book a table'></HeroSection>
      <section className='section'>
        <div className='container' data-container='x-small'>
          <form
            action=''
            className='contact-form reservation-form bg-primary-100'
          >
            <h2 className='section__title'>Make a reservation</h2>
            <div className='form-control-wrapper'>
              <label htmlFor='reservation-date'>Date:</label>
              <input id='reservation-date' type='date' />
            </div>

            <div className='form-control-wrapper'>
              <label htmlFor='reservation-time'>Time:</label>
              <input id='reservation-time' type='time' />
            </div>

            <div className='form-control-wrapper quantity-control'>
              <label htmlFor='guest-number'>Guests:</label>
              <Button
                buttonText={<FaMinus />}
                ariaLabel='Decrease number of guests'
                onClick={() =>
                  setGuests(prevQuantity =>
                    checkNumber(prevQuantity - 1, minGuests, maxGuests)
                  )
                }
                isAccent={true}
              ></Button>
              <input
                type='number'
                name='guest-number'
                id='guest-number'
                min={minGuests}
                max={maxGuests}
                value={guests}
                onChange={e => setGuests(e.target.value.trim())}
              />

              <Button
                buttonText={<FaPlus />}
                ariaLabel='Increase number of guests'
                onClick={() =>
                  setGuests(prevQuantity =>
                    checkNumber(prevQuantity + 1, minGuests, maxGuests)
                  )
                }
                isAccent={true}
              ></Button>
            </div>

            <Button
              buttonText='Place Reservation'
              type='submit'
              hasArrow={true}
              isLines={true}
            ></Button>
          </form>
        </div>
      </section>
    </>
  )
}
export default BookATable
