import { IThemeName } from "@src/core/theme";
interface Config {
  // 站点名称
  sitename: string;
  // 站点标题
  title: string;
  // 站点描述
  description: string;
  // 站点关键词
  keywords: string;
  // 开发环境接口地址
  developmentApi: string;
  // 正式环境接口地址
  productionApi: string;
  theme: IThemeName;
}

declare global {
  interface Window {
    CONFIG: Config;
    particlesJS: any;
  }
}
