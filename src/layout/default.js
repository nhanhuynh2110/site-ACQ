import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { withContainer } from '../context'

class DefaultLayout extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      categoriesProduct: [],
      post: []
    }
  }

  componentDidMount () {
    this.props.api.home.menu({}, (err, data) => {
      if (err) return null
      this.props.data.setCategories(data.menu)
      this.setState({categories: data.menu, categoriesProduct: data.menu, post: data.post})
    })
  }

  render () {
    const {categories, categoriesProduct, post} = this.state
    return (
      <React.Fragment>
        <Header categories={categories} categoriesProduct={categoriesProduct} post={post} />
        {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
}

export default withContainer(React.memo(DefaultLayout), (c, props) => ({
  api: c.api,
  data: c.data
}))
