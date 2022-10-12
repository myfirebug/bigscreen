/*
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-12 13:59:58
 * @FilePath: \bigscreen\src\components\request\index.tsx
 * @Description: 页面描述
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import React, { useEffect, memo, FC, useState } from 'react'
import Wrapper from '@src/components/wrapper'
import { useRequest } from 'ahooks'
import axios from 'axios'

interface IResult {
  code: string
  data: any
  msg: string
  success: boolean

  [propNames: string]: any
}

interface IRequestProps {
  // 是否需要占位
  isPlaceholder: Boolean
  // 类型
  method: 'get' | 'post'
  // 接口地址
  url: string
  // 接口参数
  params: string
  render: (data: any, success: boolean, setP?: React.Dispatch<any>) => any
}

// const Request: FC<IRequestProps> = ({
//   method,
//   url,
//   params,
//   isPlaceholder,
//   render
// }) => {
//   // 获取数据
//   const [data, setData] = useState<any>(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(false)
//   const [success, setSuccess] = useState(false)

//   useEffect(() => {
//     if (url) {
//       setError(false)
//       setLoading(true)
//       axios({
//         url: url,
//         method: method,
//         params: JSON.parse(params)
//       })
//         .then((res: any) => {
//           setLoading(false)
//           setSuccess(true)
//           setData(res.data.data || res.data)
//         })
//         .catch((res) => {
//           setLoading(false)
//           setSuccess(false)
//           setError(false)
//         })
//     }
//   }, [url, params])
//   return (
//     <>
//       {isPlaceholder ? (
//         <Wrapper loading={loading} error={Boolean(error)} nodata={false}>
//           {render(data, success)}
//         </Wrapper>
//       ) : (
//         render(data, success)
//       )}
//     </>
//   )
// }

const Request: FC<IRequestProps> = ({
  method,
  url,
  params,
  isPlaceholder,
  render
}) => {
  // 获取数据
  const { data, loading, error } = useRequest(
    async () => {
      return await new Promise(
        (resolve: (data: IResult) => void, reject: (data: any) => void) => {
          axios({
            url: url,
            method: method,
            params: JSON.parse(params)
          })
            .then((res: any) => {
              // resolve(res.data.data || res.data)
              resolve(res)
            })
            .catch((res) => {
              reject(res)
            })
        }
      )
    },
    {
      refreshDeps: [params, url],
      ready: Boolean(url)
    }
  )

  return (
    <>
      {isPlaceholder ? (
        <Wrapper loading={loading} error={Boolean(error)} nodata={false}>
          {render(url ? data : null, url ? !error : true)}
        </Wrapper>
      ) : (
        render(url ? data : null, url ? !error : true)
      )}
    </>
  )
}
export default Request
