import plugin from '../../../lib/plugins/plugin.js';
import { segment } from "icqq";
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

export class RandomTips extends plugin {
    constructor() {
        super({
            name: '随机tips',
            dsc: '随机tips',
            event: 'message',
            priority: 5000,
            rule: [{
                reg: '^/p tips$',
                fnc: 'tips'
            }]
        })
    }

    async tips(e) {
        const filePath = new URL('../resources/tips.txt', import.meta.url);
        
        const tips = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim() !== '');
        
        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomTip = tips[randomIndex].trim();

        e.reply("Tips:" + randomTip);
        return true;
    }
}
