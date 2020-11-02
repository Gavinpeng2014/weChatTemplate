"user strict";
// 持久化 存储处理器 ----------------- 存:异步处理, 取: 同步处理
const processor = {
    // 存储
    set: (key,data) => {
        if(typeof(key) === 'object') {
            Object.keys(key).map(item => {
                wx.setStorage({ key: item, data: key[item] })
            })
        } else {
            wx.setStorage({ key, data })
        }
    },
    // 读取 key: 获取缓存的键, _default: 缓存中不存在返回默认值
    get: (key,_default = null) => {
        return wx.getStorageSync(key) ? wx.getStorageSync(key) : _default
    },

    // 清除所有缓存
    clear: () => {
        wx.clearStorage()
    }
}

export default processor