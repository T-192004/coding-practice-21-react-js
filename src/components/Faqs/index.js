// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  state = {displayAnsList: []}

  updateDisplayAnsList = id => {
    const {displayAnsList} = this.state
    if (displayAnsList.includes(id)) {
      const indexOfId = displayAnsList.indexOf(id)
      this.setState({displayAnsList: displayAnsList.splice(indexOfId, 0)})
    } else {
      this.setState(prevState => ({
        displayAnsList: [...prevState.displayAnsList, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {displayAnsList} = this.state
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faqs-title">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                eachFaq={eachFaq}
                key={eachFaq.id}
                updateDisplayAnsList={this.updateDisplayAnsList}
                displayAnsList={displayAnsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
