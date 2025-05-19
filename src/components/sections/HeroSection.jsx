import { useGlobalContext } from '../../context'
// import { usePageLocation } from '../../hooks'
import HeroImage from '../ui/HeroImage'

function HeroSection ({ title, children, additionalContent = false, image }) {
  const { headerHeight } = useGlobalContext()
  // const path = usePageLocation()
  // const isHomePage = path === '/'
  return (
    <section
      className='hero section deco deco--colored-bg'
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className={children ? 'container even-columns' : 'container'}>
        <div className='flow'>
          <header className='hero__header xl-padding deco deco--line deco--line-left'>
            <h1 className='page-title'>{title}</h1>
          </header>
          {children}
        </div>
        {additionalContent && image.src && (
          <div className='secondary-content'>
            <HeroImage
              imgSrc={image.src}
              imgAlt={image.alt}
              imgTitle={image.title}
            ></HeroImage>
          </div>
        )}
      </div>
    </section>
  )
}
export default HeroSection
