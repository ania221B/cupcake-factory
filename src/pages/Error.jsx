import { Link, useRouteError } from 'react-router-dom'
import errorImage from '../assets/images/page-not-found.svg'
import { Button } from '../components/common'

function Error () {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <section className='section error-page error-page--not-found'>
        <div className='container'>
          <div className='img-container error-page__img'>
            <img src={errorImage} alt='' />
          </div>
          <div className='flow text-center'>
            <h2 className='error-page__title'>Error!</h2>
            <p>Seems you lost your way. This page does not exist</p>

            <Button
              buttonText='Back home'
              path={'/'}
              isLink={true}
              isAccent={true}
              hasArrow={true}
            ></Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='section error-page error-page--general'>
      <div className='container flow'>
        <h2>Something went wrong</h2>
        <Button
          buttonText='Back home'
          path={'/'}
          isLink={true}
          isAccent={true}
          hasArrow={true}
        ></Button>
      </div>
    </section>
  )
}
export default Error
