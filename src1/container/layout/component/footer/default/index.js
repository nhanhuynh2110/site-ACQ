import React from 'react'
import FooterTop from './footerTop'
import FooterInfo from './footeInfo'
import FooterWidget from './footerWidget'
import FooterBottom from './footerBottom'

export default () => {
  return <footer id='footer'>
    <FooterInfo />
    {/* <FooterWidget /> */}
    <FooterBottom />
  </footer>
}
