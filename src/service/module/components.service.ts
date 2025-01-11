import { components } from "../api";
import {
  IComponentsTotalItem,
  IComponentsTotalResult,
  IComponentstrendItem,
  IComponentstrendResult,
  IComponentsTeaderboardItem,
  IComponentsTeaderboardResult,
  IComponentsTypeItem,
  IComponentsTypeResult,
  IComponentsItem,
  IComponentsResult,
} from "../interface";
import axios from "../fetch";

const ComponentsService = {
  // 组件统计接口
  total() {
    return axios.get<IComponentsTotalItem[], IComponentsTotalResult>(
      components.total
    );
  },
  // 新增组件统计图
  trendChart() {
    return axios.get<IComponentstrendItem[], IComponentstrendResult>(
      components.trendChart
    );
  },
  // 使用排行榜TOP5
  leaderboard() {
    return axios.get<
      IComponentsTeaderboardItem[],
      IComponentsTeaderboardResult
    >(components.leaderboard);
  },
  // 获取组件类型
  types() {
    return axios.get<IComponentsTypeItem[], IComponentsTypeResult>(
      components.types
    );
  },
  // 获取组件列表
  list() {
    return axios.get<IComponentsItem[], IComponentsResult>(components.list);
  },
};

export default ComponentsService;
