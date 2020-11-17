// pages/private-form/form/form.js
Component({
    relations: {
        "../p-input/p-input": {
            type: "child"
        },
        "../submit/submit": {
            type: "child"
        }
    },

    /**
     * 组件的属性列表
     */
    properties: {
        form: Object,
        labelwidth: {
            type: String,
            optionalTypes: [Number], // 可选属性
        }
    },
    ready() {
        // this.getAllChild()
    },
    data: {
        foucs: false,
        cursor: '-1',
        foucsItem: "-1",
        timer: "",
        tempValue: "",
    },
    methods: {
        getAllChild() {
            let nodes = this.getRelationNodes('../p-input/p-input')
            /**
             * 当未在使用组件时useingComponents中引入relationnode 则输出空数组
             * 如若引用组件 间未同时声明关系 则 输出为null
             */
            console.log(nodes)
        },
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
        stopBubble() {
            let that = this;
            clearInterval(that.data.timer)
            this.setData({
                cursor: -1
            })
        },
        
    }
})