import plugin from '../../../lib/plugins/plugin.js';
import { segment } from 'icqq';

const helptext =
  '欢迎使用PhigrosLibrary-Plugin\n' +
  '「/p help」获取本帮助\n' +
  '「/p bind xxxxxxxxxx」绑定25位的SessionToken，不建议群聊使用\n' +
  '「/p b19」获取自己的b19数据\n' +
  '「/p (expect|suggest)」获取自己有期望进b19的歌曲' +
  '「/p stk」查看自己的SessionToken，不建议群聊使用\n' +
  '「/p music 歌名」点Phigros的歌曲\n' +
  '「/p (getstk|bindhelp)」获取SessionToken的软件'

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
                },
                {
                    reg: '/p (getstk|bindhelp)',
                    fnc: 'getstk'
                }
            ]
        })
    }

    async help () {
        await this.reply(helptext)
    }

    async getstk () {
        const url = 'http://qxsky.top:886/externalLinksController/chain/getstk.apk?ckey=UbcekU4SrbrP56nuuJsjSG4sR6XVva0QpH6cgRxykQ%2BLVKfVVy1N9ftDKol27wSM'
        const title = '点此下载获取SessionToken所需的apk'
        const image = 'http://qxsky.top:89/img/icon.png'
        const content = '圈圈'
        await this.reply(segment.share(url,title,image,content))
    }
}
