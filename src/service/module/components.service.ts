import { components } from "../api";
import { IComponentsTotalItem, IComponentsTotalResult } from "../interface";
import axios from "../fetch";

const ComponentsService = {
  // 组件统计接口
  total() {
    return axios.get<IComponentsTotalItem[], IComponentsTotalResult>(
      components.total
    );
  },
};

export default ComponentsService;
