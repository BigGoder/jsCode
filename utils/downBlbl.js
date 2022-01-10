const ibili = require('ibili')//下载b站视频和弹幕
ibili.downloadVideo({
    url:'https://www.bilibili.com/video/BV1rR4y177Fm?share_source=copy_web', // 地址
    folder:'./media/群居姐妹', // 
}).then(()=>{
    console.log('番剧下载完成！')
})