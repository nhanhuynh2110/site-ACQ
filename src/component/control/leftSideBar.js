import React from 'react'
import PanelGroup from './panelGroup'
import BrandsProducts from './brandsProducts'
import PriceRange from './priceRange'
import Shipping from './shipping'

class LeftSideBar extends React.PureComponent {
  render () {
    const {categories = [], categoryBlogs = [], isProduct} = this.props
    return <>
      <div className='left-sidebar'>
        {isProduct
          ? <>
            <PanelGroup categories={categories || []} title='san pham' prefix='/san-pham' />
            <PanelGroup categories={categoryBlogs || []}  title='Bai viet' prefix='/bai-viet' />
          </>
          : <>
            <PanelGroup categories={categoryBlogs || []}  title='Bai viet' prefix='/bai-viet' />
            <PanelGroup categories={categories || []} title='san pham' prefix='/san-pham' />
          </>
        }
        
        {/* <BrandsProducts />
        <PriceRange /> */}
        {/* <Shipping /> */}
        <Shipping />
      </div>
    </>
  }
}

export default LeftSideBar
