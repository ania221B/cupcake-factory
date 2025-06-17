import { Accordion } from '../components/common'
import { HeroSection } from '../components/sections'

function Faq () {
  return (
    <>
      <HeroSection title='Frequently Asked Questions'></HeroSection>
      <section className='section'>
        <div className='container' data-container='x-small'>
          <Accordion></Accordion>
        </div>
      </section>
    </>
  )
}
export default Faq
