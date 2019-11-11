import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'

const info = {
  color: '#696763',
  fontSize: '16px',
  lineHeight: '25px',
  marginTop: '57px'
}
const FooterInfo = ({data}) => {
  const contactInfo = _.get(data, 'contactInfo')
  return <div className='footer-top'>
    <div className='container'>
      <div className='row'>
        
        <div className='col-sm-4'>
          <div className='row' style={info}>
            <h2 className="title" style={{marginBottom: '25px'}}>Contact Info</h2>
            <address style={{margin: '0 15px'}}>
              <p>ĐỊA CHỈ: {contactInfo && contactInfo.address}</p>
              <p>HOTLINE: {contactInfo && contactInfo.phone}</p>
              <p>FAX:  {contactInfo && contactInfo.fax}</p>
              <p>EMAIL: {contactInfo && contactInfo.email}</p>
              {/* <p>Shopper</p><p>82 đường số 1, f16, gò vấp</p><p>Mobile: 0945002474</p><p>Fax: 321312</p><p>Email: phumanong@gmail.com</p> */}
            </address>
          </div>
        </div>
        <div className='col-sm-2'>
          <div className='companyinfo'>
            <h2><span>e</span>-shopper</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
          </div>
        </div>
        <div className='col-sm-3 social-networks' style={{marginTop: '57px'}}>
          <h2 className="title text-center">Social Networking</h2>
          <ul>
            <li><a target='_blank' href={contactInfo && contactInfo.fb}><i className="fa fa-facebook"></i></a>
            </li><li><a target='_blank' href={contactInfo && contactInfo.twitter}><i className="fa fa-twitter"></i></a></li>
            <li><a target='_blank' href={contactInfo && contactInfo.google}><i className="fa fa-google-plus"></i></a></li>
            <li><a target='_blank' href={contactInfo && contactInfo.youtube}><i className="fa fa-youtube"></i></a></li></ul>
        </div>
        <div className='col-sm-3'>
          <div className='address'>
            <img src='/images/home/map.png' alt='' />
            <p> {contactInfo && contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default subscribe({ contactInfo: null })(FooterInfo)
