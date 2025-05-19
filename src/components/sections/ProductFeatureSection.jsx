import FeatureList from '../lists/FeatureList'

function ProductFeatureSection () {
  return (
    <section
      className='product-features section bg-primary-100 deco deco--separator deco--separator-top
            deco--separator-bottom
            deco--separator-short'
    >
      <div className='container'>
        <FeatureList></FeatureList>
      </div>
    </section>
  )
}
export default ProductFeatureSection
