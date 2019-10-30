import React from 'react'
import _ from 'lodash'
import conf from '../../../config'

const domain = conf.server.domain

export default class TabContent extends React.PureComponent {
  render () {
    const {categories =[], categoryHomeWithProduct = []} = this.props
    return (
      <div className='category-tab'>
        <div className='col-sm-12'>

          <ul className='nav nav-tabs'>
            {categoryHomeWithProduct.map((el, k) => {
              return <li key={el._id} className={k === 0 && 'active'}><a href={`#tab${el._id}`} data-toggle='tab'>{el.title}</a></li>
            })}
          </ul>
        </div>
        <div className='tab-content'>
          {categoryHomeWithProduct.map((el, k) => {
            
            return (
              <div key={el._id} className={`tab-pane fade ${k === 0 && 'active in'}`} id={`tab${el._id}`} >
                {el.products.map(pro => {
                  const proCat = categories.find(c => c._id === pro.categoryId)
                  const catLink = _.get(proCat, 'link')
                  return <div key={pro._id} className='col-sm-3'>
                    <div className='product-image-wrapper'>
                      <div className='single-products'>
                        <div className='productinfo text-center'>
                          <img src={`${domain}/${pro.image}`} alt='' />
                          <h2>${pro.price}</h2>
                          <p>{pro.title}</p>
                          <a href={`/${catLink}/${pro.link}-${pro._id}`} className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart' />View More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                })}
                
              
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}