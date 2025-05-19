import { nanoid } from 'nanoid'

export const navLinks = [
  { id: nanoid(), path: '/', text: 'Home', type: 'internal' },
  { id: nanoid(), path: '/store', text: 'Store', type: 'internal' },
  { id: nanoid(), path: '/about', text: 'About', type: 'internal' },
  { id: nanoid(), path: '/blog', text: 'Blog', type: 'internal' },
  { id: nanoid(), path: '/contact', text: 'Contact', type: 'internal' }
]
