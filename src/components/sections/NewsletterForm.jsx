import { useForm, ValidationError } from '@formspree/react'
import { Button } from '../common'
import { useEffect, useRef, useState } from 'react'

function NewsletterForm () {
  const [formHeight, setFormHeight] = useState(0)
  const formRef = useRef(null)
  const [state, handleSubmit] = useForm('mqabgdoq')

  useEffect(() => {
    if (formRef.current) {
      const height = formRef.current.getBoundingClientRect().height
      setFormHeight(height)
    }
  })

  if (state.succeeded) {
    return (
      <div style={{ height: `${formHeight}px` }}>
        <div
          className={`char-limit ${
            state.succeeded ? 'form-fade-in' : 'form-fade-out'
          }`}
        >
          <h2 className='fs-500 fw-700 clr-neutral-300'>
            Thanks for subscribing!
          </h2>
          <p>You'll be the first to hear our sweet news.</p>
        </div>
      </div>
    )
  }
  return (
    <div
      ref={formRef}
      className='form-wrapper form-wrapper--newsletter'
      onSubmit={handleSubmit}
    >
      <div
        className={`form form--newsletter ${
          state.succeeded ? 'form-fade-out' : 'form-fade-in'
        }`}
      >
        <label htmlFor='newsletter-email' className='sr-only'>
          Email:
        </label>
        <input
          id='newsletter-email'
          name='newsletter-email'
          type='text'
          placeholder='Email address'
        />
        <ValidationError
          field='newsletter-email'
          prefix='Email'
          errors={state.errors}
        ></ValidationError>
        {state.submitting ? (
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
      </div>
    </div>
  )
}
export default NewsletterForm
