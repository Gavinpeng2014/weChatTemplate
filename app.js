//app.js
import { Request } from 'utils/request.js'
import processor from 'utils/processor.js'
import Store from 'utils/store.js'
let store = new Store({
  // 全局状态
  state: {
    // 演示
    num: 0,
    // 登陆状态
    loginState: processor.get('loginState',false),
    // 登陆凭证
    token: processor.get('token',''),
    // 用户信息
    userInfo: processor.get('userInfo',{})
  },
  // 推荐开启局部模式 默认 false ,指定文件使用全局状态 在需要使用$state的组件中，加入 useStore: true, 表示当前页面或组件可用$state。
  openPart: true
})
App({
  onLaunch() {
    // 版本更新管理器
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
            })
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  globalData: { 
    // 当前小程序名称 用于登陆授权 或 其他提示拼接
    applets: '小程序名称'
  },
  Request,
  processor,
  store
})