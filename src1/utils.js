import conf from '../conf/public'
const loadImage = (uri) => {
  return conf.domain + '/' + uri
}

export {
  loadImage
}
