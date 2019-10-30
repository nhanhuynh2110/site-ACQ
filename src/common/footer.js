import React from 'react'

import FooterTop from './footerTop'
import FooterWidget from './footerWidget'
import FooterBottom from './footerBottom'

class Footer extends React.PureComponent {
  render () {
    return (
      <footer id='footer'>
        <FooterTop />
        <FooterWidget />
        <FooterBottom />
      </footer>
    )
  }
}

export default Footer
