import { Link } from 'react-router-dom'
import { makeCapitalizedText } from '../../utils'

function Breadcrumb ({ items }) {
  return (
    <nav aria-label='Breadcrumb' className='breadcrumb'>
      <ol role='list'>
        {items.map((item, index) => {
          const { label, path } = item
          return (
            <li key={index}>
              {path ? (
                <Link to={path}>{makeCapitalizedText(label)}</Link>
              ) : (
                <span aria-current='page'>{makeCapitalizedText(label)}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
export default Breadcrumb
