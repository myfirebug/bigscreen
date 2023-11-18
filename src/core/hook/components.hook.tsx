import { useCallback, useState } from "react";
import { IComponentsTotalItem, IComponentstrendItem } from "@src/service";
import { API } from "@service/index";

export function useComponents() {
  // 统计
  const [total, setTotal] = useState<{
    loading: boolean;
    datas: IComponentsTotalItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getTotal = useCallback(() => {
    setTotal((state) => ({
      ...state,
      loading: true,
    }));
    API.componentsService
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
    datas: IComponentstrendItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getTrend = useCallback(() => {
    setTrend((state) => ({
      ...state,
      loading: true,
    }));
    API.componentsService
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

  return {
    total,
    getTotal,
    trend,
    getTrend,
  };
}
