import { useEffect, useRef, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { TiWarningOutline } from 'react-icons/ti'
import { checkNumber } from '../../utils'
import { Button } from '../common'
import { useFormHandler } from '../../hooks'

function BookingForm () {
  const [formHeight, setFormHeight] = useState(0)
  const initialForm = {
    date: '',
    time: '',
    guests: 0,
    email: ''
  }
  const {
    form,
    setForm,
    formErrors,
    setFormErrors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit
  } = useFormHandler(initialForm, validateBookingField, validateBookingForm)
  const formRef = useRef(null)
  const minGuests = 0
  const maxGuests = 12

  /**
   * Checks if date is grater than current month
   * @param {String} date hyphenated date to check
   * @returns {Boolean}
   */
  function isBookingInFuture (date, time) {
    const currentDate = new Date()
    const [year, month, day] = date.split('-').map(item => parseInt(item))
    const [hours, minutes] = time.split(':').map(item => parseInt(item))
    const bookingDate = new Date(year, month - 1, day, hours, minutes)

    return bookingDate > currentDate
  }

  /**
   * Performs checks on form data and returns an object with any existing errors
   * @param {Object} data Object with data from the form: form fields and their values
   * @returns {Object} errors Object with any existing errors
   */
  function validateBookingForm (data) {
    const errors = {}
    if (!data.date) {
      errors.date = 'Required'
    } else if (!isBookingInFuture(data.date, data.time)) {
      errors.date = 'Needs to be future'
    }
    if (!data.time) {
      errors.time = 'Required'
    } else if (!isBookingInFuture(data.date, data.time)) {
      errors.time = 'Needs to be future'
    }
    if (!data.guests) {
      errors.guests = 'Required'
    } else if (data.guests > maxGuests) {
      errors.guests = `12 is max`
    }
    if (!data.email) {
      errors.email = 'Required'
    } else if (
      !/^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
    ) {
      errors.email = 'Invalid email'
    }

    return errors
  }

  /**
   * Checks a single form data and returns an empty string if the value is correct or an error message if otherwise
   * @param {String} name name of the form field
   * @param {String} value value of the form field
   * @returns {String} empty string or text string serving as error message
   */
  function validateBookingField (name, value) {
    if (name === 'date' || name === 'time') {
      return value.trim() === '' ? 'Required' : ''
    }
    if (name === 'guests') {
      if (!value) return 'Required'
      if (value > maxGuests) return `You can invite ${maxGuests} guests max`
      if (value < 1) return 'You need at least one guest'
    }
    if (name === 'email') {
      if (!value.trim) return 'Required'
      return /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ? ''
        : 'Invalid email'
    }
    return ''
  }

  useEffect(() => {
    if (formRef.current) {
      const height = formRef.current.getBoundingClientRect().height
      setFormHeight(height)
    }
  })

  if (isSuccess) {
    return (
      <div
        className='form-wrapper form-wrapper--confirmation bg-primary-100 br-medium'
        style={{ height: `${formHeight}px` }}
      >
        <div className={`flow ${isSuccess ? 'form-fade-in' : 'form-fade-out'}`}>
          <h2 className='section__title'>Thanks so much!</h2>
          <p>
            We've received your request and will email you soon to confirm your
            reservation. Looking forward to having you!
          </p>
          <Button
            buttonText='Got it'
            isLines={true}
            onClick={() =>
              setTimeout(() => {
                setIsSuccess(false)
              }, 500)
            }
          ></Button>
        </div>
      </div>
    )
  }
  return (
    <div ref={formRef} className='form-wrapper bg-primary-100'>
      <form
        className={`form form--reservation ${
          isSuccess ? 'form-fade-out' : 'form-fade-in'
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className='section__title form__title'>Make a reservation</h2>
        <div className='form__control-wrapper'>
          <label htmlFor='reservation-date'>Date:</label>
          <input
            id='reservation-date'
            name='date'
            value={form.date}
            type='date'
            onChange={handleChange}
          />
          <div className='form__error clr-primary-900 fw-700'>
            {formErrors.date && (
              <>
                <TiWarningOutline />
                <p className='fs-200'>{formErrors.date}</p>
              </>
            )}
          </div>
        </div>
        <div className='form__control-wrapper'>
          <label htmlFor='reservation-time'>Time:</label>
          <input
            id='reservation-time'
            name='time'
            value={form.time}
            type='time'
            onChange={handleChange}
          />
          <div className='form__error clr-primary-900 fw-700'>
            {formErrors.date && (
              <>
                <TiWarningOutline />
                <p className='fs-200'>{formErrors.date}</p>
              </>
            )}
          </div>
        </div>
        <div className='form__control-wrapper quantity-control'>
          <label htmlFor='guest-number'>Guests:</label>
          <Button
            buttonText={<FaMinus />}
            ariaLabel='Decrease number of guests'
            onClick={() =>
              setForm(prevForm => {
                return {
                  ...prevForm,
                  guests: checkNumber(prevForm.guests - 1, minGuests, maxGuests)
                }
              })
            }
            isAccent={true}
          ></Button>
          <input
            type='number'
            name='guests'
            id='guest-number'
            min={minGuests}
            max={maxGuests}
            step='1'
            value={form.guests}
            onChange={handleChange}
            onInput={e => {
              const { name, value } = e.target
              if (value > maxGuests) {
                setFormErrors(prevErrors => {
                  return { ...prevErrors, [name]: '12 is max' }
                })
              }
            }}
          />
          <Button
            buttonText={<FaPlus />}
            ariaLabel='Increase number of guests'
            onClick={() =>
              setForm(prevForm => {
                return {
                  ...prevForm,
                  guests: checkNumber(prevForm.guests + 1, minGuests, maxGuests)
                }
              })
            }
            isAccent={true}
          ></Button>
          <div className='form__error clr-primary-900 fw-700'>
            {formErrors.guests && (
              <>
                <TiWarningOutline />
                <p className='fs-200'>{formErrors.guests}</p>
              </>
            )}
          </div>
        </div>
        <div className='form__control-wrapper'>
          <label htmlFor='reservation-email'>Email:</label>
          <input
            id='reservation-email'
            name='email'
            value={form.email}
            type='email'
            onChange={handleChange}
          />
          <div className='form__error clr-primary-900 fw-700'>
            {formErrors.email && (
              <>
                <TiWarningOutline />
                <p className='fs-200'>{formErrors.email}</p>
              </>
            )}
          </div>
        </div>
        {isSubmitting ? (
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
      </form>
    </div>
  )
}
export default BookingForm
