import { Link, useRouteError } from 'react-router-dom'
import errorImage from '../assets/images/page-not-found.svg'

function Error () {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <section className='section error-page'>
        <div className='container'>
          <div className='img-container error-page__img'>
            <img src={errorImage} alt='' />
          </div>
          <div className='flow text-center'>
            <h2 className='error-page__title'>Error!</h2>
            <p>Seems you lost your way. This page does not exist</p>
            <Link to='/' className='btn'>
              Back home
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className='section'>
      <div className='container'>
        <h2>Something went wrong</h2>
        <Link to='/' className='btn'>
          Back home
        </Link>
      </div>
    </section>
  )
}
export default Error
