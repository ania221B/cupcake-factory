import { usePageLocation } from '../../hooks'
import { SectionHeader } from '../common'
import TestimonialList from '../lists/TestimonialList'

function TestimonialSection () {
  const path = usePageLocation()
  const isStorePage = path === '/store'
  const isHomePage = path === '/'

  return (
    <section
      className={
        isHomePage
          ? 'testimonials section bg-primary-100'
          : isStorePage
          ? 'testimonials section'
          : 'testimonials section'
      }
    >
      {isStorePage ? (
        <div className='container flow'>
          <SectionHeader title='What our customers think about the confectionery we make'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </SectionHeader>
          <TestimonialList></TestimonialList>
        </div>
      ) : (
        <div className='container flow'>
          <SectionHeader
            title='What our customers think about the confectionery we make'
            titleClasses='text-center char-limit'
          ></SectionHeader>
          <TestimonialList></TestimonialList>
        </div>
      )}
    </section>
  )
}
export default TestimonialSection
