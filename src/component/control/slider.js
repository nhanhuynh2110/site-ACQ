import React from 'react'
import conf from '../../../config'
const domain = conf.server.domain

class Slider extends React.PureComponent {
  render () {
    const {galleries = []}= this.props
    return (
      <section id='slider'>
        <div className='col-sm-12'>
          <div className='row'>
            <div id='slider-carousel' className='carousel slide' data-ride='carousel'>
              <ol className='carousel-indicators'>
                {galleries.map((el, k) => {
                  return <li key={'key' + el._id} data-target='#slider-carousel' data-slide-to={k} className={k === 0 ? `active` : ''}></li>
                })}
              </ol>
              
              <div className='carousel-inner'>
                {galleries.map((el, k) => {
                  return (
                    <div key={el._id} className={`item ${k === 0 && 'active'}`}>
                      <div className='col-sm-12'>
                        {/* <div className='row'><img src={`${domain}/${el.image}`} className='girl img-responsive' alt='' /></div> */}
                        <div className='row'>
                          <div className='silder-item-img' style={{background: `url('${domain}/${el.image}') center center no-repeat` }}/>
                        </div>
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
        <div className='clearfix' />
      </section>
    )
  }
}

export default Slider
