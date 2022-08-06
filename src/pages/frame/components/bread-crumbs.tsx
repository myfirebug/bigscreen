/* eslint-disable */
import {
  memo
} from 'react'
import { IBreadCrumbsItem } from '@store/actionType'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

interface IBreadCrumbsProps {
  breadCrumbs: IBreadCrumbsItem[];
  currPageTabKey: string;
}

const BreadCrumbs = memo((props: IBreadCrumbsProps) => {
  const { breadCrumbs, currPageTabKey } = props
  return (
    <>
      {
        breadCrumbs.length ?
          <div className='app-screen-layout__breadcrumb'>
            <Breadcrumb>
              {
                breadCrumbs.map((item, index: number) => <Breadcrumb.Item
                  key={index}>
                  {
                    item.path ? <Link to={item.path}>{item.name}</Link> :
                      item.name
                  }
                </Breadcrumb.Item>)
              }
            </Breadcrumb>
            <div className='app-screen-layout__breadcrumb--text'>
              <span className="title">{breadCrumbs[breadCrumbs.length - 1].name}</span>
              <span className='sub-title'>对{breadCrumbs[breadCrumbs.length - 1].name}进行展示管理</span>
            </div>
          </div> : null
      }
    </>
  )

})
export default BreadCrumbs