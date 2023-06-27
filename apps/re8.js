import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import GetData from '../model/userdata/getdata.js';

export class re8 extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-plugin',
            dsc: 're8',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '^/p re8$',
                    fnc: 're8'
                }
            ]
        })
    }

    async re8 (e) {
        const sessiontoken = await GetData.SessionToken(e)
        const response = await fetch(`http://127.0.0.1:9090/8/${sessiontoken}`)
        const text = await response.text()
        if (text === 'OK') {
            e.reply('重置成功，请进入游戏下载云端存档，云存档课题分显示白色为正常情况，请放心下载',true)
        } else {
            e.reply('重置失败')
        }
    }
}