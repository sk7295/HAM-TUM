name: "hentaibdsm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz",
	description: "Ảnh hentai bdsm random",
	commandCategory: "nsfw",
	usages: "",
	cooldowns: 60
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 2500) {
	axios.get('https://manhict.tech/images/nsfw/bdsm?apikey=KeyTest').then(res => {
	var image = res.data.url;
  
	let callback = function () {
					api.sendMessage({
						body: `EHEHEHE 😼\nSố dư: -2500 đô  `,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 2500})
			})
	} else return api.sendMessage("Cần 2500 đô để xem ảnh?",event.threadID,event.messageID);
}