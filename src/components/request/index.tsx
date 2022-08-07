import {
  FC,
  useEffect,
  memo
} from 'react'
import Wrapper from '@src/components/wrapper'
import { IAnyObject } from '@src/types'
import { useRequest } from 'ahooks'
import axios from 'axios'

interface IResult {
  code: string;
  data: any;
  msg: string;
  success: boolean;

  [propNames: string]: any;
}

interface IRequestProps {
  // 是否需要占位
  isPlaceholder: Boolean;
  // 类型
  method: 'get' | 'post',
  // 接口地址
  url: string;
  // 接口参数
  params: string;
  render: (data: any) => any;
}

const Request = memo((props: IRequestProps) => {
  const {
    method,
    url,
    params,
    isPlaceholder,
    render
  } = props
  // 获取数据
  const { data, loading, error, run } = useRequest(async () => {
    const { data } = await new Promise((resolve: (data: IResult) => void, reject: (data: any) => void) => {
      axios({
        url: url,
        method: method,
        params: JSON.parse(params)
      })
        .then((res) => {
          resolve(res.data)
        })
        .catch(res => {
          reject(res)
        })
    })
    return data
  }, {
    manual: true,
    refreshDeps: [params]
  })

  useEffect(() => {
    if (url) {
      run()
    }
  }, [run, url, params])

  return (
    <>
      {
        isPlaceholder ?
          <Wrapper
            loading={loading}
            error={Boolean(error)}
            nodata={false}
          >
            {
              render(data)
            }
          </Wrapper>
          : render(data)
      }
    </>
  )
})
export default Request