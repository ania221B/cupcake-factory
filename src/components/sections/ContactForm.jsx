import { Button } from '../common'

function ContactForm () {
  return (
    <div className='form-container bg-primary-light'>
      <form action='' method='POST'>
        <div className='form-wrapper column flow--small'>
          <div className='flow--x-small'>
            <label htmlFor='fname'>
              Name
              <span>*</span>
            </label>
            <div className='flex-wrapper'>
              <input type='text' id='fname' placeholder='First name' />
              <input type='text' id='lname' placeholder='Last name' />
            </div>
          </div>

          <div>
            <label htmlFor='email'>
              Email
              <span>*</span>
            </label>
            <input type='email' id='email' placeholder='eg. mail@example.com' />
          </div>

          <div>
            <label htmlFor='msg-subject'>
              Subject
              <span>*</span>
            </label>
            <input
              type='text'
              id='msg-subject'
              placeholder='eg. Course opening'
            />
          </div>

          <div>
            <label htmlFor='msg-body'>
              Comment or Message
              <span>*</span>
            </label>
            <textarea
              name=''
              id='msg-body'
              cols='30'
              rows='5'
              placeholder='Start typing here...'
            ></textarea>
          </div>

          {/* <button type='submit' className='btn btn--lines bg-animation'>
            Submit
          </button> */}
          <Button buttonText={'submit'} type={'submit'} isLines={true}></Button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm
