/*
 * @Author: 孔繁荣 1924106306@qq.com
 * @Date: 2023-08-10 00:12:56
 * @LastEditors: 孔繁荣 1924106306@qq.com
 * @LastEditTime: 2023-08-10 00:29:31
 * @FilePath: /bkchina/sendMessage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
export const send = async (email,content) => {
    const transporter = await nodemailer.createTransport({
        service: 'QQ', // 发送者的邮箱厂商
        secureConnection: true, // SSL安全链接
        auth: {
            //发送者的账户密码
            user: "1924106306@qq.com", //账户
            pass: 'mxtxfsszagxxbehj', //smtp授权码，到邮箱设置下获取
        },
    });
    const info = await transporter.sendMail({
        from: 'kfr<1924106306@qq.com>', // 发送者昵称和地址
        to:email, // 接收者的邮箱地址
        subject: 'LightWorld', // 邮件主题
        html:content,
    });
    console.log('Message sent: %s', info.messageId);
};
