Component({
    data: {
        supportStatus: "after",
        picUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1155865518,1098496596&fm=26&gp=0.jpg"
    },
    properties: {
        comment: {
            type: Object,
            value: {}
        },
        islist: {
            type: Boolean,
            value: false
        }
    },
    options: {
        styleIsolation: 'isolated'
    },
    lifetimes: {
        ready() {
            console.log(this.data.islist)
        }
    },
    methods: {
        changeSupportStatus() {
            if (this.data.supportStatus === "after") {
                this.setData({
                    supportStatus: "before"
                })
            } else {
                this.setData({
                    supportStatus: "after"
                })
            }
        }
    }
})