import React from 'react'
import {subscribe} from 'react-hooks-usemodel'
import Slider from '../../component/silder/default'

const Home = (props) => {
  return <React.Fragment>
    <Slider />
  </React.Fragment>
}

export default subscribe({ category: null })(Home)
