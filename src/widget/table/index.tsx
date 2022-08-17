import {
  FC
} from 'react'
import { IAnyObject } from '@src/types'
import './index.scss'

interface ITableProps {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
  options: any;
}

const Table: FC<ITableProps> = ({
  data = {},
  field = 'value',
  options
}) => {
  const { tableColumn = [] } = options

  return (
    <>
      {
        tableColumn.length ?
          <div className='app-table' style={{
            fontSize: options.tableFontSize,
            lineHeight: options.tableLineHeight + 'px'
          }}>
            {
              options.tableShowHeader ?
                <div className="app-table__header">
                  <table
                    style={{
                      background: options.tableHeaderBackgroudColor,
                      color: options.tableHeaderColor
                    }}
                  >
                    <colgroup>
                      {
                        tableColumn.map((item: any, index: number) => (
                          <col width={item.width} key={index} />
                        ))
                      }
                    </colgroup>
                    <thead>
                      <tr>
                        {
                          tableColumn.map((item: any, index: number) => (
                            <td
                              style={{
                                border: options.tableShowBorder ? `1px solid ${options.tableBorderColor}` : 'none'
                              }}
                              key={index}
                              align={item.align || 'left'}>{item.title}</td>
                          ))
                        }
                      </tr>
                    </thead>
                  </table>
                </div> : null
            }
            <div className="app-table__body">
              <table
                style={{
                  color: options.tableTbodyColor,
                  marginTop: '-1px'
                }}
              >
                <colgroup>
                  {
                    tableColumn.map((item: any, index: number) => (
                      <col width={item.width} key={index} />
                    ))
                  }
                </colgroup>
                <tbody>
                  {
                    data && data[field] && data[field] instanceof Array ?
                      data[field].map((item: any, index: number) => (
                        <tr
                          style={{
                            background: index % 2 === 0 ? options.tableTbodyEvenBackgroudColor : options.tableTbodyOddBackgroudColor
                          }}
                          key={index}>
                          {
                            tableColumn.map((subItem: any, subIndex: number) => (
                              <td
                                style={{
                                  border: options.tableShowBorder ? `1px solid ${options.tableBorderColor}` : 'none'
                                }}
                                key={subIndex}
                                align={subItem.align || 'left'}>
                                {
                                  typeof subItem.render === 'function' ?
                                    subItem.render(item) : (item[subItem.dataIndex] || '-')
                                }
                              </td>
                            ))
                          }
                        </tr>
                      )) : null
                  }
                </tbody>
              </table>
            </div>
          </div> : null
      }
    </>
  )
}

export default Table