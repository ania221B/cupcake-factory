import { nanoid } from 'nanoid'
import { FaPhone } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export const footerLinks = [
  {
    id: nanoid(),
    title: 'shopping',
    details: [
      {
        id: nanoid(),
        path: '/faq#shopping',
        text: 'shipping',
        type: 'internal'
      },
      {
        id: nanoid(),
        path: '/faq#shopping',
        text: 'payment',
        type: 'internal'
      },
      {
        id: nanoid(),
        path: '/faq#shopping',
        text: 'gift cards',
        type: 'internal'
      },
      { id: nanoid(), path: '/faq#shopping', text: 'returns', type: 'internal' }
    ]
  },
  {
    id: nanoid(),
    title: 'my account',
    details: [
      {
        id: nanoid(),
        path: '/faq#my-account',
        text: 'signing up',
        type: 'internal'
      },
      {
        id: nanoid(),
        path: '/faq#my-account',
        text: 'logging in',
        type: 'internal'
      },
      {
        id: nanoid(),
        path: '/faq#my-account',
        text: 'orders',
        type: 'internal'
      },
      {
        id: nanoid(),
        path: '/faq#my-account',
        text: 'newsletter',
        type: 'internal'
      }
    ]
  },
  {
    id: nanoid(),
    title: 'contact',
    details: [
      {
        id: nanoid(),
        text: 'find us',
        subtext: `12 Kwiatowa Street\n00-123 Kraków, Poland`,
        icon: <FaMapLocationDot />
      },
      {
        id: nanoid(),
        path: 'mailto:cupcakefactory@support.com',
        text: 'email us',
        subtext: 'cupcakefactory@support.com',
        icon: <MdEmail />,
        type: 'external'
      },
      {
        id: nanoid(),
        text: 'call us',
        subtext: '+01 123 456 78 90',
        icon: <FaPhone />
      }
    ]
  }
]
