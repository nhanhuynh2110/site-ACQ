import React from 'react'
import _ from 'lodash'
import {subscribe} from 'react-hooks-usemodel'
import {ContactForm} from '../../form'

const Contact = ({data}) => {
  const contactInfo = _.get(data, 'contactInfo')
  return <div id='contact-page' className='container'>
    <br />
    <br />
    <br />
    <br />
    <div className='bg'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2 className='title text-center'>Contact <strong>Us</strong></h2>
          <div id='gmap' className='contact-map' />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8'>
          <div className='contact-form'>
            <h2 className='title text-center'>Get In Touch</h2>
            <div className='status alert alert-success hidden' />
            <ContactForm />
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='contact-info'>
            <h2 className='title text-center'>Contact Info</h2>
            <address>
              <p>{contactInfo && contactInfo.name}</p>
              <p>{contactInfo && contactInfo.address}</p>
              <p>Mobile: {contactInfo && contactInfo.phone}</p>
              <p>Fax: {contactInfo && contactInfo.fax}</p>
              <p>Email: {contactInfo && contactInfo.email}</p>
            </address>
            <div className='social-networks'>
              <h2 className='title text-center'>Social Networking</h2>
              <ul>
                <li>
                  <a href={contactInfo && contactInfo.fb} target='_blank'><i className='fa fa-facebook' /></a>
                </li>
                <li>
                  <a href={contactInfo && contactInfo.twitter} target='_blank'><i className='fa fa-twitter' /></a>
                </li>
                <li>
                  <a href={contactInfo && contactInfo.google} target='_blank'><i className='fa fa-google-plus' /></a>
                </li>
                <li>
                  <a href={contactInfo && contactInfo.youtube} target='_blank'><i className='fa fa-youtube' /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default subscribe({ contactInfo: null })(Contact)
