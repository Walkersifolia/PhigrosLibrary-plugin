import fs from 'node:fs';

class GetData {
    async SessionToken(e) {
        const userid = `${e.user_id}`
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
        const stk = fs.readFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, 'utf-8');
        return stk
    }

    async SaveUrl(e) {

    }
}

export default new GetData