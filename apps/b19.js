import plugin from '../../../lib/plugins/plugin.js';
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
        const sessiontoken = await GetData.SessionToken(e)
        logger.info(sessiontoken)
        const player = await fetch(`http://127.0.0.1:9090/playerId/${sessiontoken}`)
        const ID = await player.text()
        logger.info(ID)
        const browser = await puppeteer.browserInit();
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:9091/index.html?name=' + ID + '#' + sessiontoken);
        setTimeout(async () => {
            await page.setViewport({ width: 1030, height: 3670 });
            const buff = await page.screenshot({
                clip: {
                    x: 0, y: 0, width: 1030, height: 2670
                }//x: 300, y: 1423, width: 675, height: 1800
            });
            await page.close();
            await e.reply(segment.image(buff));            
        }, 2000);
        return
    }
}

