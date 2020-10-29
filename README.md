# 原生微信小程序 项目模板

## 项目简介
```
1.模板适用于快速搭建原生微信小程序项目开发使用
2.技术栈 原生微信小程序
3.模板初始中共有5个分包可继续添加,注意单包大小不得超过2M,整包大小(包括主包在内)不得大于微信限制[在小程序IDE右上角详情查看'项目配置 - 高级配置']
4.模板分包中初始定义了一个testA文件,当分包真正被使用后含有至少一个文件,可自行删除test文件夹
5.对请求进行初步封装,可根据开发版,体验版,正式版自动切换对应配置的请求API域名详情(详情请看'/utils/request'了解)
6.模板中已使用 Parser富文本插件 
    实用功能示例 <parser html="{{ html }}" tag-style="{{ tagStyle }}"/>
    data 中定义 tagStyle:{ video: 'width: 100%;' } 设置富文本插件内 标签样式设置
    插件官网地址: https://jin-yufeng.github.io/Parser/#/
```

### vsCode IDE完美支持less(需要sass,stylus自行扩展)
```
1.确保你的vsCode IDE有安装 Easy LESS 插件
2.git clone 模板后在 vsCode IDE 中开发微信小程序,在app.json中建立新路由,小程序IDE刷新编译,当小程序IDE帮你建立新页面后wxss新建同级同名less文件,less文件编辑保存,自动编译成wxss文件了!
3.模板文件中的 .vscode 文件为 vsCode IDE 的配置文件感兴趣的同学自行研究
```

### 模板中的状态管理器 
```
1.全局状态 state 支持所有 Page 和 Component，更新时使用独有 diff 能力，性能更强
2.周期监听 pageListener 能监听所有页面的 onLoad、onShow 等周期事件，方便埋点、统计等行为
3.全局事件 methods，一处声明，所有 wxml 直接可用的函数
4.适合原生小程序，即使后期引入，也只需增加几行代码
5.更多详细介绍请访问插件官网地址: https://github.com/xiaoyao96/wxMiniStore
6.后期更新扩展 -------- 持久化状态管理(示例场景:如登陆信息存储,小程序回收后再次进入读取登陆状态token等) 
```

### 任何问题或有误人子弟的地方还请多多指教
```
Author: Gavin
QQ: 3020990880
WeChat: Gavinpeng0831
Email: Gavinpengemall@vip.qq.com
Des: If you don't go forward, you don't know the distance; if you don't study hard, you don't understand the truth.
```