import { useCallback, useState } from "react";
import {
  IComponentsTotalItem,
  IComponentstrendItem,
  IComponentsTeaderboardItem,
} from "@src/service";
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

  // 使用排行榜TOP8
  const [leaderboard, setLeaderboard] = useState<{
    loading: boolean;
    datas: IComponentsTeaderboardItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getLeaderboard = useCallback(() => {
    setLeaderboard((state) => ({
      ...state,
      loading: true,
    }));
    API.componentsService
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

  return {
    total,
    getTotal,
    trend,
    getTrend,
    leaderboard,
    getLeaderboard,
  };
}
