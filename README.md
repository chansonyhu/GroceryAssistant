**本项目纯属学习使用，不可用作商业行为  
任何违法违规造成的问题与本人无关  
如果问题可联系本人进行删除**

只针对安卓手机  

# 使用
主要依赖于 AutoJsPro 开发 https://pro.autojs.org/  
相关调试文档可参考 https://pro.autojs.org/docs/#/zh-cn/?id=%e7%bb%bc%e8%bf%b0  

## PC端  
安装 vscode https://code.visualstudio.com/  
添加插件 Auto.js-Pro-Ext / hyb1996.auto-js-pro-ext

## Android端  
安装 APK https://pro.autojs.org/

## 如何连接
https://blog.autojs.org/2021/07/05/vscode-debug/



# 可能出现的问题
## 1.响应时间  
也就是代码中的 sleep(interval) 这里指等待10毫秒 即1秒100次 如果网速不行或者手机不行 可以适当调整到100/200/300/400/500  
## 2.App版本/各地区活动问题  
可能会导致部分 depth(X) 不太正常 需要针对app当前情况进行调整
## 3.AutoJs版本问题
上面网址所提到的官网版本在小米/华为/腾讯应用商店均可直接下载 安全无毒 但是有收费功能  
网上有4.11版本的免费版本 但是可能存在一定风险 请大家自行甄别 本人就不在此贴网址了  
  

# 抗疫必胜
针对上海疫情大家买不到菜的临时解决方案  
如果关注的人比较多的话 可能会继续出盒马/叮咚/每日优鲜的版本  
希望疫情能赶快好起来吧

本项目纯属学习~不要违规违法造成法律责任概不负责。
仅支持安卓手机。

## 使用

1. 推荐使用 vscode 编辑器
2. 安装 vscode 插件 Auto.js-Pro-Ext
3. 安装项目依赖
   `npm 版本 8.1.0`
   `npm install`
4. 手机上安装 [autojs app](https://autojspro-apk-1252460104.cos.ap-guangzhou.myqcloud.com/autojspro8.0-latest.apk)
5. 打开 autojs app，打开无障碍服务、链接电脑：客户端模式和服务器模式都打开（手机和电脑连接相同的 wifi）
   <img src="./assets/autojs.png" width="300">
6. vscode 连接到新设备
7. vscode 选择刚刚连接的设备进行调试
   <img src="./assets/vscode-autojs.jpeg" width="300">

> 如果还有不懂的也可以加我微信，at-529，加好友时请备注：robFood
> 如果对你有帮助请给个 **star** 支持，谢谢~~