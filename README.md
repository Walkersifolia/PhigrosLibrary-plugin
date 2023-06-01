# PhigrosLibrary-Plugin
`PhigrosLibrary-Plugin`是基于`Yunzai-Bot V3`的功能插件，可以查询Phigros B19并生成成绩图，以及包含了一些其他的娱乐功能
# 单插件版本（.js）

如果不想要高清曲绘，以及其他功能，可以下载单插件版本，然后放到`./plugins/example`文件夹

此版本由[@七星QXX](https://github.com/QiXingQXX)制作

[下载链接](https://github.com/QiXingQXX/Phigros-picture-generater)

## 安装插件
#### 1.下载插件本体

在云崽根目录下打开Git Bash终端，运行
```bash
git clone https://github.com/Walkersifolia/PhigrosLibrary-Plugin.git ./plugins/PhigrosLibrary-Plugin
```

#### 2.下载曲绘资源

不要关闭Git Bash终端，继续运行
```bash
cd plugins/PhigrosLibrary-Plugin/resources
git clone https://github.com/Walkersifolia/illustration.git ./illustration
```

#### 3.下载音乐资源（可选，但不建议选）

全部的音乐资源，全曲约占用4.4GB，目前还在找可靠的下载及存放方式

#### 4.下载PhigrosLibrary服务端

[PhigrosLibrary项目地址](https://github.com/7aGiven/PhigrosLibrary)

去Releases里，找到并下载下载名为`PhigrosRpc-3.x.x.x-jre17.zip`（版本号会更新，主要是要带jre-17）的Release，解压之后放在任意地方，双击启动`start.cmd`，如果不想要窗口可以右键`start.cmd`，选择编辑，然后在最后一行换行输入`nogui`（当然我并不建议这么做因为开启服务端窗口能更好的检测到报错）

## 使用方法
#### 指令列表
| 功能简述 | 指令 | 备注 |
| ------------------ | ------------------------------ | ------ |
|获取帮助|`/p help`|获取本帮助信息|
|绑定stk|`/p bind xxx`|xxx为25位的SessionToken，下面会讲到获取方法，本指令可以但不建议在群聊使用|
|B19成绩图|`/p b19`|根据绑定的SessionToken渲染B19成绩图|
|期望歌曲|`/p (expect/suggest)`|这里出现的歌曲不在B19里，但是达到了一定的acc就可以进入B19（推分专用）|
|查看stk|`/p stk`|查看已绑定的SessionToken，本指令可以但不建议在群聊使用|
|Phigros点歌|`/p music`|制作中，暂未完成|
|获取stk|`/p (getstk/bindhelp)`|获取SessionToken的方法|
|XXXXXXXXXX|XXXXXXXXXXXXXXXXXXXX|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|

## 效果预览

#### B19成绩图（技术太菜了，大佬轻喷）
![}Y7J X)J%)~QG KB KUWSTV](https://github.com/Walkersifolia/PhigrosLibrary-Plugin/assets/129571444/663318fb-ade1-4345-8661-956c7e0d7a6c)

