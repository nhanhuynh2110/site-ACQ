import React from 'react'
import utils from '../../../util'
import conf from '../../../../config'
import { withContainer } from '../../../context'
import Advertisement from '../../../component/control/advertisement'
import LeftSideBar from '../../../component/control/leftSideBar'

const domain = conf.server.domain

class Blog extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      catId: null,
      category: null,
      nav: [],
      postlink: null,
      data: null,
      mainImg: ''
    }
    this.blockItems = this.blockItems.bind(this)
    this.createMarkup = this.createMarkup.bind(this)
    this.changeMainImg = this.changeMainImg.bind(this)
  }

  createMarkup (html) {
    return { __html: html }
  }

  changeMainImg (e) {
    const img = e.target.getAttribute('data-img')
    this.setState({mainImg: img})
  }

  componentDidMount () {
    this.getDetail()
  }

  componentDidUpdate () {
    if (this.props.catId !== this.state.catId || this.props.postlink !== this.state.postlink) {
      // this.getDetail()
    }
  }

  getDetail () {
    let {catId, postlink} = this.props
    const arr = postlink.split('-')
    const postId = arr[arr.length - 1]
    this.props.api.detailBlog.get({id: postId}, (err, data) => {
      if (err) return
      this.setState({
        catId: catId,
        category: data.category,
        nav: data.categories,
        postlink: postlink,
        data: data.post,
        mainImg: data.post.image
      })
    })
  }

  blockItems (key, items, active) {
    return (
      <div key={key} className={`item ${active}`}>
        {items}
      </div>
    )
  }

  render() {
    const {data, mainImg} = this.state
    const info = data
    const {categoryBlog} = this.props
    return (
      <section>
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-9"> */}
              
              <div className="blog-post-area">
                <h2 className="title text-center">{categoryBlog && categoryBlog.title}</h2>
                <div className="single-blog-post">
                  <h3>{info && info.title}</h3>
                  <div className="post-meta">
                    <ul>
                      {/* <li><i className="fa fa-user"></i> Mac Doe</li> */}
                      <li><i className="fa fa-clock-o"></i> {info && (new Date(info.createDate)).toLocaleString('en-EN', {timeStyle: 'short', hour12: true})}</li>
                      <li><i className="fa fa-calendar"></i>{info && (new Date(info.createDate)).toLocaleString('vi-VN', {dateStyle: 'medium'})}</li>
                    </ul>
                    <span>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </span>
                  </div>
                  <a href="">
                    <img src={`${domain}/${mainImg && mainImg}`}alt="" />
                  </a>
                  <div>
                    {info && info.description}
                  </div>
                  <br />
                  <br />
                  <div>
                    {info && <div dangerouslySetInnerHTML={{__html: info.content}}></div>}
                  </div>
                </div>
              </div>

            {/* </div>	
          </div>
        </div> */}
      </section>
    )
  }
}

class Wrapper extends React.PureComponent {
  render () {
    const {categories, categoryBlogs} = this.props
    let categoryBlog = null
    let nav = []
    let {catId, postlink} = this.props.match.params

    if (categoryBlogs && categoryBlogs.length > 0) {
      categoryBlog = categoryBlogs.find(el => el.link === catId)
      if (!categoryBlog) return null
      const parentId = categoryBlog.parentId ? categoryBlog.parentId : categoryBlog._id
      nav = categoryBlogs.filter(el => el.parentId === parentId)
    }
    return (
      <>
        <Advertisement category={categoryBlog} prefix='/bai-viet' />
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3'>
                <LeftSideBar categories={categories || []} categoryBlogs={categoryBlogs || []} />
              </div>

              <div className='col-sm-9'>
                <Blog categoryBlog={categoryBlog} api={this.props.api} catId={catId} nav={nav} postlink={postlink} />
                {/* <Detail api={this.props.api} catId={catId} categories={this.props.categories} category={category} nav={nav} postlink={postlink} /> */}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withContainer(Wrapper, (c, props) => ({
  api: c.api,
  categories: c.data.categories,
  categoryBlogs: c.data.categoryBlogs
}))