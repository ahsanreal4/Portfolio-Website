import { Question } from 'models/Question'
import { NextPage } from 'next'

import { IFAQProps } from './FAQ.types'

const FAQ: NextPage<IFAQProps> = ({ questions }) => {
  const questionClicked = (e: any) => {
    const parent = e.target.parentElement
    const grandParent = parent.parentElement.parentElement.childNodes
    const div = grandParent[1]

    const svg = e.target.childNodes[0]
    if (svg.getAttribute('data-icon') === 'chevron-up') {
      svg.setAttribute('data-icon', 'chevron-down')
    } else {
      svg.setAttribute('data-icon', 'chevron-up')
    }
    const classList: any[] = div.classList

    if (classList[2] === 'show') {
      div.classList.remove('show')
    } else {
      div.classList.add('show')
    }
  }

  const renderQuestion = (question: Question, index: number) => (
    <div key={index} className='card border-0 mb-3'>
      <div className='card-header border-0 p-3 theme-bg-light'>
        <h4 className='card-title mb-0'>
          <a
            data-parent='#faq-accordion'
            data-toggle='collapse'
            className='card-toggle collapsed'
            href={`#faq${index + 1}`}
            aria-expanded='false'
            onClick={(e: any) => questionClicked(e)}
          >
            <i className='fas fa-chevron-down' />
            {question.question}
          </a>
        </h4>
      </div>
      <div className='card-collapse collapse' id={`faq${index + 1}`}>
        <div className='card-body pt-0 theme-bg-light'>{question.answer}</div>
        {/*//card-body*/}
      </div>
    </div>
  )

  return (
    <section className='faq-section'>
      <div className='container single-col-max-width'>
        <h3 className='text-center mb-4'>FAQs</h3>
        <div className='text-center mb-5'>
          You can use this section to address any queries your potential clients
          may have.
        </div>
        <div id='faq-accordion' className='faq-accordion mx-auto'>
          {questions.map((question: Question, index: number) =>
            renderQuestion(question, index)
          )}
          {/*//card*/}
        </div>
        {/*//faq-accordion*/}
      </div>
      {/*//container*/}
    </section>
  )
}

export default FAQ
