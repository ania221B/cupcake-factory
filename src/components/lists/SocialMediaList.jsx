import { socialMediaLinks } from '../../data'
import SocialLink from '../common/SocialLink'

function SocialMediaList () {
  return (
    <ul className='social-list' role='list'>
      {socialMediaLinks.map(link => {
        return <SocialLink link={link} key={link.id}></SocialLink>
      })}
    </ul>
  )
}
export default SocialMediaList
