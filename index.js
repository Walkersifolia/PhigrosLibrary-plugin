//导入node:fs模块
import fs from 'node:fs';
import { exec } from 'child_process'

fs.readFile('./plugins/PhigrosLibrary-plugin/data/userdata/start.js', 'utf-8', (err, data) => {
    if (err) throw err;
    logger.info(data)
});

//输出提示
logger.info('----------(*ˉ︶ˉ*)----------')
logger.info('欢迎使用PhigrosLibrary-plugin')
logger.info('作者: WalkerTian')
logger.info('我的插件没有BUG！都是特性！特性！(｡ì _ í｡)')
logger.info('修复了的才叫BUG！没修复的一律是特性～(*¯︶¯*)')
logger.info('作者QQ: 903895182')
logger.info('欢迎来找我反馈以及提需求')
logger.info('----------(*ˉ︶ˉ*)----------')

//加载插件
const files = fs.readdirSync('./plugins/PhigrosLibrary-plugin/apps').filter(file => file.endsWith('.js'))

//启动本插件所需的html跨域脚本及文件服务器
exec('./plugins/PhigrosLibrary-plugin/model/b19/p-start.bat');

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})


ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status != 'fulfilled') {
      logger.error(`载入插件错误：${logger.red(name)}`)
      logger.error(ret[i].reason)
      continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}


export { apps }
