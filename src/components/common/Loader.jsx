import { useGlobalContext } from '../../context'
import { ImSpinner } from 'react-icons/im'

function Loader () {
  const { headerHeight } = useGlobalContext()
  return (
    <section
      className='section bg-primary-100 spinner-section'
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className='container spinner-container'>
        <ImSpinner className='spinner' aria-hidden={true} />
        <p className='sr-only'>Loading...</p>
      </div>
    </section>
  )
}
export default Loader
