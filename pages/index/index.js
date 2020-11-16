const app = getApp()
import {
    router
} from "../../utils/permission"
import request from "../../utils/request"
import QRCode from '../../utils/weapp-qrcode.js'

// import moment from "moment"

Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        user: {},
        phoneInfo: {
            widht: 375,
            height: 555
        },
        ctx: "",
        screenWidth: 0,
        screenHeight: 0,
        longList: []
    },
    onLoad: function () {
        // this.draw()
        this.longlistrender()
    },
    onShow() {
        // console.log(request)
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    },
    longlistrender() {
this.setData({
    longList:Array(70).fill("aaaaa")
})
    },
    qrcode() {
        // new QRCode('myQrcode',{
        //     text: 'http://www.baidu.com',
        //     width: 200,
        //     height: 200,
        //     padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
        //     correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
        //     callback: (res) => {
        //       console.log(res.path)
        //       // 接下来就可以直接调用微信小程序的api保存到本地或者将这张二维码直接画在海报上面去，看各自需求
        //     }
        //   })
        // console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
        // console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
        // wx.getSetting({
        //     success(res) {
        //         // console.log(res)
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        //             wx.getUserInfo({
        //                 success: function (res) {
        //                     // console.log(res.userInfo)
        //                 }
        //             })
        //         }
        //     }
        // })

    },
    roterto() {
        router.navigateTo({
            url: "../home/home"
        })
    },
    draw() {
        let that = this
        let query = wx.createSelectorQuery().in(that);
        query.selectViewport().boundingClientRect()
        query.select(".content").boundingClientRect();
        query.exec(function (res) {
            console.log(res[1])
            let w = res[1].width / 750
            let h = res[1].height / 1334
            let ctx = wx.createCanvasContext("fillImage")
            ctx.save()
            ctx.drawImage("/static/images/invitation-bcg.png", 0, 0, res[1].width, res[1].height);
            // ctx.drawImage("/static/images/invitation-bcg.png", 0, 0, screenWidth, screenHeight);
            ctx.drawImage("/static/images/invitation-card.png", w * 60, h * 270, w * 630, 795 * h)
            ctx.setFontSize(w * 28);
            ctx.setFillStyle("#333");
            ctx.fillText('我的邀请码', w * 306, h * 337);
            ctx.setFontSize(w * 60);
            ctx.setFillStyle("#E02020");
            ctx.fillText('10086', w * 285, h * 404);

            // roundRect(ctx,w*207,h*894,w*336,h*84,w*16)
            // ctx.rect(w*207,h*894,w*336,h*84,w*16)
            // ctx.rect(w*207,h*894,w*336,h*84)
            // ctx.rect(10,10,20,20)
            // ctx.setFillStyle("#FFFFFF")
            ctx.save()
            ctx.draw()
        })
    },
    saveImg() {
        let {
            ctx
        } = this.data
        let that = this

        // wx.canvasToTempFilePath({
        //     canvasId: "sub",
        //     x: 0,
        //     y: 0,
        //     height: 100,
        //     widht: 100,
        //     destWidth: 50,
        //     destHeight: 50,
        //     success(res) {

        //         let filePath = res.tempFilePath
        //         let httppat = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603964352633&di=88101977feedf94cc2737860e6ea42c3&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201309%2F03%2F150928ozb82vyzhzsv96ov.jpg'
        //         wx.getImageInfo({
        //             src: httppat,
        //             success: (res) => {
        //                 console.log(res)
        //                 filePath = res.path
        //                 down()
        //             },
        //         });
        //         function down() {

        //         }
        // console.log(filePath)

        // console.log(res)








        wx.canvasToTempFilePath({
            canvasId: "fillImage",
            success(res) {
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function () {
                        wx.showToast({
                            title: "生成图片成功！",
                            duration: 2000
                        })
                    },
                })
            }
        })
        // console.log(res)
        //     }
        // })
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123'
        }
    },
    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    },
    sendRequest() {
        console.log("触发了时间")
        request({
            url: `/text`,
            data: {
                data: "发送地信息",
                code: 404
            }
        }).then(res => {
            console.log(res)
        })
    },
    bindGetUserInfo(e) {
        console.log(e.detail.userInfo)
        this.setData({
            user: e.detail.userInfo
        })
    },
    getUserInfo() {
        getAuthorizationResult().then(res => {
            console.log(res, "获取到的用户信息")
        })
        // wx.getSetting({
        //     success(res) {
        //         console.log(res, "获取到的授权结果")
        //         if (!res.authSetting['scope.userInfo']) {
        //             console.log(1234)
        //             wx.authorize({
        //                 scope: 'scope.userInfo',
        //                 success() {
        //                     wx.getUserInfo({
        //                         success(res) {
        //                             console.log(res)
        //                         },
        //                         fail(res) {
        //                             console.log(res, "失败")
        //                         }
        //                     })
        //                 }
        //             })
        //         }
        //     },
        //     fail(res) {
        //         console.log(res, "未获取到已获取的授权")
        //     }
        // })
    }
})