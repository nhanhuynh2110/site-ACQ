import React from 'react'

class HeaderMiddle extends React.PureComponent {
  constructor (props) {
    super(props)
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.resize = this.resize.bind(this)
    this.onActiveMenu = this.onActiveMenu.bind(this)
    this.onOpen = this.onOpen.bind(this)
    this.state = {
      activeMenu: '',
      isOpen: false
    }
  }

  onActiveMenu (name) {
    if (this.screenWidth <= 767) {
      this.setState({ activeMenu: name === this.state.activeMenu ? '' : name })
    }
  }

  onOpen () {
    if (this.screenWidth <= 767) {
      this.setState({ activeMenu: '', isOpen: !this.state.isOpen })
    }
  }

  resize () {
    this.screenWidth = window.innerWidth
    this.screenHeight= window.innerHeight
  }


  componentDidMount () {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }
  render () {
    
    return (
      <div className='wrap_nav'>
        <span className='icon-mobile' onClick={this.onOpen} />
        <div className='main_nav Module Module-42'>
          <div className='ModuleContent'>
            <ul className={this.state.isOpen ? 'noli topmenu active' : 'noli topmenu'}>
              <li className='prd_li1 active'><a className='active' href='/' target='_self'>TRANG CHỦ</a></li>
              <li className='prd_li2'><a onClick={() => this.onActiveMenu('gioi-thieu')} className='trainsion' target='_self'>GIỚI THIỆU</a>
              <ul className={this.state.activeMenu === 'gioi-thieu' ? 'noli submenu active' : 'noli submenu'}>
                  <li><a className='trainsion' href='gioi-thieu/thong-tin-gsv-1/thong-tin-gsv-1.html' target='_self'>Thông tin GSV</a></li>
                  <li><a className='trainsion' href='gioi-thieu/thong-tin-gsv-1/lich-su-hinh-thanh-phat-trien.html' target='_self'>Lịch sử hình thành-phát triển</a></li>
                  <li><a className='trainsion' href='gioi-thieu/thong-tin-gsv-1/chung-nhan.html' target='_self'>Chứng nhận-Giải thưởng</a></li>
                </ul>
                <span className='arrow-menu' />
              </li>
              <li className='prd_li3'><a className='trainsion' target='_self'>SẢN PHẨM</a>
                <div className='menu_prd_wrap hidden'>
                  <ul className='noli menu_prd'>
                    <li>
                      <a className='trainsion' href='san-pham/ac-quy-xe-may-gs.html' target='_self'>ẮC QUY XE MÁY GS</a>
                      <ul className='noli submenu_prd'>
                        <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/danh-sach-san-pham-5.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />DANH SÁCH SẢN PHẨM</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/ac-quy-mien-bao-dung.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/moto_free-11.png' alt='ẮC QUY MIỄN BẢO DƯỠNG' />ẮC QUY MIỄN BẢO DƯỠNG</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/e-series.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/logomotoeseria.png' alt='ẮC QUY MIỄN BẢO DƯỠNG E-SERIES' />ẮC QUY MIỄN BẢO DƯỠNG E-SERIES</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/ac-quy-xe-may-xuat-khau.html' target='_self'><img src='Data/Sites/1/media/menu_icon/dsc_0018.jpg' alt='ẮC QUY XE MÁY (XUẤT KHẨU)' />ẮC QUY XE MÁY (XUẤT KHẨU)</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className='trainsion' href='san-pham/ac-quy-oto-xe-tai-gs.html' target='_self'>ẮC QUY ÔTÔ GS</a>
                      <ul className='noli submenu_prd'>
                        <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/danh-sach-san-pham-1.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />DANH SÁCH SẢN PHẨM</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-hybrid.html' target='_self'><img src='Data/Sites/1/media/hybrid.png' alt='ẮC QUY HYBRID' />ẮC QUY HYBRID</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-mien-bao-duong-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/07112018/oto_free1.png' alt='ẮC QUY MIỄN BẢO DƯỠNG' />ẮC QUY MIỄN BẢO DƯỠNG</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-acid-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/acquytruyenthong1.jpg' alt='ẮC QUY TRUYỀN THỐNG' />ẮC QUY TRUYỀN THỐNG</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-dan-dung.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/logo_qdd.png' alt='ẮC QUY DÂN DỤNG' />ẮC QUY DÂN DỤNG</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className='trainsion' href='san-pham/ac-quy-cong-nghiep-4.html' target='_self'>ẮC QUY CÔNG NGHIỆP</a>
                      <ul className='noli submenu_prd'>
                        <li><a className='black trainsion' href='san-pham/ac-quy-cong-nghiep-4/thong-tin-ky-thuat.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='Thông tin kỹ thuật' />Thông tin kỹ thuật</a></li>
                        <li><a className='black trainsion' href='san-pham/ac-quy-cong-nghiep-4/ac-quy-xe-nang.html' target='_self'><img src='Data/Sites/1/media/menu_icon/icon-acquyxenang3.png' alt='ẮC QUY XE NÂNG' />ẮC QUY XE NÂNG</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className='clear' />
                </div>
                <span className='arrow-menu' />
              </li>
              <li className='prd_li4'>
                <a onClick={() => this.onActiveMenu('tin-tuc')} className='trainsion' target='_self'>TIN TỨC</a>
                <ul className={this.state.activeMenu === 'tin-tuc' ? 'noli submenu active' : 'noli submenu'}>
                  <li><a className='trainsion' href='tin-tuc/tin-gsv.html' target='_self'>Tin GSV</a></li>
                  <li><a className='trainsion' href='tin-tuc/catalogue-dien-tu.html' target='_self'>Catalogue điện tử</a></li>
                  <li><a className='trainsion' href='tin-tuc/thu-vien-anh.html' target='_self'>Thư viện ảnh</a></li>
                  <li><a className='trainsion' href='tin-tuc/video-clips-1.html' target='_self'>Video clips</a></li>
                  <li><a className='trainsion' href='tin-tuc/tap-chi-noi-bo.html' target='_self'>Tạp chí nội bộ</a></li>
                </ul>
                <span className='arrow-menu'></span>
              </li>
              <li className='prd_li5'>
                <a onClick={() => this.onActiveMenu('dich-vu')} className='trainsion' target='_self'>DỊCH VỤ</a>
                 <ul className={this.state.activeMenu === 'dich-vu' ? 'noli submenu active' : 'noli submenu'}>
                  <li><a className='trainsion' href='dich-vu/dich-vu/thong-tin-ve-ac-quy/chuc-nang-cua-ac-quy.html' target='_self'>Thông tin về ắc quy</a></li>
                  <li><a className='trainsion' href='dich-vu/dich-vu/huong-dan-su-dung/huong-dan-ac-quy-acid.html' target='_self'>Hướng dẫn sử dụng</a></li>
                  <li><a className='trainsion' href='dich-vu/dich-vu/meo-su-dung-ac-quy-2/10-dau-hieu-ac-quy-can-duoc-cham-soc.html' target='_self'>Mẹo sử dụng ắc quy</a></li>
                  <li><a className='trainsion' href='dich-vu/hoi-dap.html' target='_self'>Hỏi đáp</a></li>
                </ul>
                <span className='arrow-menu' />
              </li>
              <li className='prd_li6'>
                <a onClick={() => this.onActiveMenu('tuyen-dung')} className='trainsion' target='_self'>Tuyển dụng</a>
                <ul className={this.state.activeMenu === 'tuyen-dung' ? 'noli submenu active' : 'noli submenu'}>
                  <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/lam-viec-tai-gsv.html' target='_self'>Môi trường làm việc</a></li>
                  <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/che-do-dai-ngo.html' target='_self'>Chế độ đãi ngộ</a></li>
                  <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/dao-tao-va-phat-trien.html' target='_self'>Đào tạo và Phát triển</a></li>
                  <li><a className='trainsion' href='tuyen-dung/danh-sach-tuyen-dung/lam-viec-tai-gsv/co-hoi-nghe-nghiep.html' target='_self'>Cơ hội nghề nghiệp</a></li>
                </ul>
                <span className='arrow-menu' />
              </li>
              <li className='prd_li7'><a className='trainsion' href='/contact' target='_self'>Liên hệ</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderMiddle
