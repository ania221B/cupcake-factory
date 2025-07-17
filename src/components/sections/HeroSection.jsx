import { useGlobalContext } from '../../context'
import { usePageLocation } from '../../hooks'
import HeroImage from '../ui/HeroImage'

function HeroSection ({ title, children, additionalContent = false, image }) {
  const { headerHeight } = useGlobalContext()
  const path = usePageLocation()
  const isHomePage = path === '/'
  return (
    <section
      className='hero section deco deco--colored-bg'
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className={children ? 'container even-columns' : 'container'}>
        <div className='flow'>
          <header className='hero__header deco deco--line deco--line-left'>
            {isHomePage ? (
              <h2 className='page-title'>{title}</h2>
            ) : (
              <h1 className='page-title'>{title}</h1>
            )}
          </header>
          {children}
        </div>
        {additionalContent && image.fallback && (
          <div>
            <HeroImage image={image} imgClass='hero__img'></HeroImage>
          </div>
        )}
      </div>
    </section>
  )
}
export default HeroSection
