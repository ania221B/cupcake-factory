function SocialLink ({ link, hero }) {
  const { id, platform, url, icon } = link
  return (
    <li className='social-list__link' key={id}>
      <a href={url} aria-label={`link to page on ${platform}`}>
        {icon}
        <h3 className='social-list__link__name'>{platform}</h3>
      </a>
    </li>
  )
}
export default SocialLink
