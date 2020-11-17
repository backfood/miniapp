// pages/input/input.js
/***
 * 设置光标的聚焦与否 是为了弹出键盘
 * bug 
 *  如果不加入hold-keyboard 在模拟器上可以聚焦 
 *  但在手机上点击两次还是会隐藏键盘
 *  
 * 
 */
const pwdModel = "*"



Page({

    /**
     * 页面的初始数据
     */
    data: {
        foucs: false,
        cursor: '-1',
        foucsItem: "-1",
        timer: "",
        tempValue: "",
        form: {
            account: "",
            pwd: "",
            encodePWD: "",
            captcha: ""
        },
        fildValue: ""
    },
    onChange(event) {
        console.log(event.detail);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    input(e) {
        // console.log(e)
        let {
            foucsItem,
        } = this.data
        let {
            value
        } = e.detail

        if (foucsItem == "0") {
            this.setData({
                ["form.account"]: value
            })
        } else if (foucsItem == "1") {
            this.setData({
                ["form.pwd"]: value,
                ["form.encodePWD"]: value.length ? pwdModel.padStart(value.length, "*") : ""
            })
        } else {
            this.setData({
                ["form.captcha"]: value
            })
        }
    },
    stopBubble() {
        let that = this;
        clearInterval(that.data.timer)
        this.setData({
            cursor: -1
        })
    },
    getfocus(e) {
        let {
            item
        } = e.currentTarget.dataset
        console.log(this.data.foucs)
        this.setData({
            cursor: item,
            foucsItem: item,
            foucs: true
        }, () => {
            this.cursorSwitch(item)
        })
        if (item == "0") {
            this.setData({
                tempValue: this.data.form.account
            })
        } else if (item == "1") {
            this.setData({
                tempValue: this.data.form.pwd
            })
        } else {
            this.setData({
                tempValue: this.data.form.captcha
            })
        }
    },

    cursorSwitch(num) {
        let that = this
        if (this.data.timer) {
            clearInterval(this.data.timer)
        }
        this.setData({
            timer: setInterval(function () {
                that.setData({
                    cursor: that.data.cursor == num ? '-1' : num
                })
            }, 500)
        })
    }

})