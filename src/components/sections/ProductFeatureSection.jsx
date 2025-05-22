import { usePageLocation } from '../../hooks'
import FeatureList from '../lists/FeatureList'

function ProductFeatureSection () {
  const path = usePageLocation()
  const isHomePage = path === '/'
  const isContactPage = path === '/contact'
  const isBlogPage = path === '/blog'
  return (
    <section
      className={
        isHomePage
          ? 'product-features section bg-primary-100 deco deco--separator deco--separator-top deco--separator-bottom deco--separator-short'
          : isContactPage
          ? 'product-features deco deco--line'
          : isBlogPage
          ? 'product-features section deco deco--line'
          : 'product-features section deco deco--separator deco--separator-top deco--separator-bottom deco--separator-short'
      }
    >
      <div className='container'>
        <FeatureList></FeatureList>
      </div>
    </section>
  )
}
export default ProductFeatureSection
