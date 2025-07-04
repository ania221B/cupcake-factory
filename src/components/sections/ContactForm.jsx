import { nanoid } from 'nanoid'
import { contactSubjects } from '../../data'
import { Button } from '../common'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function ContactForm () {
  const [formHeight, setFormHeight] = useState(0)
  const formRef = useRef(null)
  const [state, handleSubmit] = useForm('xkgbpvql')

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
          className={`char-limit ${
            state.succeeded ? 'form-fade-in' : 'form-fade-out'
          }`}
        >
          <h2 className='section__title'>Thanks for reaching out!</h2>
          <p>
            We've received your message and will get back to you as soon as
            possible — usually within 1-2 business days.
          </p>
          <p>
            In the meantime, feel free to browse our <Link to='/faq'>FAQ</Link>{' '}
            or check what's new in our <Link to='/blog'>blog</Link>.
          </p>
        </div>
      </div>
    )
  }
  return (
    <div ref={formRef} className='form-wrapper bg-primary-100'>
      <form
        className={`form form--contact ${
          state.succeeded ? 'form-fade-out' : 'form-fade-in'
        }`}
        onSubmit={handleSubmit}
      >
        <fieldset className='flow'>
          <legend>
            Name
            <span>*</span>
          </legend>
          <div className='form__control-wrapper'>
            <div>
              <label htmlFor='first-name' className='sr-only'>
                First name
              </label>
              <input
                type='text'
                id='first-name'
                name='first-name'
                placeholder='First name'
              />
              <ValidationError
                field='first-name'
                prefix='First name'
                errors={state.errors}
              ></ValidationError>
            </div>
            <div>
              <label htmlFor='last-name' className='sr-only'>
                Last Name
              </label>
              <input
                type='text'
                id='last-name'
                name='last-name'
                placeholder='Last name'
              />
              <ValidationError
                field='last-name'
                prefix='Last name'
                errors={state.errors}
              ></ValidationError>
            </div>
          </div>
        </fieldset>
        <fieldset className='flow'>
          <legend>
            Email
            <span>*</span>
          </legend>
          <div className='form__control-wrapper'>
            <label htmlFor='email' className='sr-only'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='eg. mail@example.com'
            />
            <ValidationError
              field='email'
              prefix='Email'
              errors={state.errors}
            ></ValidationError>
          </div>
        </fieldset>
        <fieldset className='flow'>
          <legend>
            Subject
            <span>*</span>
          </legend>
          <div className='form__control-wrapper'>
            <label htmlFor='msg-subject' className='sr-only'>
              Subject
            </label>
            <div className='select-menu-wrapper'>
              <select name='subject' id='msg-subject' className='select-menu'>
                {contactSubjects.map(subject => {
                  const { value, label } = subject
                  return (
                    <option key={nanoid()} value={value}>
                      {label}
                    </option>
                  )
                })}
              </select>
            </div>
            <ValidationError
              field='subject'
              prefix='Subject'
              errors={state.errors}
            ></ValidationError>
          </div>
        </fieldset>
        <fieldset className='flow'>
          <legend>
            Message
            <span>*</span>
          </legend>
          <div className='form__control-wrapper'>
            <label htmlFor='msg-body' className='sr-only'>
              Message text
            </label>
            <textarea
              name='message'
              id='msg-body'
              cols='30'
              rows='5'
              placeholder='Start typing here...'
            ></textarea>
            <ValidationError
              field='message'
              prefix='Message'
              errors={state.errors}
            ></ValidationError>
          </div>
        </fieldset>
        {state.submitting ? (
          <Button
            buttonText='submitting...'
            type='submit'
            isLines={true}
            isInactive={true}
          ></Button>
        ) : (
          <Button buttonText='submit' type='submit' isLines={true}></Button>
        )}
      </form>
    </div>
  )
}
export default ContactForm
