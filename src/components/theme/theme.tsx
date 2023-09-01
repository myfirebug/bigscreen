import React, { FC } from "react";
import "./index.scss";
import { themeList, IThemeName, getCurrentPrimaryColor } from "@core/theme";
import { ALL_STATE } from "@src/store/actionType";
import { setCurrentTheme } from "@src/store/actions/theme";
import { connect } from "react-redux";
interface ITheme {
  currentTheme: IThemeName;
  setCurrentTheme: (data: IThemeName) => void;
}

const Theme: FC<ITheme> = ({ currentTheme, setCurrentTheme }) => {
  const modeHandler = () => {
    let isMoon = currentTheme.includes("_dark");
    let currentThemeName = (
      isMoon
        ? `${currentTheme.split("_")[0]}_light`
        : `${currentTheme.split("_")[0]}_dark`
    ) as IThemeName;
    setCurrentTheme(currentThemeName);
  };
  return (
    <div className="cms-theme">
      <div className="cms-theme__select">
        <div
          className="hd"
          style={{ background: getCurrentPrimaryColor(currentTheme) }}
        ></div>
        <div className="bd">
          {themeList
            .filter((item) => !item.name.includes("_dark"))
            .map((item) => (
              <div
                title={item.name}
                className="option"
                key={item.name}
                onClick={() =>
                  setCurrentTheme(
                    (currentTheme.includes("_dark")
                      ? `${item.name.split("_")[0]}_dark`
                      : `${item.name.split("_")[0]}_light`) as IThemeName
                  )
                }
                style={{ background: item.color }}
              ></div>
            ))}
        </div>
      </div>
      <div
        title="切换模式"
        className={`cms-theme__mode ${
          currentTheme.includes("_dark") ? "is-moon" : ""
        }`}
        onClick={modeHandler}
      ></div>
    </div>
  );
};

const mapStateToProps = (state: ALL_STATE) => ({
  currentTheme: state.currentTheme,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = {
  setCurrentTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
