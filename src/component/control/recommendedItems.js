import React from 'react'
import conf from '../../../config'

const domain = conf.server.domain

export default class RecommendedItems extends React.PureComponent {
  blockItems (key, items, active = '') {
    return <div key={key} className={`item ${active}`}>
      {items}
    </div>
  }

  renderBlockComponent (item, catLink) {
    return <div key={item._id} className='col-sm-4'>
      <div className='product-image-wrapper'>
        <div className='single-products'>
          <div className='productinfo text-center'>
            <img src={`${domain}/${item.image}`} alt='' />
            <h2>{item.price ? new Number(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'vnd' }) : ''}</h2>
            <p>{item.title}</p>
            <a href={`/san-pham/${catLink}/${item.link}`} className='btn btn-default add-to-cart'><i className='fa fa-shopping-cart'></i>View More</a>
          </div>

        </div>
      </div>
    </div>
  }

  render () {
    const {productsHot = [], categories = []} = this.props

    let items = {}
    productsHot.forEach((el, k) => {
      const cat = categories.find(cat => cat._id === el.categoryId)
      const catLink = _.get(cat, 'link')
      const number = k + 1
      const keyItems = 'key-' + Math.ceil(number / 3)
      if (keyItems in items) {
        items[keyItems].push(this.renderBlockComponent(el, catLink))
      } else {
        items[keyItems] = []
        items[keyItems].push(this.renderBlockComponent(el, catLink))
      }
    })
    return (
      <div className='recommended_items'>
        <h2 className='title text-center'>Sản Phẩm HOT</h2>
        <div id='recommended-item-carousel' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner'>
            {Object.keys(items).map((el, k) => this.blockItems('recommended-' + el, items[el], k === 0 ? 'active' : ''))}
          </div>
          <a className='left recommended-item-control' href='#recommended-item-carousel' data-slide='prev'>
            <i className='fa fa-angle-left' />
          </a>
          <a className='right recommended-item-control' href='#recommended-item-carousel' data-slide='next'>
            <i className='fa fa-angle-right' />
          </a>
        </div>
      </div>
    )
  }
}
