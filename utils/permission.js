let { globalData } = getApp();
class nav {
    constructor(token) {
        this.token = token
    }
    check(navTo, nav) {
        return new Promise((resolve, reject) => {
            if (this.token) {
                resolve(navTo)
            } else {
                if (nav) {
                    nav()
                } else {
                    wx.reLaunch({
                        url: '/pages/index/index',
                        success: (result) => {
                            wx.showToast({
                                title: '请重新登录',
                                icon: 'none',
                                duration: 2000
                            })
                        },
                    });
                }
            }
        })
    }
    /**
     * @option 跳转配置项
     * @nav 自定义无token跳转函数
     * 
     */
    navigateTo(option, nav = null) {
        this.check(wx.navigateTo, nav).then(res => {
            res(option);
        })
    }
    navigateBack(option, nav = null) {
        this.check(wx.navigateBack, nav).then(res => {
            res(option);
        })
    }
    switchTab(option, nav = null) {
        this.check(wx.switchTab, nav).then(res => {
            res(option);
        })
    }
    reLaunch(option, nav = null) {
        this.check(wx.reLaunch, nav).then(res => {
            res(option);
        })
    }
    redirectTo(option, nav = null) {
        this.check(wx.redirectTo, nav).then(res => {
            res(option);
        })
    }
}

export const router = new nav(globalData.token)