import React from 'react'
import conf from '../../../config'
import Paging from './paging'
const domain = conf.server.domain

export default class FeatureItems extends React.PureComponent {
  render () {
    const {categories = [], post, page, isPaging, pageSize, total, onChangePaging} = this.props
    return (
      <div class="blog-post-area">
        <h2 class="title text-center">Latest From our Blog</h2>
        <div class="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div class="post-meta">
            <ul>
              <li><i class="fa fa-user"></i> Mac Doe</li>
              <li><i class="fa fa-clock-o"></i> 1:33 pm</li>
              <li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
            </ul>
            <span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
            </span>
          </div>
          <a href="">
            <img src="/images/blog/blog-one.jpg" alt="" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <a  class="btn btn-primary" href="">Read More</a>
        </div>
      </div>
    )
  }
}