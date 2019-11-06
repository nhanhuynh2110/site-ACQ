import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '../layout/default'
import { withContainer } from '../context'
import { Home, List, Detail, Contact, ListBlog, Blog } from './page'

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/san-pham/:catId' component={List} />
              <Route path='/san-pham/:catId/:postlink' component={Detail} />
              <Route exact path='/bai-viet/:catId' component={ListBlog} />
              <Route exact path='/bai-viet/:catId/:postlink' component={Blog} />
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    )
  }
}

export default withContainer(App, (c) => ({}))
