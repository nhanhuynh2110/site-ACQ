import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routerLink from './routerLink'
import {NotFound} from './index'

import Layout from './layout'

export default () => {
  return <Router>
    <Switch>
      <Layout>
        {routerLink().map(el => <Route {...el} />)}
        {/* <Route component={NotFound} /> */}
      </Layout>

    </Switch>
  </Router>
}
