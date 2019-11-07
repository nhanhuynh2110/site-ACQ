import React from 'react'
import _ from 'lodash'
import STORELINK from '../../../../../container/storeLink'
const {prefixSP} = STORELINK

export default ({category}) => {
  const parent = _.get(category, 'parent', null)
  const categories = _.get(category, 'all', null)
  return <div className='container'>
    <ul className='noli menu_prd'>
      {parent.map(p => {
        const childs = categories.filter(i => i.parentId === p._id)
        return <li key={p._id}>
          <a className='trainsions' href={`${prefixSP}/${p.link}`} target='_self'>
            <strong className='uppercase'>{p.title}</strong>
          </a>
          {childs.length > 0 && <ul key={`child-${p._id}`} className='noli submenu_prd'>
            {childs.map(el => {
              return <li key={`children-${el._id}`}>
                <a className='black trainsion' href={`${prefixSP}/${el.link}`} target='_self'>
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
