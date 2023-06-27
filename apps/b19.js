import plugin from '../../../lib/plugins/plugin.js';
import fs from 'node:fs';
import puppeteer from '../../../lib/puppeteer/puppeteer.js';
import fetch from 'node-fetch';
import GetData from '../model/userdata/getdata.js';

export class b19 extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-plugin',
            dsc: 'b19',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '^/p b19$',
                    fnc: 'b19'
                }
            ]
        })
    }

    async b19 (e) {
        /*const userid = `${e.user_id}`
        //Node.js的uncaughtException事件处理程序
        process.on("uncaughtException", function (err) {
            logger.erro(err)
        })
        //检测是否绑定SessionToken，如未绑定，提示绑定
        try {
            const test = fs.readFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, 'utf-8');
        } catch (err) {
            e.reply('尚未绑定SessionToken，请发送“/p bind xxxxxxxxxx”来绑定Phigros账号')
        }
        //读取用户SessionToken数据
        const sessiontoken = fs.readFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, 'utf-8');
        logger.info(sessiontoken)*/
        //获取玩家ID
        const sessiontoken = await GetData.SessionToken(e)
        logger.info(sessiontoken)
        const player = await fetch(`http://127.0.0.1:9090/playerId/${sessiontoken}`)
        const ID = await player.text()
        logger.info(ID)
        // 使用 puppeteer 库初始化浏览器
        const browser = await puppeteer.browserInit();
        // 打开一个新页面
        const page = await browser.newPage();
        // 导航到特定 URL
        await page.goto('http://127.0.0.1:9091/index.html?name=' + ID + '#' + sessiontoken);
        // 截取页面图像
        setTimeout(async () => {
            await page.setViewport({ width: 1030, height: 3670 });
            const buff = await page.screenshot({
                clip: {
                    x: 0, y: 0, width: 1030, height: 2670
                }//x: 300, y: 1423, width: 675, height: 1800
            });
            // 关闭页面
            await page.close();
            // 回复图像数据
            await e.reply(segment.image(buff));            
        }, 2000);
        return
    }
}

