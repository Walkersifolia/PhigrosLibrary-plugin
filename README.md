# PhigrosLibrary-Plugin
# 在研究github action，以后直接自动更新定数表（曲绘考虑写不写）
## 下了会报错，由于我调用的puppeteer模块喵崽并不自带，但是我又不常用喵崽，所以目前还在试图重写两个崽都能用的代码（直接把puppeteer塞插件里）
## 推荐移步[Catrong](https://github.com/catrong)的[phi-plugin](https://github.com/catrong/phi-plugin)项目，由于我是初学者所以写的并不是很好，功能也不是很多（逃
`PhigrosLibrary-Plugin`是基于`Yunzai-Bot V3`的功能插件，可以查询Phigros B19并生成成绩图，以及包含了一些其他的娱乐功能。

插件目前还暂时是半成品，因为是要测试跨域脚本和文件服务器，还没有添加配置项以及自动更新曲绘，想要尝鲜的可以下载，也请及时关注此仓库的更新。

# 腾讯我测你码

![~NK4TQZ2~J7~_LZ_1__CGBR_tmb](https://github.com/Walkersifolia/PhigrosLibrary-plugin/assets/129571444/081b9fee-bb49-48fa-be71-6e74f331152e)

# 单插件版本（.js）

如果不想要高清曲绘以及其他功能，可以下载单插件版本，单插件版本只有B19功能，然后放到`./plugins/example`文件夹

此版本由[@七星QXX](https://github.com/QiXingQXX)制作

[下载链接](https://github.com/QiXingQXX/Phigros-picture-generater)

## 安装插件
### 1.下载插件本体

在云崽根目录下打开Git Bash终端，运行
```bash
git clone https://github.com/Walkersifolia/PhigrosLibrary-plugin.git ./plugins/PhigrosLibrary-plugin
```

### 2.下载曲绘资源

在云崽根目录下打开Git Bash终端，运行
#### 想要高清曲绘执行（约500MB）
```bash
cd plugins/PhigrosLibrary-plugin/model/b19/res
git clone https://github.com/Walkersifolia/illustration.git ./illustration
```

#### 想要较低分辨率曲绘执行（约40MB）
```bash
cd plugins/PhigrosLibrary-plugin/model/b19/res
git clone https://github.com/Walkersifolia/illustrationLowRes.git ./illustration
```

### 3.下载音乐资源（约200MB）

啊还是在Yunzai根目录啊，执行
```bash
cd plugins/PhigrosLibrary-plugin/resources
git clone https://github.com/Walkersifolia/MusicLowRes.git ./music
```


### 4.下载PhigrosLibrary服务端

[PhigrosLibrary项目地址](https://github.com/7aGiven/PhigrosLibrary)

#### Windows用户
去Releases里，找到并下载下载名为`PhigrosRpc-3.x.x.x-jre17.zip`（版本号会更新，必须要带有jre17字样）的Release，解压之后放在任意地方，双击启动`start.cmd`，如果不想要窗口可以右键`start.cmd`，选择编辑，然后在最后一行换行输入`nogui`（当然我并不建议这么做因为开启服务端窗口能更好的检测到报错）

#### Linux用户
首先要装java运行环境，至少为java17，然后去Releases里，找到并下载名为`PhigrosRpc-3.x.x.x-nojre.zip`（版本号会更新，必须要带有nojre字样）的Release，解压之后放在任意地方，想办法运行`start.sh`，如果运行不了，注意看看.sh文件内启动的jar文件名字是否完全一样。如果提示`Permission denied`字样的执行`sudo chmod -R 777 ./PhigrosLibrary`，`PhigrosLibrary`为你存放服务端的路径，自己重命名了就改一下。（由于我不是Linux系统所以我没有试过，据说可以）

#### MacOS用户
我穷，用不起MacOS，身边也没有用户（

## 注意事项（必看！！！）
### 关于控制台报错

有时，控制台会报错`Error: net::ERR_CONNECTION_REFUSED`，这是由于文件服务器以及跨域脚本没有自动启用导致的，理论上来说Yunzai启动加载插件时会自动启动脚本，但出现此情况，你可以到插件文件夹去`./plugins/PhigrosLibrary-plugin/model/res/b19`手动点击`p-start.bat`启动，Linux系统在终端执行`sh ./p-start.sh`。

### 关于`p-start.bat`启动报错

由于一些奇怪而且我也不知道为什么的原因，启动跨域脚本时会出现缺失模块或者模块不可用的提示，可以点击下面的`运行p.js报错点我.bat`，如果连这个bat也报错了(理论上来说是不会的)，那请提issue或者直接加我QQ：903895182，然后好友申请信息说明情况，一般情况下只要没课我是高强度看QQ的。

### 关于Linux系统的使用

在进行了以上这些步骤之后，若您还有一些问题，这里或许可以帮到您。

1.在第四个步骤下载并运行服务端，若启动后提示`Error:Unable to access jarfile PhigrosRpc-3.xxx-all.jar`
请检查文件名`PhigrosRpc-3.xxx-all.jar`是否正确，另外请使用pm2/screen等后台存活程序使服务端文件保持后台运行(请自行百度

2.若启动服务端后云崽后台日志报错，请在云崽根目录执行`sh ./plugins/PhigrosLibrary/models/运行p.js报错点我.sh`待程序结束后再运行`sh ./plugins/PhigrosLibrary/models/p-start.sh`
也请您使他保持后台存活，另外请记得给这两个文件给予和上面`sudo chmod -R 777 ./文件名` 一样的文件的权限等级，不然也会报错




## 使用方法
### 指令列表
| 功能简述 | 指令 | 备注 |
| ------------------ | ------------------------------ | ------ |
|获取帮助|`/p help`|获取本帮助信息|
|绑定stk|`/p bind xxx`|xxx为25位的SessionToken，下面会讲到获取方法，本指令可以但不建议在群聊使用|
|B19成绩图|`/p b19`|根据绑定的SessionToken渲染B19成绩图，背景随机，底部credit栏的RGB渐变颜色随机，如果随机到了一个好看的背景以及一个好看的RGB渐变credit栏，记得保存下来炫耀，让我吸吸（bushi|
|重置第八章|`/p re8`|重置第八章解锁进度但不清除成绩，再体验一遍超酷的第八章异象（|
|查看data数|`/p data`|查看data数，以MB为单位显示，最多能获取并计算PB单位（但是正常人不开挂连TB都到不了吧|
|期望歌曲|`/p (expect/suggest)`|这里出现的歌曲不在B19里，但是达到了一定的acc就可以进入B19（推分专用）|
|查看stk|`/p stk`|查看已绑定的SessionToken，本指令可以但不建议在群聊使用|
|Phigros点歌|`/p music`|随机听Phigros的歌曲，还在研究MusicShare的xml消息（以后改|
|随机Tips|`/p tip`|随机发送一条Tip|
|获取stk|`/p (getstk/bindhelp)`|获取SessionToken的方法|
|以下为管理员命令|
|更新插件|`/p (force)update`|更新/强制更新本插件|
|安装/更新高清曲绘|`/p (force)high ill update`|安装（更新/强制更新）高清曲绘|
|安装/更新低分辨率曲绘|`/p (force)low ill update`|安装（更新/强制更新）低分辨率曲绘|
|安装/更新音乐资源|`/p (force)music update`|安装（更新/强制更新）音乐资源|

## 效果预览

### B19成绩图（技术太菜了，大佬轻喷）
![}Y7J X)J%)~QG KB KUWSTV](https://github.com/Walkersifolia/PhigrosLibrary-Plugin/assets/129571444/663318fb-ade1-4345-8661-956c7e0d7a6c)

## 特别感谢
B19 UI设计、单js插件版本制作、跨域脚本和文件服务器：[七星QXX](https://github.com/QiXingQXX)

PhigrosLibrary服务端：[万能の文酱](https://github.com/7aGiven)

## 声明
本项目仅供学习交流使用，严禁用于侵犯 `PHIGROS®`、`Phigros 玩家` 以及 `南京鸽游网络有限公司` 等主体的权益用途！
