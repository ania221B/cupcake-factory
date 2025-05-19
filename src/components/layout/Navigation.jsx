import { useEffect, useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { RiCloseLargeFill, RiMenuFill } from 'react-icons/ri'
import { GrFormClose } from 'react-icons/gr'
import { FaSearch } from 'react-icons/fa'
import { navLinks } from '../../data/navLinks'

function Navigation () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navList = useRef('is-closed')

  function openMenu () {
    setIsMenuOpen(true)
    navList.current.setAttribute('data-state', 'is-open')
  }
  function closeMenu () {
    setIsMenuOpen(false)
    navList.current.setAttribute('data-state', 'is-closing')
  }

  function toggleMenu () {
    isMenuOpen ? closeMenu() : openMenu()
  }

  useEffect(() => {
    function handleClickOutside (e) {
      if (navList.current && !navList.current.contains(e.target)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className='page-nav'>
      <button
        className='btn btn--menu'
        aria-controls='primary-nav'
        onClick={e => {
          e.stopPropagation()
          toggleMenu()
        }}
      >
        {isMenuOpen ? (
          <RiCloseLargeFill className='btn--close' />
        ) : (
          <RiMenuFill className='btn--open' />
        )}
      </button>

      <div
        id='primary-nav'
        className='page-nav__slideout'
        data-state='is-closed'
        ref={navList}
        onAnimationEnd={e => {
          if (e.animationName === 'closeMenu') {
            navList.current.setAttribute('data-state', 'closed')
          }
        }}
      >
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
          <search className='search-bar'>
            <input
              type='search'
              placeholder='serach&hellip;'
              aria-label='search bar'
              className='search-bar__input jsSearchInput'
            />
            <button
              className='btn search-bar__btn jsSearch'
              aria-label='submit search'
            >
              <FaSearch />
            </button>
          </search>

          {/* make it go to login screen later? */}
          <a href='#' className='btn btn--login btn--lines bg-animation'>
            Log in
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
