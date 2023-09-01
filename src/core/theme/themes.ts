import { theme01_light } from "./theme01";
import { theme01_dark } from "./theme01_dark";

type IThemes = {
  [propName in IThemeName]: {
    [propName: string]: any;
  };
};

export type IThemeName = "theme01_light" | "theme01_dark";

export interface IThemeItem {
  name: IThemeName;
  color: string;
}

export const themeList: IThemeItem[] = [
  {
    name: "theme01_light",
    color: theme01_light["--primary-color"],
  },
  {
    name: "theme01_dark",
    color: theme01_dark["--primary-color"],
  },
];

export const themes: IThemes = {
  theme01_light,
  theme01_dark,
};
