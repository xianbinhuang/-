// pages/index/history.js

Page({
    data: {
        logs: []
    },
    onLoad(options) {
        var logs = wx.getStorageSync('calclogs');
        this.setData({
            "logs": logs
        });
    }
})