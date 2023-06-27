import fs from 'node:fs';

class GetData {
    async SessionToken(e) {
        const userid = `${e.user_id}`
        process.on("uncaughtException", function (err) {
            logger.erro(err)
        })
        try {
            const test = fs.readFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, 'utf-8');
        } catch (err) {
            e.reply('尚未绑定SessionToken，请发送“/p bind xxxxxxxxxx”来绑定Phigros账号')
        }
        const stk = fs.readFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, 'utf-8');
        return stk
    }

    async SaveUrl(e) {
        const stk = await this.SessionToken(e)
        const response = await fetch(`http://127.0.0.1:9090/saveUrl/${stk}`)
        const data = await response.json()
        const url = data.saveUrl
        return url
    }
}

export default new GetData