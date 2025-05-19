import { nanoid } from 'nanoid'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

export const socialMediaLinks = [
  {
    id: nanoid(),
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: <FaInstagram></FaInstagram>
  },
  {
    id: nanoid(),
    platform: 'YouTube',
    url: 'https://youtube.com',
    icon: <FaYoutube></FaYoutube>
  },
  {
    id: nanoid(),
    platform: 'Facebook',
    url: 'https://facebook.com',
    icon: <FaFacebook></FaFacebook>
  }
]
