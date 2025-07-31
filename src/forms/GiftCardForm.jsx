import { useState } from 'react'
import { Button } from '../components/common'

function GiftCardForm () {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    if (!code.trim()) {
      setMessage('Please enter a code')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      if (code === 'CAKELOVER10') {
        setMessage('Success! 10% discount applied 🎉')
        setIsApplied(true)
      } else if (code === 'FLOURPOWER5') {
        setMessage('Success! 5% discount applied 🍰')
        setIsApplied(true)
      } else if (code === 'BAKECAREFULLY' && new Date().getDay() === 2) {
        setMessage('Success! 15% discount applied ✨')
        setIsApplied(true)
      } else if (code === 'SORRY2024') {
        setMessage('Sorry, this code has expired')
      } else {
        setMessage('Invalid code. Try again?')
      }
    }, 1000)
  }
  return (
    <form className='form form--gift-card' onSubmit={handleSubmit}>
      <div className='form__control-wrapper'>
        <label htmlFor='gift-card-code'>Enter your code:</label>
        <input
          id='gift-card-code'
          type='text'
          value={code}
          placeholder='gift card code'
          onChange={e => {
            setCode(e.target.value)
            if (!e.target.value.trim()) {
              setMessage('Please enter a code')
            } else {
              setMessage('')
            }
            setIsApplied(false)
          }}
        />
        <div className='form__error clr-primary-900 fw-700'>
          {message && <p className='fs-200'>{message}</p>}
        </div>
      </div>
      {isSubmitting ? (
        <Button
          buttonText='Redeemimg...'
          type='submit'
          isAccent={true}
          isInactive={true}
        ></Button>
      ) : (
        <Button
          buttonText='Redeem'
          type='submit'
          isAccent={true}
          isInactive={isApplied}
        ></Button>
      )}
    </form>
  )
}
export default GiftCardForm
