import { useRef, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'

function AccordionPanel ({ id, item }) {
  const { question, answer } = item
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const panelRef = useRef(null)

  function togglePanel () {
    const panel = panelRef.current
    if (!panel) return

    const scrollHeight = panel.scrollHeight
    panel.style.setProperty(
      '--accordion-max-height',
      isPanelOpen ? '0px' : `${scrollHeight}px`
    )
    setIsPanelOpen(!isPanelOpen)
  }
  return (
    <article
      className='accordion__panel'
      data-state={isPanelOpen ? 'opened' : 'closed'}
    >
      <h3 className='accordion__title'>
        <button
          type='button'
          aria-label={`Show or hide 
            answer to ${question} question`}
          aria-controls={`accordion__content-${id}`}
          aria-expanded={isPanelOpen}
          className='btn accordion__btn'
          onClick={togglePanel}
        >
          <span> {question}</span>
          <span>
            <FaAngleUp className='accordion__toggle'></FaAngleUp>
          </span>
        </button>
      </h3>
      <div
        ref={panelRef}
        id={`accordion__content-${id}`}
        className='accordion__content'
        aria-hidden={isPanelOpen ? false : true}
      >
        <div>
          <p className='accordion__text'>{answer}</p>
        </div>
      </div>
    </article>
  )
}
export default AccordionPanel
