import { nanoid } from 'nanoid'
import { TiWarningOutline } from 'react-icons/ti'
import { contactSubjects } from '../data'
import { Button } from '../components/common'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useFormHandler } from '../hooks'

function ContactForm () {
  const [formHeight, setFormHeight] = useState(0)
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    subject: contactSubjects[0]?.value || '',
    message: ''
  }
  const {
    form,
    formErrors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit
  } = useFormHandler(initialForm, validateContactField, validateContactForm)
  const formRef = useRef(null)

  /**
   * Performs checks on form data and returns an object with any existing errors
   * @param {Object} data Object with data from the form: form fields and their values
   * @returns {Object} errors Object with any existing errors
   */
  function validateContactForm (data) {
    const errors = {}
    if (!data.firstName) errors.firstName = 'Required'
    if (!data.lastName) errors.lastName = 'Required'
    if (!data.email) {
      errors.email = 'Required'
    } else if (
      !/^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
    ) {
      errors.email = 'Invalid email'
    }
    if (!data.subject) errors.subject = 'Required'
    if (!data.message) errors.message = 'Required'
    return errors
  }

  /**
   * Checks a single form data and returns an empty string if the value is correct or an error message if otherwise
   * @param {String} name name of the form field
   * @param {String} value value of the form field
   * @returns {String} empty string or text string serving as error message
   */
  function validateContactField (name, value) {
    if (
      name === 'firstName' ||
      name === 'lastName' ||
      name === 'subject' ||
      name === 'message'
    ) {
      return value.trim() === '' ? 'Required' : ''
    }
    if (name === 'email') {
      if (!value.trim()) return 'Required'
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
        <div
          className={`char-limit flow ${
            isSuccess ? 'form-fade-in' : 'form-fade-out'
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
        className={`form form--contact ${
          isSuccess ? 'form-fade-out' : 'form-fade-in'
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
                name='firstName'
                value={form.firstName}
                placeholder='First name'
                onChange={handleChange}
              />
              <div className='form__error clr-primary-900 fw-700'>
                {formErrors.firstName && (
                  <>
                    <TiWarningOutline />
                    <p className='fs-200'>{formErrors.firstName}</p>
                  </>
                )}
              </div>
            </div>
            <div>
              <label htmlFor='last-name' className='sr-only'>
                Last Name
              </label>
              <input
                type='text'
                id='last-name'
                name='lastName'
                value={form.lastName}
                placeholder='Last name'
                onChange={handleChange}
              />
              <div className='form__error clr-primary-900 fw-700'>
                {formErrors.lastName && (
                  <>
                    <TiWarningOutline />
                    <p className='fs-200'>{formErrors.lastName}</p>
                  </>
                )}
              </div>
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
              value={form.email}
              placeholder='eg. mail@example.com'
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
              <select
                id='msg-subject'
                name='subject'
                value={form.subject}
                className='select-menu'
                onChange={handleChange}
              >
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
            <div className='form__error clr-primary-900 fw-700'>
              {formErrors.subject && (
                <>
                  <TiWarningOutline />
                  <p className='fs-200'>{formErrors.subject}</p>
                </>
              )}
            </div>
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
              id='msg-body'
              name='message'
              value={form.message}
              cols='30'
              rows='5'
              placeholder='Start typing here...'
              onChange={handleChange}
            ></textarea>
            <div className='form__error clr-primary-900 fw-700'>
              {formErrors.message && (
                <>
                  <TiWarningOutline />
                  <p className='fs-200'>{formErrors.message}</p>
                </>
              )}
            </div>
          </div>
        </fieldset>
        {isSubmitting ? (
          <Button
            buttonText={'submitting...'}
            type='submit'
            isLines={true}
            isInactive={true}
          ></Button>
        ) : (
          <Button buttonText={'submit'} type='submit' isLines={true}></Button>
        )}
      </form>
    </div>
  )
}
export default ContactForm
