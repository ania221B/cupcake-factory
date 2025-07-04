import { useEffect, useRef, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { checkNumber } from '../../utils'
import { Button } from '../common'
import { useForm, ValidationError } from '@formspree/react'

function BookingForm () {
  const [guests, setGuests] = useState(0)
  const [formHeight, setFormHeight] = useState(0)
  const formRef = useRef(null)
  const minGuests = 0
  const maxGuests = 12
  const [state, handleSubmit] = useForm('mnnvogaq')

  useEffect(() => {
    if (formRef.current) {
      const height = formRef.current.getBoundingClientRect().height
      setFormHeight(height)
    }
  })

  if (state.succeeded) {
    return (
      <div
        className='form-wrapper form-wrapper--confirmation bg-primary-100 br-medium'
        style={{ height: `${formHeight}px` }}
      >
        <div
          className={`${state.succeeded ? 'form-fade-in' : 'form-fade-out'}`}
        >
          <h2 className='section__title'>Thanks so much!</h2>
          <p>
            We've received your request and will email you soon to confirm your
            reservation. Looking forward to having you!
          </p>
        </div>
      </div>
    )
  }
  return (
    <div
      ref={formRef}
      className='form-wrapper bg-primary-100'
      onSubmit={handleSubmit}
    >
      <div
        className={`form form--reservation ${
          state.succeeded ? 'form-fade-out' : 'form-fade-in'
        }`}
      >
        <h2 className='section__title form__title'>Make a reservation</h2>
        <div className='form__control-wrapper'>
          <label htmlFor='reservation-date'>Date:</label>
          <input id='reservation-date' name='reservation-date' type='date' />
          <ValidationError
            field='reservation-date'
            prefix='Date'
            errors={state.errors}
          ></ValidationError>
        </div>
        <div className='form__control-wrapper'>
          <label htmlFor='reservation-time'>Time:</label>
          <input id='reservation-time' name='reservation-time' type='time' />
          <ValidationError
            field='reservation-time'
            prefix='Time'
            errors={state.errors}
          ></ValidationError>
        </div>
        <div className='form__control-wrapper quantity-control'>
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
          <ValidationError
            field='guest-number'
            prefix='Guests'
            errors={state.errors}
          ></ValidationError>
        </div>
        {state.submitting ? (
          <Button
            buttonText='Placing reservation...'
            type='submit'
            hasArrow={true}
            isLines={true}
            isInactive={true}
          ></Button>
        ) : (
          <Button
            buttonText='Place reservation'
            type='submit'
            hasArrow={true}
            isLines={true}
          ></Button>
        )}
      </div>
    </div>
  )
}
export default BookingForm
