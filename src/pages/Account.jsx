import { useGlobalContext } from '../context'
import { FaInfoCircle } from 'react-icons/fa'
import { MdCardGiftcard } from 'react-icons/md'
import { PiPackageBold } from 'react-icons/pi'
import { GrFavorite } from 'react-icons/gr'
import { IoMdSettings } from 'react-icons/io'
import userIcon from '../assets/user-icon.svg'
import { GiftCardForm } from '../forms'

function Account () {
  const { headerHeight, demoUser } = useGlobalContext()

  return (
    <section
      className='section account'
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className='container flow' data-container='small'>
        <header className='account__header'>
          <div className='account__user-img' aria-hidden={true}>
            <img src={userIcon} alt='' />
          </div>
          <h1 className='section__title'>Hello {demoUser.username}!</h1>
          <p>
            You're currently logged in with <strong>{demoUser.email}</strong>
          </p>
        </header>

        <div className='columns-one-one'>
          <section className='account__section flow'>
            <header className='account__header'>
              <div className='account__icon'>
                <PiPackageBold />
              </div>
              <h2 className='section__title section__title--small'>
                Your Orders
              </h2>
            </header>
            <p>You haven't placed any orders yet.</p>
          </section>
          <section className='account__section flow'>
            <header className='account__header'>
              <div className='account__icon'>
                <IoMdSettings />
              </div>
              <h2 className='section__title section__title--small'>
                Account Settings
              </h2>
            </header>
            <ul className='account__list'>
              <li>Change password</li>
              <li>Manage email preferences</li>
              <li>Manage saved addresses</li>
            </ul>
          </section>

          <section className='account__section flow'>
            <header className='account__header'>
              <div className='account__icon'>
                <GrFavorite />
              </div>
              <h2 className='section__title section__title--small'>
                Your Wishlist
              </h2>
            </header>
            <p>Your wishlist is currently empty.</p>
          </section>

          <section className='account__section flow'>
            <header className='account__header'>
              <div className='account__icon'>
                <MdCardGiftcard />
              </div>
              <h2 className='section__title section__title--small'>
                Gift cards
              </h2>
              <p>Your current account balance is {demoUser.balance} points.</p>
            </header>

            <GiftCardForm></GiftCardForm>
          </section>

          <div className='form-hint margin-block-start-32'>
            <FaInfoCircle className='form-hint__icon' />
            <p className='char-limit'>You can apply the following codes: </p>
            <ul>
              <li>
                <p className='fw-600'>
                  CAKELOVER10 <span> — 10% discount</span>
                </p>
              </li>
              <li>
                <p className='fw-600'>
                  FLOURPOWER5 <span> — 5% discount</span>
                </p>
              </li>
              <li>
                <p className='fw-600'>
                  BAKECAREFULLY <span> — 15% discount on Tuesdays</span>
                </p>
              </li>
              <li>
                <p className='fw-600'>
                  SORRY2024 <span> — expired code</span>
                </p>
              </li>
            </ul>
            <p>Everything else is invalid.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Account
