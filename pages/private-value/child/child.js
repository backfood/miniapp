// pages/private-value/child/child.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: String
  },

  /**
   * 组件的初始数据
   */
  data() {
    return {
      show: false,
      arr: []
    }
  },
  attached() {
    console.log(this.data.list)
    this.setData({
      arr: new Array(10).fill(this.data.list)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    open(){
      this.setData({
        show:true
      })
    }
  }
})