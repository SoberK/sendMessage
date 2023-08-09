/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-08-07 21:56:04
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-08-10 00:37:41
 * @FilePath: /bkchina/rank.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fetch from "node-fetch";
import xlsx from 'node-xlsx';
import fs from 'fs';
import { getCookie } from "./util.js";
const sendCookie = await getCookie();
import {send} from './sendMessage.js'
console.log(sendCookie);
const re = await fetch("https://m.taoke.com/mlearningapi.php", {
  "headers": {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": " Tk_b993__did_=29D9ACDFDA74DB9ED4C362E5EE5BA120; Tk_b993_pxb_current_lang=zh_cn; Tk_b993_saltkey=p5H4ommj; Tk_b993_get_root_company_id=69514; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1691201114,1691203275,1691207597,1691214053; Tk_b993_ip=1927169427; Tk_b993_pmauth=942agemDG%2F%2B8zT9UX%2FFUYtPHI2R8EODqjrEK8w3e16zpqMCAcS6vNPq9eXGR7R6c62wGGxyq25ArQLnnu%2FZAwaICcLatVzKO; Tk_b993_login_token=02F6B58318FF3585ED429B0BB386363E; Tk_b993_sid=NQeP8U; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1691388509; Tk_b993_lastvisit=1691384909",
    "Referer": "https://m.taoke.com//front_new/pxb/webapp/html/compete/compete.html?_pxb_=1691240863",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    // ios
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  },
  "body": "p=%5B%7B%22m%22%3A%22Mlearning%2FSelfCourse%2FLists%22%2C%22p%22%3A%7B%22page%22%3A1%2C%22cate_id%22%3A%220%22%2C%22searchkey%22%3A%22%22%2C%22wx_company_id%22%3A%2269514%22%2C%22orderby%22%3A%22ticket_num%22%2C%22filter%22%3A%7B%7D%2C%22match_id%22%3A%22451%22%2C%22sort%22%3A%22desc%22%7D%7D%5D&global_company_id=69514",
  "method": "POST"
});;

try {
  const response = await re.json();
  try {
    console.log(response.d[0].courses[0].vote_count);
    console.log(response.d[0].courses[1].vote_count );
    if(+response.d[0].courses[0].vote_count - +response.d[0].courses[1].vote_count > 600){
      send('616559837@qq.com',`${response.d[0].courses[0].vote_count - response.d[0].courses[1].vote_count }`)
      send('mengying.liu@bkchina.cn',`${response.d[0].courses[0].vote_count - response.d[0].courses[1].vote_count }` )
      send('18552561993@163.com' ,`${response.d[0].courses[0].vote_count - response.d[0].courses[1].vote_count }`)
    }
  } catch (error) {
    console.log('报错了');
  }

  console.log({response})
  const data = [['姓名', '课程名', '票数', '排名'], ...response.d[0].courses.map(item => [item.pxb_member_name,item.subject,item.ticket_num, item.rank])];
  const buffer = xlsx.build([{name: "mySheetName", data: data}]);
  fs.writeFileSync('./rank.xlsx', buffer, 'binary');
} catch (e) {
  console.log(re)
  console.log('err->', e)
}


  