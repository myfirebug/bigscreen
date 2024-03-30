import { widgets } from "../api";
import {
  IwidgetsTotalItem,
  IwidgetsTotalResult,
  IwidgetstrendItem,
  IwidgetstrendResult,
  IwidgetsTeaderboardItem,
  IwidgetsTeaderboardResult,
  IwidgetsTypeItem,
  IwidgetsTypeResult,
  IwidgetsItem,
  IwidgetsResult,
} from "../interface";
import axios from "../fetch";

const WidgetsService = {
  // 组件统计接口
  total() {
    return axios.get<IwidgetsTotalItem[], IwidgetsTotalResult>(widgets.total);
  },
  // 新增组件统计图
  trendChart() {
    return axios.get<IwidgetstrendItem[], IwidgetstrendResult>(
      widgets.trendChart
    );
  },
  // 使用排行榜TOP5
  leaderboard() {
    return axios.get<IwidgetsTeaderboardItem[], IwidgetsTeaderboardResult>(
      widgets.leaderboard
    );
  },
  // 获取组件类型
  types() {
    return axios.get<IwidgetsTypeItem[], IwidgetsTypeResult>(widgets.types);
  },
  // 获取组件列表
  list() {
    return axios.get<IwidgetsItem[], IwidgetsResult>(widgets.list);
  },
};

export default WidgetsService;
