// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeNav: "0"

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    switchActive(e) {
        let { active } = e.currentTarget.dataset
        this.setData({
            activeNav: active
        })
    }

})