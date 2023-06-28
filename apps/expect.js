import plugin from '../../../lib/plugins/plugin.js';
import fetch from 'node-fetch';
import GetData from '../model/userdata/getdata.js';
import common from "../../../lib/common/common.js";

export class expect extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-plugin',
            dsc: 'expect',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '^/p (expect|suggest)$',
                    fnc: 'expect'
                }
            ]
        })
    }

    async expect (e) {
        const url = await GetData.SaveUrl(e)
        const response = await fetch(`http://127.0.0.1:9090/expects/${url}`)
        const data = await response.json()
        let text = '';
        for (let i = 0; i < data.length; i++) {
            let songId = data[i].songId.split('.')[0];
            text += `${i+1}.《${songId}》「${data[i].level}」目前acc:${data[i].acc.toFixed(2)}%，推分所需acc:${data[i].expect.toFixed(2)}%\n`;
        }
        text = [text,]
        e.reply(await common.makeForwardMsg(this.e, text))
    }
}