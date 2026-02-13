import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../context'
import Logo from '../ui/Logo'
import Navigation from './Navigation'

import { usePageLocation } from '../../hooks'

function Header () {
  const path = usePageLocation()
  const isHomePage = path === '/'
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef(null)
  const sentinelRef = useRef(null)
  const { setHeaderHeight } = useGlobalContext()

  useLayoutEffect(() => {
    function updateHeraderHeight () {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height
        setHeaderHeight(height)
      }
    }

    const debounce = (fn, delay) => {
      let timeout
      return () => {
        clearTimeout(timeout)
        timeout = setTimeout(fn, delay)
      }
    }
    const debouncedResize = debounce(updateHeraderHeight, 100)

    updateHeraderHeight()
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0 }
    )
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }
    return () => observer.disconnect()
  }, [])
  return (
    <>
      <div ref={sentinelRef} style={{ height: '1px' }}></div>
      <header
        ref={headerRef}
        className={
          isSticky ? 'home primary-header sticky' : 'home primary-header'
        }
      >
        <div className='container'>
          <div className='primary-header__wrapper'>
            <Logo elementType={isHomePage ? 'h1' : 'div'}></Logo>
            <Navigation></Navigation>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
