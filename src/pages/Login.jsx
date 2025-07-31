import { Button } from '../components/common'
import { HeroSection } from '../components/sections'
import { FaInfoCircle } from 'react-icons/fa'
import { TiWarningOutline } from 'react-icons/ti'
import { useGlobalContext } from '../context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login () {
  const { setIsLoggedIn, demoUser } = useGlobalContext()
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [formErrors, setFormErrors] = useState({
    usernameError: '',
    passwordError: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  let navigate = useNavigate()

  function validateForm (user) {
    let errors = {
      usernameError: '',
      passwordError: ''
    }
    if (!user.username) {
      errors.usernameError = 'Please fill in username.'
    } else if (user.username !== demoUser.username) {
      errors.usernameError = 'Username is incorrect.'
    } else {
      errors.usernameError = ''
    }

    if (!user.password) {
      errors.passwordError = 'Please fill in password.'
    } else if (user.password !== demoUser.password) {
      errors.passwordError = 'Password is incorrect.'
    } else {
      errors.passwordError = ''
    }
    return errors
  }

  function handleSubmit (e) {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 500)

    setFormErrors(validateForm(user))

    const isFormValid = Object.values(formErrors).every(
      message => message === ''
    )

    if (isFormValid) {
      setUser({
        username: '',
        password: ''
      })
      setIsLoggedIn(true)

      setTimeout(() => {
        navigate('/')
      }, 700)
    }
  }

  function handleChange (e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value }
    setUser(updatedUser)
    setFormErrors(validateForm(updatedUser))
  }

  return (
    <>
      <HeroSection title='Log In'></HeroSection>
      <section className='section'>
        <div className='container' data-container='x-small'>
          <div className='form-wrapper'>
            <form onSubmit={handleSubmit} className='form form--login'>
              <div className='form__control-wrapper'>
                <label htmlFor='username' className='clr-neutral-300 fw-600'>
                  Username:
                </label>
                <input
                  id='username'
                  name='username'
                  value={user.username}
                  type='text'
                  onChange={handleChange}
                />
                <div className='form__error clr-primary-900 fw-700'>
                  {formErrors.usernameError && (
                    <>
                      <TiWarningOutline />
                      <p className='fs-200 '>{formErrors.usernameError}</p>
                    </>
                  )}
                </div>
              </div>

              <div className='form__control-wrapper'>
                <label htmlFor='password' className='clr-neutral-300 fw-600'>
                  Password:
                </label>
                <input
                  id='password'
                  name='password'
                  value={user.password}
                  type='password'
                  onChange={handleChange}
                />
                <div className='form__error clr-primary-900 fw-700'>
                  {formErrors.passwordError && (
                    <>
                      <TiWarningOutline />
                      <p className='fs-200 '>{formErrors.passwordError}</p>
                    </>
                  )}
                </div>
              </div>

              {isSubmitting ? (
                <Button
                  buttonText='Logging in...'
                  ariaLabel='Log in to your customer account'
                  type='submit'
                  hasArrow={true}
                  isAccent={true}
                  isInactive={true}
                ></Button>
              ) : (
                <Button
                  buttonText='Log in'
                  ariaLabel='Log in to your customer account'
                  type='submit'
                  hasArrow={true}
                  isAccent={true}
                ></Button>
              )}
            </form>
          </div>

          <div className='form-hint margin-block-start-32'>
            <FaInfoCircle className='form-hint__icon' />
            <p className='char-limit'>
              To log in use the following credentials: <br /> Username:{' '}
              <code className='fw-600'>demo-user</code>
              <br />
              Password: <code className='fw-600'>!password123</code>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login
