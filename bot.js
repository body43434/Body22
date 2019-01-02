const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('526507782828982293').roles.find('name', 'omar').edit({color: 'RANDOM'})
    },12000);
  

})

 client.on('message', async message => {
  if(message.content.startsWith(  "طلب")) {
    await message.channel.send("**اسمك**").then(e => {/////Mal Team  
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
     message.channel.send('**كم تقدر تدفع**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**نوع الطلب **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()/////Mal Team  

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },5000);
var gg = message.guild.channels.find('name','4')
if(!gg) return;
if(gg) {////Mal Team  By: - Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  اسمك :question:  : \n ${lan}\nكم تقدر تدفع :link: :\n ${md} \n طلبك :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`Mal Team`)/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
.setTimestamp()/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
});///////////////////////////MaL Team By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
}        
})
})/////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 
})
})
})
})
})
 }/////Top
})//////////////Mal Team  By: @- Mál ,ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle≽ܫ≼#5661 


client.on('message', message => {
    if(message.channel.type === "dm") return;
      if(message.content.startsWith ("زواج")) {
              if(!message.channel.guild) return message.reply(' ');
      if(!message.channel.guild) return message.reply(' This command only for servers ')
      var proposed = message.mentions.members.first()

      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 10 ثانية 
 اكتب موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا.قولو مبروك**`))

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})




  }
});///////////Mal Team

var prefix = "!"
    client.on('message', message => {
      if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
     
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
     
      message.guild.member(user).ban(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });

client.on('message', message => {
    const prefix = "!";
      if (message.author.kick) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "kick") {
                   if(!message.channel.guild) return;
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
     
      if (message.mentions.users.size < 1) return message.reply("منشن شخص");
      if(!reason) return message.reply ("اكتب سبب الطرد");
      if (!message.guild.member(user)
      .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
     
      message.guild.member(user).kick(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor('Kicked !', user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("User:",  `[ + ${user.tag} + ]`)
      .addField("By:", `[  + ${message.author.tag} +  ]`)
      .addField("Reason:", `[ + ${reason} +  ]`)
      client.channels.get("492583022982463500").send({embed : banembed})
    }
    });

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`BodyFo2`,"https://www.twitch.tv/Music-bot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
            if (message.content.startsWith("$rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')//Mal_Team
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);//Mal_Team
    }
});

const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const refix = '=';












/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
*/
client.on('ready', () => {});
console.log("Logged")
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

client.on('message', function(message) {
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith(prefix + 'play')) {
		if (!message.member.voiceChannel) return message.reply('** انت لست في روم الاغاني **');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**هل يمكنك وضع اسم اغنيه او رابط اغنيه**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("تم وضعها في قائمه ", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('تم تشغيل بواسطه:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(`تم تشغيل`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("RANDOM")
						.setFooter('تم تشغيل بواسطه: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
	else if (mess.startsWith(prefix + 'skip')) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		message.reply(':gear: **تم تخطي اغنيه**').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.end();
		});
	}
	else if (message.content.startsWith(prefix + 'vol')) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		// console.log(args)
		if (args > 10) return message.reply(':x: **10**');
		if (args < 1) return message.reply(":x: **1**");
		dispatcher.setVolume(1 * args / 10);
		message.channel.sendMessage(`**${dispatcher.volume*10}** :تم تحديث صوت الي  `);
	}
	else if (mess.startsWith(prefix + 'pause')) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		message.reply(':gear: **تم توقيف بوت مؤقتا**').then(() => {
			dispatcher.pause();
		});
	}
	else if (mess.startsWith(prefix + 'unpause')) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		message.reply(':gear: **تم اعاده تشغيل اغنيه**').then(() => {
			dispatcher.resume();
		});
	}
	else if (mess.startsWith(prefix + 'stop')) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		message.reply(':name_badge: **تم توقيف اغنيه**');
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith(prefix + 'join')) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		message.member.voiceChannel.join().then(message.react('✅'));
	}
	else if (mess.startsWith(prefix + 'play')) {
		getID(args, function(id) {
			add_to_queue(id);
			fetchVideoInfo(id, function(err, videoInfo) {
				if (err) throw new Error(err);
				if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
				if (isPlaying == false) return message.reply(':x:');
				let playing_now_info = new Discord.RichEmbed()
					.setAuthor(client.user.username, client.user.avatarURL)
					.setDescription(`**${videoInfo.title}**`)
					.setColor("RANDOM")
					.setFooter('Requested By:' + message.author.tag)
					.setImage(videoInfo.thumbnailUrl)
				message.channel.sendEmbed(playing_now_info);
				queueNames.push(videoInfo.title);
				// let now_playing = videoInfo.title;
				now_playing.push(videoInfo.title);

			});

		});
	}

	function skip_song(message) {
		if (!message.member.voiceChannel) return message.reply('**عذرا انت لست في روم الاغاني**');
		dispatcher.end();
	}

	function playMusic(id, message) {
		voiceChannel = message.member.voiceChannel;


		voiceChannel.join().then(function(connectoin) {
			let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
				filter: 'audioonly'
			});
			skipReq = 0;
			skippers = [];

			dispatcher = connectoin.playStream(stream);
			dispatcher.on('end', function() {
				skipReq = 0;
				skippers = [];
				queue.shift();
				queueNames.shift();
				if (queue.length === 0) {
					queue = [];
					queueNames = [];
					isPlaying = false;
				}
				else {
					setTimeout(function() {
						playMusic(queue[0], message);
					}, 500);
				}
			});
		});
	}

	function getID(str, cb) {
		if (isYoutube(str)) {
			cb(getYoutubeID(str));
		}
		else {
			search_video(str, function(id) {
				cb(id);
			});
		}
	}

	function add_to_queue(strID) {
		if (isYoutube(strID)) {
			queue.push(getYoutubeID(strID));
		}
		else {
			queue.push(strID);
		}
	}

	function search_video(query, cb) {
		request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
			var json = JSON.parse(body);
			cb(json.items[0].id.videoId);
		});
	}


	function isYoutube(str) {
		return str.toLowerCase().indexOf('youtube.com') > -1;
	}
});




client.login(process.env.BOT_TOKEN);
















