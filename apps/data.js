import plugin from '../../../lib/plugins/plugin.js';
import GetData from '../model/userdata/getdata.js';

export class data extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-plugin',
            dsc: 'data',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '^/p data$',
                    fnc: 'data'
                }
            ]
        })
    }

    async data (e) {
        const url = await GetData.SaveUrl(e)
        //logger.mark(url)
        const response = await fetch(`http://127.0.0.1:9090/data/${url}`)
        const textdata = await response.text()
        const numbers = textdata.split(',').map(Number)
        const result = (numbers[2] * 1024 + numbers[1]) + (numbers[0] / 1024)
        const data = result.toFixed(2)
        e.reply(`你当前拥有${data}MB`)
    }
}