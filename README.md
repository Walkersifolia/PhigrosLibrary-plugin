# PhigrosLibrary-Plugin
`PhigrosLibrary-Plugin`是基于`Yunzai-Bot V3`的功能插件，可以查询Phigros B19并生成成绩图，以及包含了一些其他的娱乐功能
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

## 使用方法
#### 指令列表
| 功能简述 | 指令 | 备注 |
|------| ---- | ------ |
|获取帮助|/p help|获取本帮助信息|
|绑定stk|/p bind xxx|xxx为25位的SessionToken，下面会讲到获取方法，本指令可以但不建议在群聊使用|
|B19成绩图|/p b19|根据绑定的SessionToken渲染B19成绩图|
|期望歌曲|/p (expect|suggest)|这里出现的歌曲不在B19里，但是达到了一定的acc就可以进入B19（推分专用）|
|查看stk|/p stk|查看已绑定的SessionToken，本指令可以但不建议在群聊使用|
|点Phigros歌曲|/p music|制作中，暂未完成|
|获取stk|/p (getstk|bindhelp)|获取SessionToken的方法|

## 效果预览

#### B19成绩图
![}Y7J X)J%)~QG KB KUWSTV](https://github.com/Walkersifolia/PhigrosLibrary-Plugin/assets/129571444/663318fb-ade1-4345-8661-956c7e0d7a6c)

