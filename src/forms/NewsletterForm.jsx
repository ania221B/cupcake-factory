import { TiWarningOutline } from 'react-icons/ti'
import { Button } from '../components/common'
import { useEffect, useRef, useState } from 'react'
import { useEmailForm } from '../hooks'

function NewsletterForm () {
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
      <div style={{ height: `${formHeight}px` }}>
        <div
          className={`form-wrapper--newsletter__confirmation ${
            isSuccess ? 'form-fade-in' : 'form-fade-out'
          }`}
        >
          <div>
            <h2 className='fs-500 fw-700 clr-neutral-300'>
              Thanks for subscribing!
            </h2>
            <p>You'll be the first to hear our sweet news.</p>
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
    <div ref={formRef} className='form-wrapper form-wrapper--newsletter'>
      <form
        className={`form form--newsletter ${
          isSuccess ? 'form-fade-out' : 'form-fade-in'
        }`}
        onSubmit={handleSubmit}
      >
        <div className='form__control-wrapper'>
          <label htmlFor='newsletter-email' className='sr-only'>
            Email:
          </label>
          <input
            id='newsletter-email'
            name='newsletter-email'
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
            type={'submit'}
            buttonText={'Subscribing...'}
            isLines={true}
            isInactive={true}
          ></Button>
        ) : (
          <Button
            type={'submit'}
            buttonText={'Subscribe'}
            isLines={true}
          ></Button>
        )}
      </form>
    </div>
  )
}
export default NewsletterForm
