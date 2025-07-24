import React from 'react'

function ContactDetailsLink ({ detail }) {
  const { icon, text, path, subtext } = detail
  return (
    <li className='contact-details__item deco deco--separator deco--separator-top'>
      <div className='contact-details__icon'>{icon}</div>
      <div>
        <h3 className='contact-details__heading'>{text}</h3>
        {path ? (
          <a href={path} className='force-link-wrap'>
            {subtext}
          </a>
        ) : (
          <p>
            {subtext.split('\n').map((line, index, array) => (
              <React.Fragment key={index}>
                {line}
                {index !== array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
    </li>
  )
}
export default ContactDetailsLink
