/*
 * @Author: Archy
 * @Date: 2022-01-29 22:18:17
 * @LastEditors: Archy
 * @LastEditTime: 2022-01-29 22:19:18
 * @FilePath: \lyric\service.js
 * @description: 
 */
import { Service } from 'node-windows'
var svc = new Service({
  name:'NeteaseMusicLyric',
  description: '网易云音乐自用读取歌曲信息',
  script: './app.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

svc.on('install',function(){
  svc.start();
});

svc.install();