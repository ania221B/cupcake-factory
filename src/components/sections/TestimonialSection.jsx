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
              We pour our heart into every dessert—and our customers feel it.
              Here’s what they’re saying about the confections that keep them
              coming back.
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
