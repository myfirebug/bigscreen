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

/**
 * 根据id返回所有的父级
 * @param data
 * @param id
 */
export function getParentsById(data: IRoute[], id: string): any {
  for (const i in data) {
    if (data[i].children) {
      let ro = getParentsById(data[i].children as IRoute[], id);
      if (ro !== undefined) {
        // 寻找当前前subResource是否有菜单
        const index = (data[i].children as IRoute[]).findIndex(
          (item: any) => item.meta.menu
        );
        // 如果有菜单就找到当前菜单的地址
        if (index !== -1) {
          return ro.concat({
            path: (data[i].children as IRoute[])[index].path,
            name: data[i].title,
          });
        }
        // 否则就不把path置空
        return ro.concat({
          path: data[i].path,
          name: data[i].title,
        });
      }
    }
    // 匹配的最后一级没有必要使用path了
    if (data[i].path === id) {
      return [
        {
          path: "",
          name: data[i].title,
        },
      ];
    }
  }
}
