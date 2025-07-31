import { Link } from 'react-router-dom'
import { footerLinks } from '../../data'
import Logo from '../ui/Logo'
import React from 'react'

function Footer () {
  return (
    <footer className='section footer'>
      <div className='footer-primary'>
        <div className='footer-primary__wrapper container'>
          <div className='flow--small'>
            <Logo></Logo>
            <p className='fs-300'>
              Step into a world where every bite brings joy and every treat
              tells a story. From handcrafted cakes to delicate macarons, our
              bakery is devoted to creating sweets that are as beautiful as they
              are delicious.
            </p>
          </div>

          {footerLinks.map(item => {
            const { id, title, details } = item
            if (title === 'contact') {
              return (
                <dl key={id} className='footer__list footer__contact-list'>
                  <dt className='footer__title'>{title}</dt>
                  {details.map(detail => {
                    if (detail.text === 'email us') {
                      return (
                        <dd
                          className='footer__contact-details fs-300'
                          key={detail.id}
                        >
                          <div
                            className='footer__icon fs-400'
                            aria-hidden={true}
                          >
                            {detail.icon}
                          </div>
                          <div className='footer__info'>
                            <h3>{detail.text}</h3>
                            <a href={detail.path}>{detail.subtext}</a>
                          </div>
                        </dd>
                      )
                    }
                    if (detail.text === 'find us') {
                      return (
                        <dd
                          className='footer__contact-details fs-300'
                          key={detail.id}
                        >
                          <div
                            className='footer__icon fs-400'
                            aria-hidden={true}
                          >
                            {detail.icon}
                          </div>
                          <div className='footer__info'>
                            <h3>{detail.text}</h3>
                            <p>
                              {detail.subtext
                                .split('\n')
                                .map((line, index, array) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    {index !== array.length - 1 && <br />}
                                  </React.Fragment>
                                ))}
                            </p>
                          </div>
                        </dd>
                      )
                    }
                    return (
                      <dd
                        className='footer__contact-details fs-300'
                        key={detail.id}
                      >
                        <div className='footer__icon fs-400' aria-hidden={true}>
                          {detail.icon}
                        </div>
                        <div className='footer__info'>
                          <h3>{detail.text}</h3>
                          <p>{detail.subtext}</p>
                        </div>
                      </dd>
                    )
                  })}
                </dl>
              )
            }
            return (
              <dl key={id} className='footer__list'>
                <dt className='footer__title'>{title}</dt>
                {details.map(detail => {
                  return (
                    <dd className='fs-300' key={detail.id}>
                      <Link to={detail.path}>{detail.text}</Link>
                    </dd>
                  )
                })}
              </dl>
            )
          })}
        </div>
      </div>
      <div className='footer-secondary'>
        <div className='footer-secondary__wrapper container'>
          <p className='fs-300'>
            &copy; {new Date().getFullYear()} CupcakeFactory
          </p>
          <p className='fs-300'>Powered by CupcakeFactory</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
