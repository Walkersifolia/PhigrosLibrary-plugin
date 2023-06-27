import plugin from '../../../lib/plugins/plugin.js';
import fs from 'node:fs';

export class data extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-plugin',
            dsc: 'data',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '/p data',
                    fnc: 'data'
                }
            ]
        })
    }

    async data (e) {
        const userid = `${e.user_id}`
        const sessiontoken = fs.readFileSync(`./plugins/PhigrosLibrary-plugin/data/userdata/${userid}.js`, 'utf-8');
    }
}