import plugin from '../../../lib/plugins/plugin.js';
import fs from 'fs';
import path from 'path';
import { segment } from 'icqq';

export class phigros extends plugin{
    constructor() {
        super({
            name: 'PhigrosLibrary-Plugin',
            dsc: 'music',
            event: 'message',
            priority: 5000,
            rule: [
                {
                    reg: '/p music',
                    fnc: 'music'
                }
            ]
        })
    }

    async music () {
        const folderPath = './plugins/PhigrosLibrary-plugin/resources/music';
        const files = fs.readdirSync(folderPath).filter(file => path.extname(file) === '.mp3');
        const randmusic = files[Math.floor(Math.random() * files.length)];
        logger.mark(randmusic)
        await this.reply(segment.record(`./plugins/PhigrosLibrary-plugin/resources/music/${randmusic}`))
    }
}