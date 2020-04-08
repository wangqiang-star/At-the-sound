// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",//当天日期
    news:[],//新的信息
    infos:[],//当天信息
    bool:true,
    num:3000
  },
  // 获取云函数返回的数据
  loadData:function(){
    wx.cloud.callFunction({
      name:"foodHome"
    }).then(res => { 
      console.log(JSON.parse(res.result))
      this.setData({ time: JSON.parse(res.result).display_date})
      this.setData({ news: JSON.parse(res.result).news})
      this.setData({ infos: JSON.parse(res.result).top_stories})
      })
    .catch(err=>{console.log(err)})
  },
  // 跳转
  goDetails:function(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/details/details?id=${e.currentTarget.dataset.id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})