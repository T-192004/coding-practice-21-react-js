// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq, updateDisplayAnsList, displayAnsList} = props
  const {id, questionText, answerText} = eachFaq
  const showAns = displayAnsList.includes(id) ? 'showAns' : ''
  const displayAnsIcon = displayAnsList.includes(id)
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const displayAnsAltText = displayAnsList.includes(id) ? 'minus' : 'plus'
  const onClickUpdateAnsList = () => {
    updateDisplayAnsList(id)
  }
  return (
    <li className="faq-item-box">
      <div className="faq-ques-box">
        <h1 className="faq-ques">{questionText}</h1>
        <button
          className="faq-display-ans-btn"
          type="button"
          onClick={onClickUpdateAnsList}
        >
          <img
            className="display-ans-icon"
            src={displayAnsIcon}
            alt={displayAnsAltText}
          />
        </button>
      </div>
      {showAns && (
        <>
          <hr className="line" />
          <p className="faq-ans">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
