/**
 * Created by jerryshen on 2017/7/16.
 */
export default function timeFormat(date) {
  // 获取当前时间和所传时间的Date对象
  const nowTime = new Date();
  const inDate = new Date(date);
  if (nowTime.getYear() - inDate.getYear() > 0) {
    // 年份差值 > 0，返回年
    return `${nowTime.getFullYear() - inDate.getFullYear()}年前`;
  } else if (nowTime.getMonth() - inDate.getMonth() > 0) {
    // 月份差值 > 0，返回月
    return `${nowTime.getMonth() - inDate.getMonth()}个月前`;
  } else if (nowTime.getDate() - inDate.getDate() > 0) {
    // 日期差值 > 0，返回日
    return `${nowTime.getDate() - inDate.getDate()}天前`;
  } else if (nowTime.getHours() - inDate.getHours() > 0) {
    // 小时差值 > 0，返回时
    return `${nowTime.getHours() - inDate.getHours()}个小时前`;
  } else if (nowTime.getMinutes() - inDate.getMinutes() > 0) {
    // 分钟差值 > 0，返回分钟
    return `${nowTime.getMinutes() - inDate.getMinutes()}分钟前`;
  }
  // 其他情况，也就是秒数差值 > 0，返回秒钟
  return `${nowTime.getSeconds() - inDate.getSeconds()}秒前`;
}
