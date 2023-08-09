import fetch from 'node-fetch';
const getLoginUserInfo = async function (userId) {
    if (!userId) {
        return null
    }
    return await fetch("https://m.taoke.com/?c=pxbmember&a=check_wx_identity&type=inajax", {
        "headers": {
        "accept": "application/json",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "6513f7__tk_=5C58CD16CF7C68DE286BAA9486807ED2; Hm_lvt_90ee19de2d738ed05c17c65ecf4ed34e=1691113619; Tk_b993__did_=29D9ACDFDA74DB9ED4C362E5EE5BA120; Tk_b993_pxb_current_lang=zh_cn; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1691113759,1691115528; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1691115626; PHPSESSID=162grqiimi0u2a9dq1he83kjn2",
        "Referer": "https://m.taoke.com//?c=pxbmember&a=check_wx_identity&wx_company_id=69514&backurl=https%3A%2F%2Fm.taoke.com%2F%2F%3Fc%3Dpeixunbao%26a%3Dmy_index%26wx_company_id%3D69514%26global_company_id%3D69514%26app_verison%3D4162%26auto_getting_count%3D1&lfrompxb=chekck_wx",
        "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `backurl=https%253A%252F%252Fm.taoke.com%252F%252F%253Fc%253Dpeixunbao%2526a%253Dmy_index%2526wx_company_id%253D69514%2526global_company_id%253D69514%2526app_verison%253D4162%2526auto_getting_count%253D1%2526t%253D18356626&wx_company_id=69514&user%5Bemployee_id%5D=${userId}&user%5Bpassword%5D=whopper&=1`,
        "method": "POST"
    }).then(res => res.json());
}

const getUserInfoByPxbMenberId = async function (pxbMenberId) {
    return await fetch("https://m.taoke.com/mlearningapi.php", {
        "headers": {
          "accept": "application/json",
          "accept-language": "zh-CN,zh;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
          "referrer-policy": "strict-origin-when-cross-origin",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://m.taoke.com//front_new/pxb/webapp/html/student/student.html?_pxb_=1691240863",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "p=%5B%7B%22m%22%3A%22Member%2FPersonInfo%22%2C%22p%22%3A%7B%22pxb_member_id%22%3A%2269482859%22%7D%7D%2C%7B%22m%22%3A%22Member%2FPersonalStudy%22%2C%22p%22%3A%7B%22personId%22%3A%2269482859%22%7D%7D%2C%7B%22m%22%3A%22Mlearning%2FGetShareList%22%2C%22p%22%3A%7B%22wx_company_id%22%3A%2269514%22%2C%22page%22%3A1%2C%22perpage%22%3A6%2C%22personId%22%3A%2269482859%22%7D%7D%2C%7B%22m%22%3A%22GetVerhash%22%2C%22p%22%3A%7B%22wx_company_id%22%3A3%7D%7D%5D&global_company_id=69514",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      }).then(res => res.json());
}

export {
    getLoginUserInfo,
    getUserInfoByPxbMenberId
}