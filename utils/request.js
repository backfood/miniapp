

let baseurl = 'https://shendev.mynatapp.cc/'


let request = function ({ url, data, method }) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseurl}${url}`,
            data: data || '',
            header: { 'content-type': 'application/json' },
            method: method || 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                // wx.showToast({//可用
                //     title: "提示",
                //     mask: true
                // })
                // console.log(res)
                resolve(res.data)
            },
            fail: (err) => {
                console.log(err)
            },
            complete: () => { }
        });
    })
}

export default request
