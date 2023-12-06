import React, { memo, useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { ALL_STATE } from "@src/store/actionType";
import { init as initChart } from "echarts/core";
import { connect } from "react-redux";
import {
  Option,
  Theme,
  InitOptions,
  UpdateOptions,
  AutoresizeProp,
  LoadingOptions,
  EChartsType,
} from "./types";

console.log(echarts);

interface IEchartsProps {
  option: Option;
  theme?: Theme;
  initOptions?: InitOptions;
  updateOptions?: UpdateOptions;
  group?: string;
  autoresize?: AutoresizeProp;
  loading?: boolean;
  loadingOptions?: LoadingOptions;
}

const Echarts = memo(
  (props: IEchartsProps) => {
    const {
      theme,
      group,
      initOptions,
      option,
      updateOptions,
      loading = false,
      loadingOptions,
      autoresize = {},
    } = props;
    const dom = useRef<HTMLDivElement>(null);
    const chart = useRef<EChartsType>();

    const init = useCallback(() => {
      if (!dom.current) {
        return;
      }
      if (!chart.current) {
        chart.current = initChart(dom.current, theme, initOptions);
      }
      if (group) {
        chart.current.group = group;
      }

      if (loading) {
        chart.current.showLoading(loadingOptions);
      } else {
        chart.current.hideLoading();
      }

      if (option) {
        chart.current.setOption(option, updateOptions);
      }
    }, [
      initOptions,
      option,
      theme,
      group,
      loading,
      loadingOptions,
      updateOptions,
    ]);

    const cleanup = useCallback(() => {
      if (chart.current) {
        chart.current.dispose();
        chart.current = undefined;
      }
    }, [chart]);

    useEffect(() => {
      init();
      const { onResize } = autoresize;
      const callback = () => {
        chart.current?.resize();
        onResize?.();
      };

      window.addEventListener("resize", callback);
      return () => {
        cleanup();
        window.removeEventListener("resize", callback);
      };
    }, [cleanup, init, autoresize]);

    return (
      <div
        className="cms-echarts"
        ref={dom}
        style={{ width: "100%", height: "250px" }}
      ></div>
    );
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }
);

const mapStateToProps = (state: ALL_STATE) => ({
  theme: state.currentTheme.includes("_light") ? "light" : "dark",
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Echarts);
