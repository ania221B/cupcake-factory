import { useState } from 'react'

export function useFormHandler (initialState, validateField, validateForm) {
  const [form, setForm] = useState(initialState)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  /**
   * Updates filed value and validates the field
   * @param {Object} e Event object
   */
  function handleChange (e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    const error = validateField(name, value)
    setFormErrors({ ...formErrors, [name]: error })
  }

  /**
   * Prevents default form submission, validates fields, and sets success state if no errors are found.
   * @param {Object} e Event Object
   */
  function handleSubmit (e) {
    e.preventDefault()
    const errors = validateForm(form)
    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      resetForm()
    }, 500)
  }

  function resetForm () {
    setForm(initialState)
    setFormErrors({})
  }

  return {
    form,
    setForm,
    formErrors,
    setFormErrors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleChange,
    handleSubmit
  }
}
