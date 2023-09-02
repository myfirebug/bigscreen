import { IRoute } from "@src/router/routes";

/**
 * 根据当前节点id返回当前节点数据
 * @param datas 数据
 * @param value 字段值
 * @param field 字段名
 */
export function getGroupById(
  datas: IRoute[],
  value: number | string,
  field: keyof IRoute
) {
  let hasFound = false; // 表示是否有找到id值
  let result: any;
  let fn = function (datas: IRoute[]) {
    if (Array.isArray(datas) && !hasFound) {
      // 判断是否是数组并且没有的情况下，
      for (let i = 0; i < datas.length; i++) {
        if (datas[i][field] === value) {
          result = datas[i];
          hasFound = true;
          break;
        } else if (datas[i].children) {
          fn(datas[i].children as IRoute[]);
        }
      }
    }
  };
  fn(datas);
  return result;
}
