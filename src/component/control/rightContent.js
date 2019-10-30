import React from 'react'
import FeatureItems from './featureItems'
import TabContent from './tabContent'
import RecommendedItems from './recommendedItems'

export default class RigthContent extends React.PureComponent {
  render () {
    const {categories = [], productsNew = [], productsHot = [], categoryHomeWithProduct = []} = this.props
    return (
      <>
        <FeatureItems categories={categories || []} products={productsNew} />
        <TabContent categories={categories || []} categoryHomeWithProduct={categoryHomeWithProduct || []}/>
        <RecommendedItems categories={categories || []} productsHot={productsHot} />
      </>
    )
  }
}