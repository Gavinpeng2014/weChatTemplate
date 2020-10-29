// pages/index/index.js
const app = getApp()
Page({
  useStore: true,
  /**
   * 页面的初始数据
   */
  data: {
    // 富文本内容
    html: '<p>p标签</p><span>span标签<span><div>div标签</div>',
    // 富文本插件内 标签样式设置
    tagStyle: {
      video: 'width: 100%;'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.testRequest()
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
   * 请求 演示 
   */
  testRequest() {
    app.Request({
      url: '/test',
      data: { test: 1 },
      loading: true,
      loadingText: '加载中...'
    }).then(res => {
      console.log(res)
    }).catch(err => { console.log(err) })
  },
  /**
   *  演示 状态管理器 num +
   */
  increase() {
    let { num } = app.store.getState()
    app.store.setState({
      num: num + 1
    })
  },
  /**
   * 演示 状态管理器 num -
   */
  decrease() {
    let { num } = app.store.getState()
    app.store.setState({
      num: num - 1
    })
  }
})