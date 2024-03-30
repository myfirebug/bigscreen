import { useCallback, useState } from "react";
import {
  IwidgetsTotalItem,
  IwidgetstrendItem,
  IwidgetsTeaderboardItem,
  IwidgetsTypeItem,
  IwidgetsItem,
} from "@src/service";
import { API } from "@service/index";

const flatten = (arr: IwidgetsTypeItem[]) => {
  return arr
    .reduce((result, item) => {
      return result.concat(
        item,
        item.children && Array.isArray(item.children)
          ? flatten(
              item.children.map((subItem: any) => ({
                ...subItem,
                pid: item.id,
              }))
            )
          : []
      );
    }, [])
    .sort((a: IwidgetsTypeItem, b: IwidgetsTypeItem) => a.level - b.level);
};

export function useWidgets() {
  // 统计
  const [total, setTotal] = useState<{
    loading: boolean;
    datas: IwidgetsTotalItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getTotal = useCallback(() => {
    setTotal((state) => ({
      ...state,
      loading: true,
    }));
    API.widgetsService
      .total()
      .then((res) => {
        setTimeout(() => {
          setTotal({
            loading: false,
            datas: res.data,
          });
        }, 3000);
      })
      .catch(() => {
        setTotal((state) => ({
          ...state,
          loading: false,
        }));
      });
  }, []);

  // 新增组件统计图
  const [trend, setTrend] = useState<{
    loading: boolean;
    datas: IwidgetstrendItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getTrend = useCallback(() => {
    setTrend((state) => ({
      ...state,
      loading: true,
    }));
    API.widgetsService
      .trendChart()
      .then((res) => {
        setTimeout(() => {
          setTrend({
            loading: false,
            datas: res.data,
          });
        }, 2000);
      })
      .catch(() => {
        setTrend((state) => ({
          ...state,
          loading: false,
        }));
      });
  }, []);

  // 使用排行榜TOP8
  const [leaderboard, setLeaderboard] = useState<{
    loading: boolean;
    datas: IwidgetsTeaderboardItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getLeaderboard = useCallback(() => {
    setLeaderboard((state) => ({
      ...state,
      loading: true,
    }));
    API.widgetsService
      .leaderboard()
      .then((res) => {
        setTimeout(() => {
          setLeaderboard({
            loading: false,
            datas: res.data.sort((a, b) => a.value - b.value),
          });
        }, 2000);
      })
      .catch(() => {
        setLeaderboard((state) => ({
          ...state,
          loading: false,
        }));
      });
  }, []);

  // 获取组件类型
  const [types, setTypes] = useState<{
    loading: boolean;
    datas: IwidgetsTypeItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getTypes = useCallback(async () => {
    setTypes((state) => ({
      ...state,
      loading: true,
    }));
    try {
      const { data } = await API.widgetsService.types();
      const datas: IwidgetsTypeItem[] = flatten(data);
      if (datas.length) {
        const selects = new Array(datas[datas.length - 1].level).fill("");
        selects[0] = data[0].id;
        setTypes({
          loading: false,
          datas: datas,
        });
        // 设置类型参数个数
        setList((state) => ({
          ...state,
          params: {
            ...state.params,
            type: selects,
          },
        }));
      }
    } catch (e) {
      setTypes((state) => ({
        ...state,
        loading: false,
      }));
    }
  }, []);

  // 获取组件列表
  const [list, setList] = useState<{
    loading: boolean;
    datas: IwidgetsItem[];
    searchDatas: IwidgetsItem[];
    params: {
      type: string[];
    };
  }>({
    loading: false,
    datas: [],
    searchDatas: [],
    params: {
      type: [],
    },
  });

  const listSearchHandler = useCallback(
    (field: string, value: any, index?: number) => {
      switch (field) {
        case "type": {
          setList((state) => {
            const arr = [...state.params.type];
            arr[index as number] = value;
            if (index === 0) {
              const item = types.datas.find((item) => item.id === value);
              if (item && item.children) {
                arr[(index as number) + 1] = item.children[0].id;
              } else {
                arr[(index as number) + 1] = "";
              }
            }
            const selects: string[] = new Array(arr.length).fill("");
            for (let i = 0; i < arr.length; i++) {
              const item = types.datas.find((item) => item.id === arr[i]);
              if (item) {
                selects[i] = item.value;
              }
            }
            return {
              ...state,
              searchDatas: state.datas.filter(
                (item) =>
                  item.level1Type.includes(selects[0]) &&
                  item.level2Type.includes(selects[1])
              ),
              params: {
                ...state.params,
                type: arr,
              },
            };
          });
        }
      }
    },
    [types.datas]
  );

  const getList = useCallback(async () => {
    setList((state) => ({
      ...state,
      loading: true,
    }));
    try {
      const { data } = await API.widgetsService.list();
      setTimeout(() => {
        setList((state) => ({
          ...state,
          loading: false,
          datas: data,
          searchDatas: data,
        }));
      }, 1000);
    } catch (e) {
      setList((state) => ({
        ...state,
        loading: false,
      }));
    }
  }, []);

  return {
    total,
    getTotal,
    trend,
    getTrend,
    leaderboard,
    getLeaderboard,
    types,
    listSearchHandler,
    getTypes,
    list,
    getList,
  };
}
