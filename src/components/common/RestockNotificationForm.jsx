import { TiWarningOutline } from 'react-icons/ti'
import Button from './Button'
import { useEffect, useRef, useState } from 'react'

function RestockNotificationForm () {
  const [formHeight, setFormHeight] = useState(0)
  const [email, setEmail] = useState('')
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef(null)

  /**
   * Checks if value provided is a valid email address
   * @param {String} email email address provided by user
   * @returns {Boleean}
   */
  function validateEmail (email) {
    const emailRegax = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (email === '') {
      return null
    } else {
      return emailRegax.test(email)
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 500)

    const checkResult = validateEmail(email)

    if (checkResult) {
      setFormError('')
    } else if (checkResult === null) {
      setFormError('Please provide email address')
    } else {
      setFormError('Provided email address is invalid')
    }

    if (!formError) {
      setEmail('')
      setIsSuccess(true)
    }
  }

  function handleChange (e) {
    const updatedEmail = e.target.value
    setEmail(updatedEmail)
    const checkResult = validateEmail(updatedEmail)

    if (checkResult) {
      setFormError('')
    } else if (checkResult === null) {
      setFormError('Please provide email address')
    } else {
      setFormError('Provided email address is invalid')
    }
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
        className='form-wrapper form-wrapper--restock-notification flow'
        style={{ height: `${formHeight}px` }}
      >
        <header>
          <h3>Notify on Restock:</h3>
          <p>
            If you'd like to be notified once the product is restocked, type
            your email below.
          </p>
        </header>
        <div
          className={`char-limit ${
            isSuccess ? 'form-fade-in' : 'form-fade-out'
          }`}
        >
          <h4 className='fs-500 fw-700 clr-neutral-300'>
            Thanks for your email!
          </h4>
          <p>We'll notify you as soon as the product is available again.</p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={formRef}
      className='form-wrapper form-wrapper--restock-notification'
    >
      <form onSubmit={handleSubmit} className='form form--restock-notification'>
        <header>
          <h3>Notify on Restock:</h3>
          <p>
            If you'd like to be notified once the product is restocked, type
            your email below.
          </p>
        </header>
        <div className='form__control-wrapper'>
          <label htmlFor='email' className='sr-only'>
            Email:
          </label>
          <input
            id='email'
            name='email'
            value={email}
            type='email'
            placeholder='Email address'
            onChange={handleChange}
          />
          {formError && (
            <div className='form__error clr-primary-900 fw-700'>
              <TiWarningOutline />
              <p className='fs-200'>{formError}</p>
            </div>
          )}
        </div>

        {isSubmitting ? (
          <Button
            buttonText='Subscribing...'
            ariaLabel='Notify me about product restock'
            type='submit'
            isLines={true}
            isInactive={true}
          ></Button>
        ) : (
          <Button
            buttonText='Notify me'
            ariaLabel='Notify me about product restock'
            type='submit'
            isLines={true}
          ></Button>
        )}
      </form>
    </div>
  )
}
export default RestockNotificationForm
