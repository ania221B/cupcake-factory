import { useState } from 'react'

export function useEmailForm () {
  const [email, setEmail] = useState('')
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  /**
   * Checks if value provided is a valid email address
   * @param {String} email email address provided by user
   * @returns {Boleean}
   */
  function validateEmail (email) {
    const emailRegax = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!email) return 'Please provide email address'
    if (!emailRegax.test(email)) return 'Provided email address is invalid'
    return ''
  }

  /**
   * Updates filed value and validates the field
   * @param {Object} e Event object
   */
  function handleChange (e) {
    setEmail(e.target.value)
    setFormError(validateEmail(e.target.value))
  }

  /**
   * Prevents default form submission, validates field, and sets success state if no error is found.
   * @param {Object} e Event object
   */
  function handleSubmit (e) {
    e.preventDefault()
    const error = validateEmail(email)
    setFormError(error)

    if (error) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail('')
    }, 500)
  }

  return {
    email,
    formError,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit
  }
}
