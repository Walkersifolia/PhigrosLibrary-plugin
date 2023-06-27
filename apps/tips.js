import plugin from '../../../lib/plugins/plugin.js';
import { segment } from "icqq";
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

export class TipsPlugin extends plugin {
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
        // 构建 tips.txt 文件的路径
        const filePath = new URL('../resources/tips.txt', import.meta.url);

        // 读取 tips.txt 文件的内容
        const tips = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim() !== '');

        // 随机选择一行提示
        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomTip = tips[randomIndex].trim();

        e.reply(randomTip);
        return true;
    }
}
