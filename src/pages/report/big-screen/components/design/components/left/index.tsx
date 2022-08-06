import React, {
  FC, MouseEvent, useState
} from 'react'
import './index.scss'
import { Button, message, Modal, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { IPage } from '@src/store/actionType'
import { FormOutlined, DeleteOutlined, ExclamationCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'

// 新增页面表单
import AddOrEditPage from '../add-or-edit-page'

interface IDesignBodyLeftProps {
  pages: IPage[];
  addLargeScreenPage: (data: IPage, callback?: Function) => void;
  delLargeScreenPage: (id: string, callback?: Function) => void;
  modifyLargeScreenPage: (id: string, data: IPage, callback?: Function) => void;
  changeLargeScreenPage: (id: string, callback?: Function) => void;
  currentPageId?: string;
  setLeftFlag: React.Dispatch<React.SetStateAction<boolean>>;
  leftFlag: Boolean;
}

const DesignBodyLeft: FC<IDesignBodyLeftProps> = ({
  pages,
  addLargeScreenPage,
  delLargeScreenPage,
  modifyLargeScreenPage,
  changeLargeScreenPage,
  currentPageId,
  leftFlag,
  setLeftFlag
}) => {

  // 弹窗参数
  const [modal, setModal] = useState<any>({
    visible: false,
    title: '',
    details: {}
  })

  // 编辑
  const editHander = (item: IPage, e: MouseEvent) => {
    e.stopPropagation()
    setModal((state: any) => ({
      visible: true,
      title: '新增页面',
      details: item
    }))
  }

  // 删除页面
  const delHandler = (item: IPage, e: MouseEvent) => {
    e.stopPropagation()
    Modal.confirm({
      title: '温馨提示',
      icon: <ExclamationCircleOutlined />,
      content: '确定要删除该页面吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        delLargeScreenPage(item.id as string, () => {
          message.success('删除成功')
        })
      }
    })
  }

  return (
    <div className='app-screen-disign__body--left' style={{
      left: leftFlag ? 0 : -200
    }}>
      {/* 新增编辑页面弹窗 */}
      <Modal
        title={modal.title}
        visible={modal.visible}
        footer={null}
        destroyOnClose
        onCancel={() => setModal((state: any) => ({
          ...state,
          visible: false
        }))}>
        <AddOrEditPage
          setModal={setModal}
          addLargeScreenPage={addLargeScreenPage}
          modifyLargeScreenPage={modifyLargeScreenPage}
          details={modal.details}
        />
      </Modal>
      <div className='body'>
        <Button
          type="primary"
          block
          onClick={() => setModal((state: any) => ({
            visible: true,
            title: '新增页面',
            details: {}
          }))}
          icon={<PlusOutlined />}>
          新增页面
        </Button>
      </div>
      <div className="header">页面列表</div>
      <ul className="page">
        {
          pages.map(item => (
            <li
              key={item.id}
              data-id={item.id}
              onClick={() => {
                if (item.id !== currentPageId) {
                  changeLargeScreenPage(item.id as string, () => {
                    message.success('页面切换成功')
                  })
                }
              }}
              className={`page-item ${item.id === currentPageId ? 'is-active' : 'is-noactive'}`}>
              <div className="name">{item.name}</div>
              {/* 当前页面不允许编辑和删除 */}
              {
                item.id !== currentPageId &&
                <div className="page-item__operation">
                  <Tooltip title="编辑" placement="top">
                    <span
                      onClick={(e: MouseEvent) => editHander(item, e)}
                    >
                      <FormOutlined />
                    </span>
                  </Tooltip>
                  <Tooltip title="删除" placement="top">
                    <span onClick={(e: MouseEvent) => delHandler(item, e)}>
                      <DeleteOutlined />
                    </span>
                  </Tooltip>
                </div>
              }
            </li>
          ))
        }
      </ul>
      <div
        onClick={() => setLeftFlag(!leftFlag)}
        className="operation">
        {
          leftFlag ? <LeftOutlined /> : <RightOutlined />
        }
      </div>
    </div>
  )
}
export default DesignBodyLeft