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
            fetch(`http://127.0.0.1:9090/saveUrl/${sessiontoken}`)
            .then(res => res.text())
            .then(text => {
            if (text === "存档不存在") {
                e.reply("SessionToken错误，请确保自己获取了正确的SessionToken")
            } else {
            fs.writeFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, sessiontoken);
            e.reply('绑定成功！')
            }
        })
        }else{
            e.reply("SessionToken长度错误，应为25位而不是 " + sessiontoken.length + " 位")
        }
    }
}