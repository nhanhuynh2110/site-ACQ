import React from 'react'
import conf from '../../config'
const domain = conf.server.domain

export default ({groups = []}) => {
  const parent = groups.filter(p => !p.parentId)

  return <div className='container'>
    <ul className='noli menu_prd'>
      {parent.map(p => {
        const childs = groups.filter(i => i.parentId === p._id)
        return <li key={p._id}>
          <a className='trainsions' href={`/san-pham/${p.link}`} target='_self'>
            <strong className='uppercase'>{p.title}</strong>
          </a>
          {childs.length > 0 && <ul key={`child-${p._id}`} className='noli submenu_prd'>
            {childs.map(el => {
              return <li key={`children-${el._id}`}>
                <a className='black trainsion' href={`/san-pham/${el.link}`} target='_self'>
                  <i className='fa fa-angle-right icon-arrow' />
                  {el.title}
                </a>
                {/* <a className='black trainsion' href={`/san-pham/${el.link}`} target='_self'>
                  <span className='title-image' style={{ background: `url(${domain}/${el.img}) center center` }} />
                  {el.title}
                </a> */}
              </li>
            })}
          </ul>}
        </li>
      })}
    </ul>
    <div className='clear' />
  </div>
}
