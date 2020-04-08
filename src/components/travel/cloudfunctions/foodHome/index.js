// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp=require("request-promise");
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var url ="http://news-at.zhihu.com/api/2/news/latest"
  return rp(url)
  .then(res=>{
    return res
  }).catch(err=>{console.log(err)})
}