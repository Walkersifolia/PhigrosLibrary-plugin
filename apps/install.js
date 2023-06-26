import plugin from '../../../lib/plugins/plugin.js'
import { createRequire } from 'module'
import _ from 'lodash'
import fs from 'fs'

const _path = process.cwd()
const require = createRequire(import.meta.url)
const { exec, execSync } = require('child_process')
const illresPath = `${_path}/plugins/PhigrosLibrary-plugin/model/b19/res/illustration/`
const musicPath = `${_path}/plugins/PhigrosLibrary-plugin/resources/music/`

const checkAuth = async function (e) {
  if (!e.isMaster) {
    e.reply(`只有主人才能使用该命令哦~`)
    return false
  }
  return true
}

// 是否在更新中
let uping = false

/**
 * 处理更新
 */
export class Update extends plugin {
  constructor () {
    super({
      name: 'phigros资源安装',
      event: 'message',
      priority: 1000,
      rule: [
        {
          reg: `^/*p (force )?high ill update$`,
          fnc: 'updateillHiRes',
          desc: '更新高清曲绘'
        },
        {
          reg: `^/*p (force )?low ill update$`,
          fnc: 'updateillLowRes',
          desc: '更新低分辨率曲绘'
        },
        {
          reg: `^/*p (force )?music update$`,
          fnc: 'updateMusic',
          desc: '更新音乐资源'
        }
      ]
    })
  }

  async updateillHiRes(e) {
    if (!await checkAuth(e)) {
      return true
    }
    let isForce = e.msg.includes('force ')
    let command = ''
    if (fs.existsSync(`${illresPath}`)) {
      e.reply('开始尝试更新，请耐心等待~')
      command = 'git pull'
      if (isForce) {
        command = 'git  checkout . && git  pull'
      }
      exec(command, {cwd: `${illresPath}`}, function (error, stdout, stderr) {
        console.log(stdout)
        if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
          e.reply('目前所有图片都已经是最新了~')
          return true
        }
        let numRet = /(\d*) files changed,/.exec(stdout)
        if (numRet && numRet[1]) {
          e.reply(`报告主人，更新成功，此次更新了${numRet[1]}个图片~`)
          return true
        }
        if (error) {
          e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。')
        } else {
          e.reply('高清曲绘更新成功~')
        }
      })
    } else {
      command = `git clone https://github.com/Walkersifolia/illustration.git "${illresPath}" --depth=1`
      e.reply('开始尝试安装高清曲绘，可能会需要一段时间，请耐心等待~')
      exec(command, function (error, stdout, stderr) {
        if (error) {
          e.reply('高清曲绘安装失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。')
        } else {
          e.reply('高清曲绘安装成功！您后续也可以通过 /p high ill update 命令来更新图像')
        }
      })
    }
    return true
  }
  
    async updateillLowRes(e) {
    if (!await checkAuth(e)) {
      return true
    }
    let isForce = e.msg.includes('force ')
    let command = ''
    if (fs.existsSync(`${illresPath}`)) {
      e.reply('开始尝试更新，请耐心等待~')
      command = 'git pull'
      if (isForce) {
        command = 'git  checkout . && git  pull'
      }
      exec(command, {cwd: `${illresPath}`}, function (error, stdout, stderr) {
        console.log(stdout)
        if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
          e.reply('目前所有图片都已经是最新了~')
          return true
        }
        let numRet = /(\d*) files changed,/.exec(stdout)
        if (numRet && numRet[1]) {
          e.reply(`报告主人，更新成功，此次更新了${numRet[1]}个图片~`)
          return true
        }
        if (error) {
          e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。')
        } else {
          e.reply('低分辨率曲绘更新成功~')
        }
      })
    } else {
      command = `git clone https://github.com/Walkersifolia/illustrationLowRes.git "${illresPath}" --depth=1`
      e.reply('开始尝试安装低分辨率曲绘，可能会需要一段时间，请耐心等待~')
      exec(command, function (error, stdout, stderr) {
        if (error) {
          e.reply('低分辨率曲绘安装失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。')
        } else {
          e.reply('低分辨率曲绘安装成功！您后续也可以通过 /p low ill update 命令来更新图像')
        }
      })
    }
    return true
  }
  
      async updateMusic(e) {
    if (!await checkAuth(e)) {
      return true
    }
    let isForce = e.msg.includes('force ')
    let command = ''
    if (fs.existsSync(`${musicPath}`)) {
      e.reply('开始尝试更新，请耐心等待~')
      command = 'git pull'
      if (isForce) {
        command = 'git  checkout . && git  pull'
      }
      exec(command, {cwd: `${musicPath}`}, function (error, stdout, stderr) {
        console.log(stdout)
        if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
          e.reply('目前所有音乐资源都已经是最新了~')
          return true
        }
        let numRet = /(\d*) files changed,/.exec(stdout)
        if (numRet && numRet[1]) {
          e.reply(`报告主人，更新成功，此次更新了${numRet[1]}个音乐资源~`)
          return true
        }
        if (error) {
          e.reply('更新失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。')
        } else {
          e.reply('音乐资源更新成功~')
        }
      })
    } else {
      command = `git clone https://github.com/Walkersifolia/illustrationLowRes.git "${musicPath}" --depth=1`
      e.reply('开始尝试安装音乐资源，可能会需要一段时间，请耐心等待~')
      exec(command, function (error, stdout, stderr) {
        if (error) {
          e.reply('音乐资源安装失败！\nError code: ' + error.code + '\n' + error.stack + '\n 请稍后重试。')
        } else {
          e.reply('音乐资源安装成功！您后续也可以通过 /p music update 命令来更新音乐资源')
        }
      })
    }
    return true
  }
  /**
   * 处理更新失败的相关函数
   * @param {string} err
   * @param {string} stdout
   * @returns
   */
  async gitErr (err, stdout) {
    let msg = '更新失败！'
    let errMsg = err.toString()
    stdout = stdout.toString()

    if (errMsg.includes('Timed out')) {
      let remote = errMsg.match(/'(.+?)'/g)[0].replace(/'/g, '')
      await this.reply(msg + `\n连接超时：${remote}`)
      return
    }

    if (/Failed to connect|unable to access/g.test(errMsg)) {
      let remote = errMsg.match(/'(.+?)'/g)[0].replace(/'/g, '')
      await this.reply(msg + `\n连接失败：${remote}`)
      return
    }

    if (errMsg.includes('be overwritten by merge')) {
      await this.reply(
        msg +
        `存在冲突：\n${errMsg}\n` +
        '请解决冲突后再更新，或者执行/p force (high/low ill)/music update，放弃本地修改'
      )
      return
    }

    if (stdout.includes('CONFLICT')) {
      await this.reply([
        msg + '存在冲突\n',
        errMsg,
        stdout,
        '\n请解决冲突后再更新，或者执行/p force (high/low ill)/music update，放弃本地修改'
      ])
      return
    }

    await this.reply([errMsg, stdout])
  }

  /**
   * 异步执行git相关命令
   * @param {string} cmd git命令
   * @returns
   */
  async execSync (cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, { windowsHide: true }, (error, stdout, stderr) => {
        resolve({ error, stdout, stderr })
      })
    })
  }

  /**
   * 检查git是否安装
   * @returns
   */
  async checkGit () {
    let ret = await execSync('git --version', { encoding: 'utf-8' })
    if (!ret || !ret.includes('git version')) {
      await this.reply('请先安装git')
      return false
    }
    return true
  }
}
