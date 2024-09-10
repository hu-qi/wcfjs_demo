import { WechatferryAgent }  from '@wechatferry/agent'

// 创建 agent 实例
const agent = new WechatferryAgent()

// 监听微信消息
agent.on('message', (msg) => {
  console.log(msg)
})

// 启动 wcf
agent.start()