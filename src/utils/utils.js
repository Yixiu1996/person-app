/*
 * @Author: your name
 * @Date: 2020-09-08 22:29:36
 * @LastEditTime: 2020-09-08 22:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-app\src\utils\utils.js
 */
export default {
  formatTime(time) {
    if (!time) return "";
    let secStr = time.getSeconds()
    console.log(secStr)
    if (secStr < 10) {
      secStr = '0' + secStr
      console.log(secStr)
    }
    let timeStr =
      time.getFullYear() +
      "年" +
      (time.getMonth() + 1) +
      "月" +
      time.getDay() +
      "日 " +
      time.getHours() +
      ":" +
      time.getMinutes() +
      ":" +
      secStr;
    return timeStr;
  },
};