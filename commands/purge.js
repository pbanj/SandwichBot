let pbot
exports.init = function(bot) { pbot = bot }

exports.run = function(msg, args) {
	let messagecount = parseInt(args, 10)
	msg.channel.fetchMessages({ limit: 100 })
		.then(messages => {
			let msgArray = messages.array()
			msgArray = msgArray.filter(m => m.author.id === pbot.user.id)
			msgArray.length = messagecount + 1
			msgArray.map(m => m.delete().catch(console.error))
		}
	)
}
