import React from 'react'
import _ from 'lodash'
import conf from '../../../config'

const domain = conf.server.domain

export default class Advertisement extends React.PureComponent {
  render () {
    console.log('category', this.props.category)
    const imgUrl = _.get(this.props.category, 'img')
    const img = domain + '/' + imgUrl
    return (
      <section id='advertisement'>
        <div className='container'>
          <img src={img} alt='' />
        </div>
      </section>
    )
  }
}
