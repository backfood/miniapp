// pages/comment/comment.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        comment: {
            all: "88",
            havePic: "56",
            append: "23"
        },
        select: "1",
        
    },
    /**
     * 组件的方法列表
     */
    methods: {
        changeTabs(e) {
            let num = e.target.dataset.num
            this.setData({
                select: num
            })
        },
       
    }
})
