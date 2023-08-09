/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-08-07 22:06:31
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-08-09 23:51:29
 * @FilePath: /bkchina/autoVote.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fetch from "node-fetch";
import { handle } from "./handle.js";
import { getCookie } from "./util.js";


const getUserInfo = async (page) => {
    console.log(`获取第${page}页数据`)
    const sendCookie = await getCookie();
    console.log({sendCookie})
    const courses = []
    try {
        const json =  await fetch("https://m.taoke.com/mlearningapi.php", {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": sendCookie,
            "Referer": "https://m.taoke.com//front_new/pxb/webapp/html/student/student.html?_pxb_=1690542979",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        },
        "body": `p=%5B%7B%22m%22%3A%22Points%2FRankingList%22%2C%22p%22%3A%7B%22qt%22%3A%2230%22%2C%22page%22%3A${page}%2C%22begintime%22%3A%22%22%2C%22endtime%22%3A%22%22%2C%22score_type%22%3A%22sum%22%7D%7D%5D&global_company_id=69514`,
        "method": "POST"
    }).then(res => res.json());

    if (json && json.d && json.d[0] && json.d[0].stu_list &&  json.d[0].stu_list.length) {
        courses.push(...json.d[0].stu_list.map(course => {
            return {
                chinese_name: course.chinese_name,
                department: course.department,
                employee_id: course.employee_id,
                position: course.position
            }
        }));
    }
    console.log(`获取${courses.length}条数据, 开始投票..`)
    for (let index = 0; index < courses.length; index++) {
        const course = courses[index];
        await handle(course.employee_id)
    }
    } catch (error) {
        console.log(error)
    }
    
}

let startPage = 1200;
let endPage = 1300;

for (let index = startPage; index <= endPage; index++) {
    await getUserInfo(index)
}



