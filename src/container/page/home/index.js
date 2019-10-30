import React from 'react'

import Slider from '../../../component/control/slider'
import LeftSideBar from '../../../component/control/leftSideBar'
import RigthContent from '../../../component/control/rightContent'
import HomeProduct from '../../../component/control/homeProduct'
import HomeCategory from '../../../component/control/homeCategory'
import { withContainer } from '../../../context'

class HomePage extends React.PureComponent {
  componentDidMount () {
    this.props.api.home.get()
  }

  render () {
    let categoriesIsHome = []
    let {categories, galleries, productsNew, productsHot, categoryHomeWithProduct} = this.props
    if (categories) categoriesIsHome = categories.filter(cat => cat.isHome === true)
    if (!galleries) galleries = []
    return (
      <>
        <Slider galleries={galleries}/>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3'>
                <LeftSideBar categories={categories} />
              </div>

              <div className='col-sm-9'>
                <RigthContent categoryHomeWithProduct={categoryHomeWithProduct || []} categories={categories || []} productsNew={productsNew} productsHot={productsHot} />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withContainer(HomePage, (c, props) => ({
  api: c.api,
  galleries: c.data.galleries || [],
  categories: c.data.categories || [],
  productsNew: c.data.productsNew || [],
  productsHot: c.data.productsHot || [],
  categoryHomeWithProduct: c.data.categoryHomeWithProduct || []
}))
