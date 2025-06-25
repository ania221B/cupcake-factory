import { nanoid } from 'nanoid'
import { faqData } from '../../data/faqData'
import AccordionPanel from './AccordionPanel'
import SectionHeader from './SectionHeader'
import { makeHyphenatedLowerCase } from '../../utils'

function Accordion () {
  return (
    <>
      {faqData.map(section => {
        const { sectionTitle, items } = section
        return (
          <section
            className='accordion'
            id={makeHyphenatedLowerCase(sectionTitle)}
          >
            <SectionHeader title={sectionTitle}></SectionHeader>
            <ul className='accordion__list' role='list'>
              {items.map(item => {
                const id = nanoid()
                return (
                  <li key={id}>
                    <AccordionPanel item={item} id={id}></AccordionPanel>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </>
  )
}
export default Accordion
