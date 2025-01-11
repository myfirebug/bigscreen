/**
 * 生成唯一ID
 * @returns {string}
 */
export function guid(): string {
  const s: any[] = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "=";

  const uuid = s.join("");
  return uuid;
}

/**
 * 设置样式
 * @param config json数据
 */
export const getStyles = (config: { [propName: string]: any }) => {
  let result: any = {
    width: config.width,
    height: config.height,
    animationIterationCount: config.styleAnimateInfinite ? "infinite" : 1,
    textShadow: `${config.styleTextShadowX}px ${config.styleTextShadowY}px ${config.styleTextShadowF}px ${config.styleTextShadowC}`,
    boxShadow: `${config.styleBoxShadowX}px ${config.styleBoxShadowY}px ${
      config.styleBoxShadowF
    }px ${config.styleBoxShadowC} ${config.styleBoxInset ? "inset" : ""}`,
  };
  for (let filed in config) {
    if (filed.indexOf("style") === 0 && typeof config[filed] !== "object") {
      let newField = filed.substring(5);
      newField = newField.replace(newField[0], newField[0].toLocaleLowerCase());
      result[newField] = config[filed];
    }
  }
  result.animationDelay = config.styleAnimationDelay + "s";
  result.animationDuration = config.styleAnimationDuration + "s";
  return result;
};
