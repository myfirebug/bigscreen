import { FC, useRef, useState, useEffect } from 'react'
import {
  ActionType,
  ProColumns,
  ProTable,
  TableDropdown
} from '@ant-design/pro-table'
import tableConfig from '@src/config/table-config'
import { ALL_STATE } from '@store/actionType'
import { connect } from 'react-redux'
import { getStrategy } from '@store/actions/authorization'
import { IAnyObject } from '@src/types'
import { Button, Space, Drawer } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import Ajax from '@src/service'
// pop配置
import PopConfirm from '@src/components/pop-confirm'

// 表格字段的类型
interface TableItem extends IAnyObject {
  // 报表id
  id: number
  // 报表标题
  title: string
}

interface IBigScreenProps {
  strategy: IAnyObject
  getStrategy: (key: string) => void
  path: string
}

const BigScreen: FC<IBigScreenProps> = ({ strategy, getStrategy, path }) => {
  // 获取策略
  useEffect(() => {
    getStrategy(path)
  }, [path, getStrategy])

  const history = useHistory()

  const actionRef = useRef<ActionType>()

  // 抽屉数据
  const [drawer, setDrawer] = useState<any>({
    visible: false,
    // design:设计,preview:预览
    type: 'design',
    width: '100%',
    title: ''
  })

  // 表格columns
  const columns: ProColumns<TableItem>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48
    },
    {
      title: '报表名称',
      dataIndex: 'title',
      ellipsis: true,
      tip: '标题过长会自动收缩',
      fieldProps: {
        placeholder: '请输入标题'
      }
    },
    {
      title: '报表描述',
      dataIndex: 'description',
      ellipsis: true,
      search: false
    },
    {
      title: '屏幕尺寸',
      dataIndex: 'description',
      ellipsis: true,
      search: false,
      render(dom, record, index, action, schema) {
        return (
          <>
            {record.width}*{record.height}
          </>
        )
      }
    },
    {
      title: '屏幕比例',
      dataIndex: 'description',
      ellipsis: true,
      search: false,
      render(dom, record, index, action, schema) {
        return (
          <>
            {record.horizontalNumber}*{record.verticalNumber}
          </>
        )
      }
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1]
          }
        }
      }
    },
    {
      title: '操作',
      search: false,
      render(dom, record, index, action, schema) {
        return (
          <div className='app-table__operation'>
            <span
              onClick={() =>
                history.push(`/frame/configuration?id=${record.id}`)
              }
              className='link'>
              编辑
            </span>
            <PopConfirm
              text='删除'
              requestName='reportDelete'
              params={{
                ids: [record.id]
              }}
              reload={actionRef.current?.reloadAndRest}></PopConfirm>
            <span
              onClick={() => history.push(`/frame/preview?id=${record.id}`)}
              className='link'>
              预览
            </span>
          </div>
        )
      }
    }
  ]

  // 选中的数据
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([])
  // table复选框
  const rowSelection = {
    onChange: (selectedRowKeys: any) => {
      setSelectedRowKeys(selectedRowKeys)
    }
  }

  const addProject = () => {
    history.push('/frame/configuration')
  }
  return (
    <>
      <Drawer
        title={drawer.title}
        width={drawer.width}
        destroyOnClose={true}
        headerStyle={{
          display: 'none'
        }}
        bodyStyle={{
          padding: 0,
          background: '#535353'
        }}
        onClose={() =>
          setDrawer((state: any) => ({
            ...state,
            visible: false
          }))
        }
        visible={drawer.visible}></Drawer>
      <ProTable<TableItem>
        {...tableConfig}
        columns={columns}
        actionRef={actionRef}
        headerTitle='报表管理'
        cardBordered
        search={{
          labelWidth: 'auto'
        }}
        request={async (params = {}, sort, filter) => {
          return Ajax.report()
        }}
        rowSelection={{ ...rowSelection }}
        toolBarRender={() => {
          const arr = [
            <Button
              key='button'
              icon={<PlusOutlined />}
              onClick={addProject}
              type='primary'>
              添加
            </Button>
          ]
          return arr
        }}
        tableAlertOptionRender={() => {
          return (
            <Space size={16}>
              <PopConfirm
                text='批量删除'
                requestName='reportDelete'
                params={{
                  ids: [selectedRowKeys]
                }}
                reload={actionRef.current?.reloadAndRest}></PopConfirm>
            </Space>
          )
        }}></ProTable>
    </>
  )
}
// 对应的statemkjh m,
const mapStateToProps = (state: ALL_STATE) => ({
  strategy: state.authorization.strategy
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  getStrategy
}

export default connect(mapStateToProps, mapDispatchToProps)(BigScreen)
