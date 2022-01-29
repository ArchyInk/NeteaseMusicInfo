/*
 * @Author: Archy
 * @Date: 2022-01-29 21:10:14
 * @LastEditors: Archy
 * @LastEditTime: 2022-01-29 22:17:33
 * @FilePath: \lyric\app.js
 * @description:自用网易云音乐播放歌曲读取
 */

import fs from 'fs-extra'
import got from 'got'

const netmusicHistoryFilePath =
  'C:\\Users\\Archy\\AppData\\Local\\Netease\\CloudMusic\\webdata\\file\\history'

const handleMusicChange = async () => {
  const lyricHis = fs.readFileSync(netmusicHistoryFilePath, 'utf-8')
  const playingMusic = JSON.parse(lyricHis)[0]

  const downloadMusicPic = async () => {
    const musicPicUrl = playingMusic.track.album.picUrl
    const { body } = await got.get(musicPicUrl, { responseType: 'buffer' })
    return body
  }

  const formatMusicInfo = () => {
    const musicName = playingMusic.track.name
    const singers = playingMusic.track.artists
      .map((singer) => singer.name)
      .join(',')
    const origin = playingMusic.text
    return `歌名:${musicName}\n歌手:${singers}\n来源:${origin}`
  }

  fs.writeFileSync('./lyric.txt', formatMusicInfo())
  fs.writeFileSync('./pic.png', await downloadMusicPic())
}

fs.watchFile(netmusicHistoryFilePath, handleMusicChange)

