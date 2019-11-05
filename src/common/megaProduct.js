import React from 'react'

export default ({groups = []}) => {
  const parent = groups.filter(p => !p.parentId)
  console.log('parent', parent)

  return <div className='container'>
    <ul className='noli menu_prd'>
      {parent.map(p => {
        const childs = groups.filter(i => i.parentId === p._id)
        return <li key={p._id}>
          <a className='trainsions' href={`/san-pham/${p.link}`} target='_self'>
            <strong>{p.title}</strong>
          </a>
          {childs.length > 0 && <ul key={`child-${p._id}`} className='noli submenu_prd'>
            {childs.map(el => {
              return <li key={`children-${el._id}`}><a className='black trainsion' href={`/san-pham/${el.link}`} target='_self'>
                <img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />{el.title}</a>
              </li>
            })}
          </ul>}
        </li>
      })}

      {/* <li>
        <a className='trainsions' href='san-pham/ac-quy-xe-may-gs.html' target='_self'><strong>ẮC QUY XE MÁY GS</strong></a>
        <ul className='noli submenu_prd'>
          <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/danh-sach-san-pham-5.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />DANH SÁCH SẢN PHẨM</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/ac-quy-mien-bao-dung.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/moto_free-11.png' alt='ẮC QUY MIỄN BẢO DƯỠNG' />ẮC QUY MIỄN BẢO DƯỠNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/e-series.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/logomotoeseria.png' alt='ẮC QUY MIỄN BẢO DƯỠNG E-SERIES' />ẮC QUY MIỄN BẢO DƯỠNG E-SERIES</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-xe-may-gs/ac-quy-xe-may-xuat-khau.html' target='_self'><img src='Data/Sites/1/media/menu_icon/dsc_0018.jpg' alt='ẮC QUY XE MÁY (XUẤT KHẨU)' />ẮC QUY XE MÁY (XUẤT KHẨU)</a></li>
        </ul>
      </li>
      <li>
        <a className='trainsion' href='san-pham/ac-quy-oto-xe-tai-gs.html' target='_self'><strong>ẮC QUY ÔTÔ GS</strong></a>
        <ul className='noli submenu_prd'>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/danh-sach-san-pham-1.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />DANH SÁCH SẢN PHẨM</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-hybrid.html' target='_self'><img src='Data/Sites/1/media/hybrid.png' alt='ẮC QUY HYBRID' />ẮC QUY HYBRID</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-mien-bao-duong-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/07112018/oto_free1.png' alt='ẮC QUY MIỄN BẢO DƯỠNG' />ẮC QUY MIỄN BẢO DƯỠNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-acid-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/acquytruyenthong1.jpg' alt='ẮC QUY TRUYỀN THỐNG' />ẮC QUY TRUYỀN THỐNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-dan-dung.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/logo_qdd.png' alt='ẮC QUY DÂN DỤNG' />ẮC QUY DÂN DỤNG</a></li>
        </ul>
      </li>
      <li>
        <a className='trainsion' href='san-pham/ac-quy-oto-xe-tai-gs.html' target='_self'><strong>ẮC QUY ÔTÔ GS</strong></a>
        <ul className='noli submenu_prd'>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/danh-sach-san-pham-1.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />DANH SÁCH SẢN PHẨM</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-hybrid.html' target='_self'><img src='Data/Sites/1/media/hybrid.png' alt='ẮC QUY HYBRID' />ẮC QUY HYBRID</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-mien-bao-duong-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/07112018/oto_free1.png' alt='ẮC QUY MIỄN BẢO DƯỠNG' />ẮC QUY MIỄN BẢO DƯỠNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-acid-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/acquytruyenthong1.jpg' alt='ẮC QUY TRUYỀN THỐNG' />ẮC QUY TRUYỀN THỐNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-dan-dung.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/logo_qdd.png' alt='ẮC QUY DÂN DỤNG' />ẮC QUY DÂN DỤNG</a></li>
        </ul>
      </li>
      <li>
        <a className='trainsion' href='san-pham/ac-quy-oto-xe-tai-gs.html' target='_self'><strong>ẮC QUY ÔTÔ GS</strong></a>
        <ul className='noli submenu_prd'>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/danh-sach-san-pham-1.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='DANH SÁCH SẢN PHẨM' />DANH SÁCH SẢN PHẨM</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-hybrid.html' target='_self'><img src='Data/Sites/1/media/hybrid.png' alt='ẮC QUY HYBRID' />ẮC QUY HYBRID</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-mien-bao-duong-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/07112018/oto_free1.png' alt='ẮC QUY MIỄN BẢO DƯỠNG' />ẮC QUY MIỄN BẢO DƯỠNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-acid-oto-xe-tai.html' target='_self'><img src='Data/Sites/1/media/baiviet/acquytruyenthong1.jpg' alt='ẮC QUY TRUYỀN THỐNG' />ẮC QUY TRUYỀN THỐNG</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-oto-xe-tai-gs/ac-quy-dan-dung.html' target='_self'><img src='Data/Sites/1/media/baiviet/11042019/logo_qdd.png' alt='ẮC QUY DÂN DỤNG' />ẮC QUY DÂN DỤNG</a></li>
        </ul>
      </li>
      <li>
        <a className='trainsion' href='san-pham/ac-quy-cong-nghiep-4.html' target='_self'><strong>ẮC QUY CÔNG NGHIỆP</strong></a>
        <ul className='noli submenu_prd'>
          <li><a className='black trainsion' href='san-pham/ac-quy-cong-nghiep-4/thong-tin-ky-thuat.html' target='_self'><img src='Data/Sites/1/media/menu_icon/view-details-xxl.png' alt='Thông tin kỹ thuật' />Thông tin kỹ thuật</a></li>
          <li><a className='black trainsion' href='san-pham/ac-quy-cong-nghiep-4/ac-quy-xe-nang.html' target='_self'><img src='Data/Sites/1/media/menu_icon/icon-acquyxenang3.png' alt='ẮC QUY XE NÂNG' />ẮC QUY XE NÂNG</a></li>
        </ul>
      </li> */}
    </ul>
    <div className='clear' />
  </div>
}
