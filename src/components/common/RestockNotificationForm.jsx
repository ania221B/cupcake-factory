import { TiWarningOutline } from 'react-icons/ti'
import Button from './Button'
import { useEffect, useRef, useState } from 'react'
import { useEmailForm } from '../../hooks'

function RestockNotificationForm () {
  const [formHeight, setFormHeight] = useState(0)
  const {
    email,
    formError,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit
  } = useEmailForm()
  const formRef = useRef(null)

  useEffect(() => {
    if (formRef.current) {
      const height = formRef.current.getBoundingClientRect().height
      setFormHeight(height)
    }
  })

  if (isSuccess) {
    return (
      <div
        className='form-wrapper form-wrapper--restock-notification '
        style={{ minHeight: `${formHeight}px` }}
      >
        <header>
          <h3>Notify on Restock:</h3>
          <p>
            If you'd like to be notified once the product is restocked, type
            your email below.
          </p>
        </header>
        <div
          className={`form-wrapper--restock-notification__confirmation ${
            isSuccess ? 'form-fade-in' : 'form-fade-out'
          }`}
        >
          <div>
            <h4 className='fs-450 fw-700 clr-neutral-300'>
              Thanks for your email!
            </h4>
            <p>We'll notify you as soon as the product is available again.</p>
          </div>
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
    <div
      ref={formRef}
      className='form-wrapper form-wrapper--restock-notification'
    >
      <form
        onSubmit={handleSubmit}
        className={`form form--restock-notification ${
          isSuccess ? 'form-fade-out' : 'form-fade-in'
        }`}
      >
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
            buttonText={'Subscribing...'}
            ariaLabel='Notify me about product restock'
            type='submit'
            isLines={true}
            isInactive={true}
          ></Button>
        ) : (
          <Button
            buttonText={'Notify me'}
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
