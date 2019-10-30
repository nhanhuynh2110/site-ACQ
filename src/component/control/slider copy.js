import React from 'react'
import conf from '../../../config'
const domain = conf.server.domain


const block = [
  {
    render: () => {
      return (
        <div className='col-sm-6'>
          <h1><span>E</span>-SHOPPER</h1>
          <h2>Free E-Commerce Template</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button type='button' className='btn btn-default get'>Get it now</button>
        </div>
      )
    }
  },
  {
    render: () => {
      return (
        <div className='col-sm-6'>
          <h1><span>E</span>-SHOPPER</h1>
          <h2>100% Responsive Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button type='button' className='btn btn-default get'>Get it now</button>
        </div>
      )
    }
  },
  {
    render: () => {
      return (
        <div className='col-sm-6'>
          <h1><span>E</span>-SHOPPER</h1>
          <h2>Free Ecommerce Template</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button type='button' className='btn btn-default get'>Get it now</button>
        </div>
      )
    }
  }
]


class Slider extends React.PureComponent {
  render () {
    const {galleries = []}= this.props
    return (
      <section id='slider'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div id='slider-carousel' className='carousel slide' data-ride='carousel'>
                <ol className='carousel-indicators'>
                  {galleries.map((el, k) => {
                    return <li key={'key' + el._id} data-target='#slider-carousel' data-slide-to={k} className={k === 0 ? `active` : ''}></li>
                  })}
                </ol>
                
                <div className='carousel-inner'>
                  {galleries.map((el, k) => {
                    let blockItem = null
                    if (k > 2) blockItem = block[0]
                    else blockItem = block[k]
                    return (
                      <div key={el._id} className={`item ${k === 0 && 'active'}`}>
                        {blockItem.render()}
                        <div className='col-sm-6'>
                          <img src={`${domain}/${el.image}`} className='girl img-responsive' alt='' />
                        </div>
                      </div>
                    )
                  })}
                  
                </div>
                
                <a href='#slider-carousel' className='left control-carousel hidden-xs' data-slide='prev'>
                  <i className='fa fa-angle-left'></i>
                </a>
                <a href='#slider-carousel' className='right control-carousel hidden-xs' data-slide='next'>
                  <i className='fa fa-angle-right'></i>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Slider
