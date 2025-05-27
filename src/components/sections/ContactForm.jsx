import { nanoid } from 'nanoid'
import { contactSubjects } from '../../data'
import { Button } from '../common'

function ContactForm () {
  return (
    <form className='contact-form bg-primary-100' action='' method='POST'>
      <fieldset className='flow'>
        <legend>
          Name
          <span>*</span>
        </legend>
        <div className='form-control-wrapper'>
          <div>
            <label htmlFor='first-name' className='sr-only'>
              First name
            </label>
            <input type='text' id='first-name' placeholder='First name' />
          </div>
          <div>
            <label htmlFor='last-name' className='sr-only'>
              Last Name
            </label>
            <input type='text' id='last-name' placeholder='Last name' />
          </div>
        </div>
      </fieldset>

      <fieldset className='flow'>
        <legend>
          Email
          <span>*</span>
        </legend>
        <div className='form-control-wrapper'>
          <label htmlFor='email' className='sr-only'>
            Email address
          </label>
          <input type='email' id='email' placeholder='eg. mail@example.com' />
        </div>
      </fieldset>

      <fieldset className='flow'>
        <legend>
          Subject
          <span>*</span>
        </legend>
        <div className='form-control-wrapper'>
          <label htmlFor='msg-subject' className='sr-only'>
            Subject
          </label>
          <select name='' id=''>
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
      </fieldset>

      <fieldset className='flow'>
        <legend>
          Message
          <span>*</span>
        </legend>
        <div className='form-control-wrapper'>
          <label htmlFor='msg-body' className='sr-only'>
            Message text
          </label>
          <textarea
            name=''
            id='msg-body'
            cols='30'
            rows='5'
            placeholder='Start typing here...'
          ></textarea>
        </div>
      </fieldset>

      <Button buttonText={'submit'} type={'submit'} isLines={true}></Button>
    </form>
  )
}
export default ContactForm
