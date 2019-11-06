import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routerLink from './routerLink'

import Layout from './layout/index'

export default () => {
  return <Router>
    <Layout>
      <Switch>{routerLink().map(el => <Route {...el} />)}</Switch>
    </Layout>
  </Router>
}
