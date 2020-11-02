// pages/login/login.js
const app = getApp()
Page({
  useStore: true,
  /**
   * 页面的初始数据
   */
  data: {
    // 小程序名称
    applets: app.globalData.applets,
    // 临时授权票据
    code: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getWxLoign()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  //-------------------自定义方法
  /**
   * 获取code
   */
  getWxLoign() {
    let that = this
    wx.login({ success: result => { that.setData({ code: result.code }) } }) 
  },
  /**
   * 微信授权登陆
   */
  bindGetUserInfo(e) {
    let that = this
    if(e.detail.userInfo) {
      // 用户允许
      let info = e.detail
      let obj = { encryptedData: info.encryptedData, iv: info.iv }
      that.auto_login(obj)
    } else {
      //用户拒绝
      wx.showToast({ title: '授权登陆取消', icon: 'none' })
    }
  },
  /**
   * 请求后台登陆 换取token
   * @param encryptedData 加密数据(小程序端)	
   * @param iv 加密算法的初始向量(小程序端)	
   */
  auto_login({ encryptedData, iv }) {
    let that = this,
        { code } = that.data
    wx.showLoading({ title: '授权中', mask: true })
    setTimeout(() => {
      wx.hideLoading()
      let simulationUserInfo = {
        nickName: 'Gavin',
        gender: 1,
        language: 'zh_CN',
        city: '',
        province: '',
        country: 'Yemen',
        avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/jXxJDdtMKcZQoRfiaRBaPUn6ebEPFFxiaFYggKiaKV2ib4cELXdTasm73pICCGK01tDnN0DaOpaBq1Tta8CFrztSJw/132'
      },
      simulationToken = '00sd6fw8e4f98we4f94ea84f8'
      app.store.setState({
        token: simulationToken,
        userInfo: simulationUserInfo
      })
      let { token, userInfo } = app.store.getState()
      console.log(token)
      // app.processor.set('loginState',true)
      // app.processor.set('token',token)
      app.processor.set({ 'loginState': true, 'token': token, userInfo: simulationUserInfo })
    }, 1500);
    return false
    app.Request({
      url: '/authLogin',
      method: 'POST',
      data: { code, encryptedData, iv },
      loading: true,
      loadingText: '授权中...'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      // 更新code
      that.getWxLoign()
      console.log(err) 
    })
  }
})