import { testimonials } from '../../data'

function TestimonialList () {
  return (
    <ul
      className='testimonial-list margin-block-start-64 padding-0'
      role='list'
    >
      {testimonials.map(testimonial => {
        const { id, userName, quoteText, userImg, imgTitle } = testimonial
        return (
          <li key={id} className='testimonial-list__item'>
            <img src={userImg} alt={userName} title={imgTitle} />
            <blockquote className='flow'>
              <p className='fw-600'>{quoteText}</p>
              <p>{userName}</p>
            </blockquote>
          </li>
        )
      })}
    </ul>
  )
}
export default TestimonialList
