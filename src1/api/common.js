import API from './api'
import _ from 'lodash'
export default class Common extends API {
  common (payload = {}) { return super.get(super.basAPI(), {...payload, api: super.apiPrefix('all')}) }
}
