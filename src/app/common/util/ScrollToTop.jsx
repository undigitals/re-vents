// this class component helps react router dom to get update if smth changes in the dom
// other wise when you access some page it would show the part of the page last time you left

import { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps){
      if(this.props.location !== prevProps.location){
          window.scrollTo(0, 0)
      }
  }
  
  render() {
    return (
        this.props.children
    )
  }
}

export default withRouter(ScrollToTop);
