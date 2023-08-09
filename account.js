import fetch from "node-fetch";
import xlsx from 'node-xlsx';
import fs from 'fs';
const courses = []
let page = 1;
const maxPage = 10;
const promiseList = [];
while(page <= maxPage) {
    const promise = fetch("https://m.taoke.com/mlearningapi.php", {
        "headers": {
          "accept": "application/json",
          "accept-language": "zh-CN,zh;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "6513f7__tk_=5C58CD16CF7C68DE286BAA9486807ED2; Hm_lvt_90ee19de2d738ed05c17c65ecf4ed34e=1691113619; Tk_b993__did_=29D9ACDFDA74DB9ED4C362E5EE5BA120; Tk_b993_pxb_current_lang=zh_cn; Tk_b993_saltkey=p5H4ommj; Tk_b993_get_root_company_id=69514; Tk_b993_ip=1927169434; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1691113759,1691115528,1691201114,1691203275; Tk_b993_pmauth=671ayN%2FMwNilOtJ6s%2B%2BrnvcWksCmm5srEl9Rc3C4yNgmLyjm5%2FSMM6%2BQ2p9Y9qPQ5DjA3Mnylfm7VNUcL2zT61aE9Phbavg; Tk_b993_login_token=D607E71BBDF2CDA7A6B87AD8C35A749C; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1691204916; Tk_b993_sid=N2Ke78; Tk_b993_lastvisit=1691201397",
          "Referer": "https://m.taoke.com//front_new/pxb/webapp/html/student/student.html?_pxb_=1690542979",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.6(0x1800062c) NetType/WIFI Language/zh_CN",
        },
        "body": `p=%5B%7B%22m%22%3A%22Points%2FRankingList%22%2C%22p%22%3A%7B%22qt%22%3A%2230%22%2C%22page%22%3A${page}%2C%22begintime%22%3A%22%22%2C%22endtime%22%3A%22%22%2C%22score_type%22%3A%22sum%22%7D%7D%5D&global_company_id=69514`,
        "method": "POST"
      }).then(res => res.json());
    promiseList.push(promise);
    page++;
}
Promise.all(promiseList).then(response => {
    response.forEach(json => {
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
    })

    const res = courses.sort((a, b) => {
        return a.rank - b.rank;
    })
    // 导出excel 姓名 工号 部门 职位
    const data = [['姓名', '工号', '部门', '职位'], ...res.map(item => [item.chinese_name,item.employee_id,item.department, item.position])];
    const buffer = xlsx.build([{name: "mySheetName", data: data}]);
    fs.writeFileSync('./user.xlsx', buffer, 'binary');
});


