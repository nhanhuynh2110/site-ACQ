import React from 'react'

import Info from './info'
import HeaderLogo from './logo'
import HeaderMenu from './menu'

import HeaderTop from './headerTop'
import HeaderMiddle from './headerMiddle'
import HeaderBottom from './headerBottom'

class Headers extends React.PureComponent {
  render () {
    return (
    <>
      <header className='header1'>
		    <div className='container'>
          <div className='row'>
            <div className='col-sm-2 col-md-4 logo'>
              <div className='sitelogo Module'><a href='index.html'><img className='logo' alt='' src='/images/gsv-logo-vi.png' /></a></div>
            </div>
            <div className='col-sm-10 col-md-8 header_right'>
              <div className='header_top_r'>
                <div id='ctl00_SearchInput1_pnlSearch' className='search' siteroot='http://www.gsbattery.vn'>
                  <input name='ctl00$SearchInput1$txtSearch' type='text' placeholder='Tìm Kiếm' title='Tìm kiếm' className='searchinput' />
                  <input type='submit' name='ctl00$SearchInput1$btnSearch' value='Tìm kiếm' id='ctl00_SearchInput1_btnSearch' className='searchbutton' />
                </div>
                <div className='socical Module Module-135'>
                  <div className='ModuleContent'>
                    <a target='_blank' href='https://www.facebook.com/gsbatteryvn'><em className='fa fa-facebook-square'></em></a>
                    <a href='#'><em className='fa fa-twitter'></em></a>
                    <a target='_blank' href='https://www.youtube.com/channel/UCBrmXp98bM0BTSmI4eO0zrg'><em className='fa fa-youtube'></em></a>
                  </div>
                </div>
                <a className='lang' href='en-US/Default.html' title='English'><img src='/images/us.gif' alt='English' /></a>
              </div>
              <HeaderMiddle />
            </div>
          </div>
          <div className='clear' />
        </div>
      </header>
        
      {/* <header id='header'>
        <HeaderTop />
        
        <HeaderBottom />
      </header> */}
      {/* <Info />
      <HeaderLogo />
      <HeaderMenu categories={this.props.categories}/> */}
    </>
    )
  }
}

export default Headers
