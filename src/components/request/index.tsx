import React, { FC } from "react";
import { useRequest } from "ahooks";
import axios from "axios";
import Wrapper from "@src/components/wrapper";

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
  method: "get" | "post";
  // 接口地址
  url: string;
  // 接口参数
  params: string;
  render: (data: any, success: boolean, setP?: React.Dispatch<any>) => any;
}

const Request: FC<IRequestProps> = ({
  method,
  url,
  params,
  isPlaceholder,
  render,
}) => {
  // 获取数据
  const { data, loading, error } = useRequest(
    async () => {
      return await new Promise(
        (resolve: (data: IResult) => void, reject: (data: any) => void) => {
          axios({
            url:
              process.env.REACT_APP_ENV === "production" &&
              url === "http://localhost:6001/configuration"
                ? "https://myfirebug.github.io/bigscreen/configuration"
                : url,
            method: method,
            params: JSON.parse(params),
          })
            .then((res: any) => {
              resolve(res);
            })
            .catch((res) => {
              reject(res);
            });
        }
      );
    },
    {
      refreshDeps: [params, url],
      ready: Boolean(url),
      debounceWait: 300,
    }
  );
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
  );
};
