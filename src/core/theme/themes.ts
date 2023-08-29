import { theme01 } from "./theme01";
import { theme01_dark } from "./theme01_dark";

type IThemes = {
  [propName in IThemeName]: {
    [propName: string]: any;
  };
};

export type IThemeName = "theme01" | "theme01_dark";

export interface IThemeItem {
  name: IThemeName;
  color: string;
}

export const themeList: IThemeItem[] = [
  {
    name: "theme01",
    color: theme01["--primary-color"],
  },
  {
    name: "theme01_dark",
    color: theme01_dark["--primary-color"],
  },
];

export const themes: IThemes = {
  theme01,
  theme01_dark,
};
