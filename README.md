### bilibili直播自用简易读取网易云音乐播放歌曲小插件

歌曲信息: lyric.txt  
歌曲封面: pic.png  

**运行**  
`pnpm install`   
修改app.js中netmusicHistoryFilePath为网易云音乐缓存地址，一般为C:\\Users\\{用户名}\\AppData\\Local\\Netease\\CloudMusic\\webdata\\file\\history  
`node service.js`  
打开系统服务找到NeteaseMusicLyric,自动运行即可  

直播姬点击添加素材，文字指向lyric.txt,图片指向pic.png  
