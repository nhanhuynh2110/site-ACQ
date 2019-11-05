import React from 'react'
import PanelGroup from './panelGroup'
import BrandsProducts from './brandsProducts'
import PriceRange from './priceRange'
import Shipping from './shipping'

class LeftSideBar extends React.PureComponent {
  render () {
    const {categories = []} = this.props
    return (
      <div className='left-sidebar'>
        <h2>Danh Mục Bài Viết</h2>
        <PanelGroup categories={categories || []}/>
        {/* <BrandsProducts />
        <PriceRange /> */}
        <Shipping />
        <Shipping />
      </div>
    )
  }
}

export default LeftSideBar
