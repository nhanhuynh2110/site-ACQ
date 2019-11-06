import React from 'react'
import {Header1} from '../component/header'
import Footer from '../component/footer'

export default ({children}) => {
  return <React.Fragment>
    <Header1 />
    {children}
    <Footer />
  </React.Fragment>
}
