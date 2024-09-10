import { WechatferryPuppet } from '@wechatferry/puppet'
import { WechatyBuilder } from 'wechaty'

const puppet = new WechatferryPuppet()
const bot = WechatyBuilder.build({ puppet })
console.log(222)
bot.on('message', (msg) => {
  msg.text() === 'ding' && msg.say('dong')
})
  .start()
