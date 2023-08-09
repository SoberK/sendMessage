import fetch from "node-fetch";

export const getCookie = async () => {
  const userId = 2009999
  let loginRes = await fetch("https://m.taoke.com/?c=pxbmember&a=check_wx_identity&type=inajax", {
    "headers": {
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "Tk_b993_pxb_current_lang=zh_cn; Tk_b993__did_=B00186D9B59C7025813068465731B415; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1691408545; Tk_b993_saltkey=zOXb1q2A; Tk_b993_get_root_company_id=69514; Tk_b993_pmauth=60d1hc8dUfdGdV1rStsrUQphlsaObLK0JrG52AZWPWBm0DEu1JkQzay3spfuD8T3Raa5unwps8E9KLqiDudoAVecj32o69M; Tk_b993_login_token=4AD843A7EE7FC84C412D2FC1954D1DB8; Tk_b993_ip=1927169427; Tk_b993_sid=8c1dtD; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1691409361; Tk_b993_lastvisit=1691405761",
      "Referer": "https://m.taoke.com/front_new/pxb/webapp/html/student/index.html",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Host": "m.taoke.com",
      "Origin": "https://m.taoke.com",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    },
    "body": "backurl=https%253A%252F%252Fm.taoke.com%252Ffront_new%252Fpxb%252Fwebapp%252Fhtml%252Fstudent%252Findex.html%2523%252Findex%253Fwx_company_id%253D69514%2526t%253D95089959%2526t%253D86769376%2526t%253D24587653%2526t%253D34701249%2526t%253D43776516%2526__pxb%253D1691408747649%2526__pxb%253D1691408869336%2526__pxb%253D1691408965643%2526__pxb%253D1691409006409%2526__pxb%253D1691409050358%2526t%253D72270593&wx_company_id=69514&user%5Bemployee_id%5D=2009999&user%5Bpassword%5D=whopper&=1",
    // "body": "backurl=https%253A%252F%252Fm.taoke.com%252F%252Ffront_new%252Fpxb%252Fwebapp%252Fhtml%252Fstudent%252Fprofile.html%2523%252Findex%253Fwx_company_id%253D69514%2526hide_back%253Dtrue%2526bottom_menu%253Dtrue%2526currentView%253Dprofile%2526bottomId%253D656%2526navName%253D%2525E6%252588%252591%2525E7%25259A%252584%2526t%253D55880168%2526t%253D76171423&wx_company_id=69514&user%5Bemployee_id%5D=2009999&user%5Bpassword%5D=whopper&=1",
    "method": "POST",
    // ios
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  })
  loginRes = await fetch("https://m.taoke.com/?c=pxbmember&a=check_wx_identity&type=inajax", {
    "headers": {
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "referrer-policy": "strict-origin-when-cross-origin",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": `6513f7__tk_=5C58CD16CF7C68DE286BAA9486807ED2; Hm_lvt_90ee19de2d738ed05c17c65ecf4ed34e=1691113619; Tk_b993__did_=29D9ACDFDA74DB9ED4C362E5EE5BA120; Tk_b993_pxb_current_lang=zh_cn; Tk_b993_saltkey=p5H4ommj; Tk_b993_get_root_company_id=69514; Tk_b993_ip=1927169427; PHPSESSID=di85o881u84ckkmtrrnoh71bs6; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1691404148; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1691404148; Tk_b993_pmauth=905cpURa1laGLtoXrJ9%2B%2FXY2vJlsspkfbxn10x0C%2BPmtfJJ0wTR2H%2BWeeIpT%2F9E4nxTgvHwHA4JAO3%2F2sZ1%2FwxVuUaGVAF4; Tk_b993_login_token=3042BDFFC6EF1136F9D69BDA4FEF2E79`,
      "Referer": "https://m.taoke.com/?c=pxbmember&a=check_wx_identity&wx_company_id=69514&logoff=1&is_super=0&backurl=https%3A%2F%2Fm.taoke.com%2F%2Flearning%2F69514%3Flogoff%3D1",
      "Origin": "https://m.taoke.com",
      "Host": "m.taoke.com",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    },
    "body": `backurl=https%253A%252F%252Fm.taoke.com%252F%252Flearning%252F69514%253Flogoff%253D1&wx_company_id=69514&user%5Bemployee_id%5D=${userId}&user%5Bpassword%5D=whopper&=1`,
    "method": "POST"
  })
const loginJson = await loginRes.json();
const cookie = loginRes.headers.get('set-cookie');
/**
 * 登录返回 cookie： Tk_b993_saltkey=QWeApZ17; expires=Sun, 03-Sep-2023 02:42:03 GMT; Max-Age=2592000; path=/; domain=.taoke.com; secure; HttpOnly, Tk_b993_get_root_company_id=69514; expires=Thu, 02-Nov-2023 02:42:03 GMT; Max-Age=7776000; path=/; domain=.taoke.com; secure; HttpOnly, Tk_b993_pmauth=8033AssHMoE0sLYZp1knJfzV9tuYyN4MEBT5vCLajxl%2BdPxcjPBhbhyAWUpOkn4%2FlyRLNsYmsiTZ%2B9iXjUh8QijVjFvjAj2O; expires=Tue, 03-Oct-2023 02:42:03 GMT; Max-Age=5184000; path=/; domain=.taoke.com; secure, Tk_b993_login_token=5390B8707F55CDFE783F5F768F84C85B; expires=Tue, 03-Oct-2023 02:42:03 GMT; Max-Age=5184000; path=/; domain=.taoke.com; secure, Tk_b993_loginuser=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=.taoke.com; secure, Tk_b993_activationauth=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=.taoke.com; secure, Tk_b993_pmnum=deleted; expires=Thu, 01-Jan-1970 00:00:01 GMT; Max-Age=0; path=/; domain=.taoke.com; secure, Tk_b993_get_root_company_id=69514; expires=Thu, 02-Nov-2023 02:42:03 GMT; Max-Age=7776000; path=/; domain=.taoke.com; secure
 */
// 最终下一个接口需要cookie      cookie: "6513f7__tk_=5C58CD16CF7C68DE286BAA9486807ED2; Hm_lvt_90ee19de2d738ed05c17c65ecf4ed34e=1691113619; Tk_b993__did_=29D9ACDFDA74DB9ED4C362E5EE5BA120; Tk_b993_pxb_current_lang=zh_cn; Hm_lvt_b6eb0dc231f74e6997145ce2b07d7e04=1691113759,1691115528; PHPSESSID=162grqiimi0u2a9dq1he83kjn2; Tk_b993_saltkey=p5H4ommj; Tk_b993_get_root_company_id=69514; Tk_b993_pmauth=af66hZU0isECNmGs0ANmQsLAUn2JhJbvZhshcJh7EwXSK2zbGgGWhNqiPnp00VHGF9VGoOycJmYkLY698cU5rpqXjFfWKIjC; Tk_b993_login_token=BDF38A8985B13951E386EF56C80F9C8A; Tk_b993_ip=1927169434; Tk_b993_sid=s7Nafx; Hm_lpvt_b6eb0dc231f74e6997145ce2b07d7e04=1691116797; Tk_b993_lastvisit=1691113197",

// 使用登录接口返回的cookie  构造下一个接口的cookie
 
const Tk_b993__did_ = '29D9ACDFDA74DB9ED4C362E5EE5BA120'
// console.log({cookie})
/**
 * cookie: Tk_b993_get_root_company_id=69514; expires=Sun, 05-Nov-2023 12:03:46 GMT; Max-Age=7776000; path=/; domain=.taoke.com; SameSite=None; Secure; HttpOnly, Tk_b993_get_root_company_id=69514; expires=Sun, 05-Nov-2023 12:03:46 GMT; Max-Age=7776000; path=/; domain=.taoke.com; SameSite=None; Secure; HttpOnly, Tk_b993_lastvisit=1691406226; expires=Wed, 06-Sep-2023 12:03:46 GMT; Max-Age=2592000; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_ip=1927169427; expires=Sun, 05-Nov-2023 12:03:46 GMT; Max-Age=7776000; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_sid=QqFrHC; expires=Tue, 08-Aug-2023 12:03:46 GMT; Max-Age=86400; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_saltkey=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_get_root_company_id=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_ip=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_pmauth=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_sid=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_lastvisit=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_login_token=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_pmauth=b2f0byjChOTozJq%2F8i76ghnYfmzUOIBDpN9GsXmSPgqD2NU6aXZq%2Bn0WmhmAWE0JbaiVP3n57bi0gTkG%2BtI6VcSaAOa9S%2B8; expires=Fri, 06-Oct-2023 12:03:46 GMT; Max-Age=5184000; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_login_token=99B115145DA109E7E5B087426798BEE9; expires=Fri, 06-Oct-2023 12:03:46 GMT; Max-Age=5184000; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_loginuser=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_activationauth=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_pmnum=; expires=Sun, 07-Aug-2022 12:03:46 GMT; Max-Age=0; path=/; domain=.taoke.com; SameSite=None; Secure, Tk_b993_get_root_company_id=69514; expires=Sun, 05-Nov-2023 12:03:46 GMT; Max-Age=7776000; path=/; domain=.taoke.com; SameSite=None; Secure
 */
//正则 获取到cookie Tk_b993_saltkey 和 Tk_b993_pmauth 的值,排除 'Tk_b993_pmauth=;'
const reg = /Tk_b993_saltkey=(.*?);.*Tk_b993_pmauth=(.*?);/g
const regRes = reg.exec(cookie)
if (!regRes || regRes.length < 3) {
  return ''
}
const Tk_b993_saltkey = regRes[1] || 'p5H4ommj'
const Tk_b993_pmauth = regRes[2]



const sendCookie = `Tk_b993__did_=${Tk_b993__did_};Tk_b993_saltkey=${Tk_b993_saltkey};Tk_b993_pmauth=${Tk_b993_pmauth};`
return sendCookie
}
