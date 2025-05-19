import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context'
import Logo from '../ui/Logo'
import Navigation from './Navigation'

function Header () {
  const headerRef = useRef(null)
  const { setHeaderHeight } = useGlobalContext()

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.getBoundingClientRect().height
      setHeaderHeight(height)
    }
  }, [])
  return (
    <header ref={headerRef} className='home primary-header'>
      <div className='container'>
        <div className='primary-header__wrapper'>
          <Logo></Logo>
          <Navigation></Navigation>
        </div>
      </div>
    </header>
  )
}
export default Header
