import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseFill, RiMenuFill, RiAccountCircleLine } from 'react-icons/ri'
import { BiCart } from 'react-icons/bi'
import { IoMdLogOut } from 'react-icons/io'
import { navLinks } from '../../data/navLinks'
import { Button } from '../common'
import { useGlobalContext } from '../../context'
import { calculateCartTotals } from '../../utils'
import { usePageLocation } from '../../hooks'

function Navigation () {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext()
  const path = usePageLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navList = useRef('is-closed')
  const openBtn = useRef(null)
  const closeBtn = useRef(null)
  const isStorePage = path.startsWith('/store')
  const { totalItemCount } = calculateCartTotals()

  function openMenu () {
    openBtn.current?.classList.remove('fade-in')
    openBtn.current?.classList.add('fade-out')
  }
  function closeMenu () {
    closeBtn.current?.classList.remove('fade-in')
    closeBtn.current?.classList.add('fade-out')
    openBtn.current?.parentElement.focus()
  }

  function toggleMenu () {
    isMenuOpen ? closeMenu() : openMenu()
  }

  function handleAnimationEnd (e) {
    const { animationName, target } = e
    if (e.animationName === 'openMenu') {
      closeBtn.current?.classList.add('fade-in')
      closeBtn.current?.parentElement.focus()
    }
    if (animationName === 'fadeOutScale' && target === openBtn.current) {
      setIsMenuOpen(true)
      navList.current?.setAttribute('data-state', 'is-open')
      document.body.style.paddingInlineEnd = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`
      document.body.classList.add('overlay')
    }
    if (animationName === 'fadeOutScale' && target === closeBtn.current) {
      navList.current?.setAttribute('data-state', 'is-closing')
    }
    if (animationName === 'closeMenu') {
      document.body.style.paddingInlineEnd = '0px'
      setIsMenuOpen(false)
      navList.current?.setAttribute('data-state', 'is-closed')
      document.body.classList.remove('overlay')
      openBtn.current?.classList.remove('fade-out')
      openBtn.current?.classList.add('fade-in')
      closeBtn.current?.classList.remove('fade-out')
    }
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const focusableElements = navList.current.querySelectorAll('a, button')

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    function handleClickOutside (e) {
      if (navList.current && !navList.current.contains(e.target)) {
        closeMenu()
      }
    }

    function handleKey (e) {
      if (e.key === 'Escape') {
        closeMenu()
      }

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('click', handleClickOutside)

    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isMenuOpen])

  return (
    <nav className='page-nav'>
      <button
        type='button'
        aria-label='Open navigation menu'
        aria-controls='primary-nav'
        className='btn btn--menu'
        onClick={e => {
          e.stopPropagation()
          toggleMenu()
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        <RiMenuFill className='btn--open' ref={openBtn}></RiMenuFill>
      </button>
      <div
        id='primary-nav'
        className='page-nav__slideout'
        data-state='is-closed'
        ref={navList}
        onAnimationEnd={handleAnimationEnd}
      >
        <button
          type='button'
          aria-label='Close navigation menu'
          aria-controls='primary-nav'
          className='btn btn--menu'
          onClick={e => {
            e.stopPropagation()
            toggleMenu()
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          <RiCloseFill className='btn--close' ref={closeBtn}></RiCloseFill>
        </button>
        <ul className='page-nav__list' role='list'>
          {navLinks.map(link => {
            const { id, path, text } = link
            return (
              <li key={id}>
                <NavLink to={path}>{text}</NavLink>
              </li>
            )
          })}
        </ul>

        <div className='page-nav__extras'>
          {(isStorePage || isLoggedIn) && (
            <Button
              buttonText={
                <>
                  <span className='cart__item-counter'>{totalItemCount}</span>
                  <span className='icon'>
                    <BiCart />
                  </span>
                  <span>Cart</span>
                </>
              }
              ariaLabel='View your cart'
              path='/cart'
              isLink={true}
              isIcon={true}
              className='btn--cart'
            />
          )}
          {isLoggedIn ? (
            <>
              <Button
                buttonText={
                  <>
                    <span>
                      <RiAccountCircleLine />
                    </span>
                    <span>Account</span>
                  </>
                }
                ariaLabel='Go to your account'
                path='/account'
                isLink={true}
                isIcon={true}
              />
              <Button
                buttonText={
                  <>
                    <span>
                      <IoMdLogOut />
                    </span>
                    <span>Log out</span>
                  </>
                }
                ariaLabel='Log out of your account'
                onClick={() => setIsLoggedIn(false)}
                isIcon={true}
              />
            </>
          ) : (
            <Button
              buttonText='Log in'
              isLink={true}
              path='/login'
              isLines={true}
            />
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navigation
