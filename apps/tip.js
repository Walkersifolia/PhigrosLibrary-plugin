import plugin from '../../../lib/plugins/plugin.js';
import fs from 'fs';
import path from 'path';

export class RandomTip extends plugin {
    constructor() {
        super({
            name: '随机tip',
            dsc: '随机tip',
            event: 'message',
            priority: 5000,
            rule: [{
                reg: '^/p tip$',
                fnc: 'tip'
            }]
        })
    }

    async tip(e) {
        const filePath = new URL('../resources/tips.txt', import.meta.url);
        
        const tips= fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim() !== '');
        
        const randomIndex = Math.floor(Math.random() * tip.length);
        const randomTip = tip[randomIndex].trim();

        e.reply("Tip:" + randomTip);
        return true;
    }
}
