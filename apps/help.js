import plugin from '../../../lib/plugins/plugin.js';

const content =
  '欢迎使用PhigorsLibrary-Plugn\n' +
  '「/p help」获取本帮助\n' +
  '「/p bind xxxxxxxxxx」绑定25位的SessionToken，不建议群聊使用\n' +
  '「/p b19」获取自己的b19数据\n' +
  '「/p (expect|suggest)」获取自己有期望进b19的歌曲' +
  '「/p stk」查看自己的SessionToken，不建议群聊使用\n' +
  '「/p music 歌名」点Phigros的歌曲\n' +
  '「/p (getsk|bindhelp)」获取SessionToken的软件'

export class phigros extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-Plugin',
            dsc: 'help',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '/p help',
                    fnc: 'help'
                }
            ]
        })
    }

    async help () {
        await this.reply(content)
    }
}