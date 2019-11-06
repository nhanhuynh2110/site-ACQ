import Category from './category'
import Home from './home'
import List from './list'
import Detail from './detail'
import ListBlog from './listBlog'
import DetailBlog from './blog'

export default () => {
  return {
    category: new Category(),
    home: new Home(),
    list: new List(),
    detail: new Detail(),
    listBlog: new ListBlog(),
    detailBlog: new DetailBlog()
  }
}
