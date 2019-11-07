import conf from '../conf/public'
const loadImage = (uri) => conf.domain + '/' + uri

const formatPrice = (price) => price ? (new Number(price)).toLocaleString('vi-VN', { style: 'currency', currency: 'vnd' }) : ''

const formatDate = (date) => (new Date(date)).toLocaleString('vi-VN', { dateStyle: 'medium' })

const formatTime = (dateTime, hour12 = false) => (new Date(dateTime)).toLocaleString('en-EN', { timeZone: 'UTC', timeStyle: 'short', hour12 })

export {
  loadImage,
  formatPrice,
  formatDate,
  formatTime
}
