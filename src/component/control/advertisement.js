import React from 'react'
import _ from 'lodash'
import conf from '../../../config'

const domain = conf.server.domain

export default class Advertisement extends React.PureComponent {
  render () {
    const category = this.props.category
    const imgUrl = _.get(category, 'img')
    const img = domain + '/' + imgUrl
    
    return (
      <section id='advertisement' className='category-info'>
        <div className='container-info'>
          <div className='wrapper-img'>
            <div className='container'>
              <img src={img} alt='' />
            </div>
          </div>
          <div className='info'>
            <div className='container'>
            
              <h2>{category && category.title}</h2>
              <span className='display-block'><a>Home</a>/<a>{category && category.title}</a></span>
            </div>
          </div>
          
        </div>
        
        {/* <div className='container category-info'> */}
          {/* <div className='row'>
            <div className='col-md-6'>
              <div className='category-info'>
                <h1>{category && category.title}</h1>
              </div>
            </div>
            <div className='col-md-6'><img src={img} alt='' /></div>
          </div> */}
           
          {/* <div className='category-info'>
            <div className='info'>
              <h2>{category && category.title}</h2>
              <span><a>Home</a>/<a>{category && category.title}</a></span>
            </div>
            <div className='img'><img src={img} alt='' /></div>
          </div> */}
        {/* </div> */}
      </section>
    )
  }
}
