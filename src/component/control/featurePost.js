import React from 'react'
import conf from '../../../config'
import Paging from './paging'
const domain = conf.server.domain

export default class FeatureBlog extends React.PureComponent {
  render () {
    const {categoryBlog = null, posts = [], page, isPaging, pageSize, total, onChangePaging} = this.props
    return <>
      <div  className='blog-post-area'>
        <h2 className='title text-center'>{categoryBlog && categoryBlog.title }</h2>
        {posts.map(el => {
          return <div key={`post-${el._id}`} className='single-blog-post'>
              <h3>{el.introTitle}</h3>
              <div className='post-meta'>
                <ul>
                  <li><i className='fa fa-user'></i> Mac Doe</li>
                  <li><i className='fa fa-clock-o'></i> 1:33 pm</li>
                  <li><i className='fa fa-calendar'></i> DEC 5, 2013</li>
                </ul>
                <span>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half-o'></i>
                </span>
              </div>
              <a href=''>
                <img src={`${domain}/${el.image}`} alt='' />
              </a>
              <p>{el.description}</p>
              <a  className='btn btn-primary' href={`/bai-viet/${categoryBlog && categoryBlog.link}/${el._id}`}>Read More</a>
            </div>
          
        })}

      </div>
      <br />
      {isPaging && total > 0 && <div><Paging page={page} total={total} pageSize={pageSize} changePage={onChangePaging} /></div>}
    </>
  }
}