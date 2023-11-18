import { components } from "../api";
import {
  IComponentsTotalItem,
  IComponentsTotalResult,
  IComponentstrendItem,
  IComponentstrendResult,
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
};

export default ComponentsService;
