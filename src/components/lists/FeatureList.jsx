import { productFeatures } from '../../data'

function FeatureList () {
  return (
    <ul className='features grid-auto-fit padding-0' role='list'>
      {productFeatures.map(feature => {
        const { id, title, description } = feature
        return (
          <li key={id} className='feature flow'>
            <h3 className='ff-secondary fs-600'>{title}</h3>
            <p className='fs-400'>{description}</p>
          </li>
        )
      })}
    </ul>
  )
}
export default FeatureList
