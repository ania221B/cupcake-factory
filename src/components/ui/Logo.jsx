import { Link } from 'react-router-dom'

function Logo ({ elementType = 'div' }) {
  const Tag = elementType

  return (
    <Tag className='logo'>
      <Link to='/' className='logo__link clr-neutral-500'>
        CupcakeFactory
      </Link>
    </Tag>
  )
}
export default Logo
