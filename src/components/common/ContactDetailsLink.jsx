function ContactDetailsLink ({ detail }) {
  const { icon, text, path, subtext } = detail
  return (
    <li className='contact-details__item deco deco--separator deco--separator-top'>
      <div className='contact-details__icon'>{icon}</div>
      <div>
        <h3 className='contact-details__heading'>{text}</h3>
        <a href={path} className='force-link-wrap'>
          {subtext}
        </a>
      </div>
    </li>
  )
}
export default ContactDetailsLink
