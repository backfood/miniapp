// pages/private-form/input/input.js
/**
 * input 需要考虑 前面或后面 slot
 * label width 要从form继承
 * 
 */
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../p-form/p-form': {
      type: 'parent', // 关联的目标节点应为祖先节点
      linked(target) {
        console.log(target)
        let {
          labelwidth
        } = target.data
        let width = labelwidth ? labelwidth : 110
        this.setData({
          width
        })
      }
    }
  },
  properties: {
    label: String,
    foucsItem: String, //聚焦的input
    type: String, //input 的类型
    name: String, //用来校验 控制光标（使用index不知道会不会有问题）
    value: {
      type: String
    },
    decode: {
      type: Boolean,
      value: true
    }, //是否解码
  },
  data() {
    return {
      foucs: false,
      width: ""
    }
  },
  methods: {
    getfocus() {
      this.triggerEvent("focus", this.value, {})
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
  }
})