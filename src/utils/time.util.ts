/**
 *格式化日期
 * @param {string | number} dateString  时间戳
 * @param {string} fmt 格式
 * @returns {string}
 * @example
 * fmtDate(1710225307295, 'yyyy-MM-dd hh:mm:ss') // 格式化日期为xxxx-xx-xx xx:xx:xx
 */
export function fmtDate(dateString: string | number, fmt: string): string {
  const date = new Date(dateString);
  const o: any = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}
