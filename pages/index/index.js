// pages/index/index.js
var util = require('../../utils/util.js');

Page({
    // 页面的初始数据
    data: {
        userName: "",
        userCompany: "",
        userTelephone: "",
        inputValue: "",
        timeStart: '12:01',
        timeStop: '17:30',
        timeDate: "",
    },

    onLoad: function() {
        // 调用函数时，传入new Date()参数，返回值是日期和时间  
        var time = util.formatTime(new Date());
        // 再通过setData更改Page()里面的data，动态更新页面的数据 取当前时间
        this.setData({
            time: time,
            timeStart: time.substr(11, 5),
            timeDate: time.substr(0, 10),
        });
        // alert(123);
    },

    bindKeyInputName: function(e) {
        this.setData({
            userName: e.detail.value
        })
    },
    bindKeyInputCompany: function(e) {
        this.setData({
            userCompany: e.detail.value
        })
    },
    bindKeyInputTelephone: function(e) {
        console.log('userCompany', e.detail.value);
        this.setData({
            userTelephone: e.detail.value
        })
    },

    bindTimeChangestart: function(e) {
        console.log('pickerstart发送选择改变，携带值为', e.detail.value)
        this.setData({
            timeStart: e.detail.value
        })
    },
    bindTimeChangestop: function(e) {
        console.log('pickerstop发送选择改变，携带值为', e.detail.value)
        this.setData({
            timeStop: e.detail.value
        })
    },

    onShareAppMessage(res) {
        return {
            title: '外来人员登记',
            path: '/pages/index/index',
        }
    },
})