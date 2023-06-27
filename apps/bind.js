import plugin from '../../../lib/plugins/plugin.js';
import fs from 'node:fs';

export class bind extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-plugin',
            dsc: 'bind',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '^/p bind ',
                    fnc: 'bind'
                }
            ]
        })
    }

    async bind (e) {
        let sessiontoken = (e + "").replace('/p bind ', '')
        if (sessiontoken.length == 25) {
            logger.mark(sessiontoken)
            const userid = `${e.user_id}`
            logger.mark(userid)
            //写入SessionToken数据文件
            fs.writeFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, sessiontoken);
            await e.reply('绑定成功！')
        }else{
            e.reply("SessionToken长度错误，应为25位而不是 " + sessiontoken.length + " 位")
        }
        
    }
}