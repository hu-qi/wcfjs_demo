// server/wcferry/skills/*.js
/**
 * 在群里说：@机器人 ping
 * 机器人回复：pong
 */
export default defineBotCommandHandler({
    command: 'ping',
    handler({ message, _command, _args }) {
      message.say('pong')
    },
})