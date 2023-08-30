import React, { FC, useEffect, useState } from "react";
import "./index.scss";
import { themeList, IThemeItem, setTheme, IThemeName } from "@core/theme";
interface ITheme {}

const Theme: FC<ITheme> = () => {
  const [currentTheme, setCurrentTheme] = useState<IThemeItem>(() => {
    return (
      themeList.find((item) => item.name === window.CONFIG.theme) ||
      themeList[0]
    );
  });
  useEffect(() => {
    setTheme(currentTheme.name);
  }, [currentTheme.name]);

  const modeHandler = () => {
    let isMoon = currentTheme.name.includes("_dark");
    let currentThemeName = (
      isMoon ? currentTheme.name.split("_")[0] : `${currentTheme.name}_dark`
    ) as IThemeName;
    setCurrentTheme((state) => ({
      ...state,
      name: currentThemeName,
    }));
  };
  return (
    <div className="cms-theme">
      <div className="cms-theme__select">
        <div className="hd" style={{ background: currentTheme.color }}></div>
        <div className="bd">
          {themeList
            .filter((item) => !item.name.includes("_dark"))
            .map((item) => (
              <div
                title={item.name}
                className="option"
                key={item.name}
                onClick={() =>
                  setCurrentTheme((state) => ({
                    color: item.color,
                    name: (state.name.includes("_dark")
                      ? `${item.name}_dark`
                      : item.name) as IThemeName,
                  }))
                }
                style={{ background: item.color }}
              ></div>
            ))}
        </div>
      </div>
      <div
        title="切换模式"
        className={`cms-theme__mode ${
          currentTheme.name.includes("_dark") ? "is-moon" : ""
        }`}
        onClick={modeHandler}
      ></div>
    </div>
  );
};

export default Theme;
