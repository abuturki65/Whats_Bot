/* Copyright (C) 2021 زلـزال_الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar
- Commend : 

*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support
const WhatsAsenaStack = require('whatsasena-npm');
const request = require('request');
const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey(Config.DEEPAI); // Users API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support
var noAPI = ''
if (Config.LANG == 'AR' || Config.LANG == 'AZ') {
  noAPI = '*كـود DeepAI API Key غيـر موجـود !!!* \n*فقـط اتبـع الخطـوات فـي الرابـط التالـي لاستخـراج الكـود المطلـوب*' + 'n\n\*الرابـط :* https://github.com/WhatsBotAR/Whats_Bot/wiki/DeepAI-API-Key#-deepai-api-key-scraper'
} else {
  noAPI = '*DeepAI API Key Not Found!* \n*Please Follow the Required Steps at the Address Below!*' + '\n\n*URL:* https://github.com/WhatsBotAR/Whats_Bot/wiki/DeepAI-API-Key#-deepai-api-key-scraper'
}

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'deepai$', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        if (Config.LANG == 'AR' || Config.LANG == 'AZ') {
            await message.sendMessage('💻 الامـر: *.moodai <text>*\nℹ️ الوصف: 🇾🇪 يخمن مزاجك من الكلمه او الجمله التي كتبتها.\n\n💻 الامـر: *.colorai*\nℹ️ الوصف: 🇾🇪 يلون الصور بالأبيض والأسود باستخدام تقنية الذكاء الاصطناعي.\n\n💻 الامـر: *.faceai*\nℹ️ الوصف: 🇾🇪 يولد وجوهًا بشرية لم تكن موجودة من قبل بالذكاء الاصطناعي.\n\n💻 الامـر: *.animai*\nℹ️ الوصف: 🇾🇪 يولد وجوه انمي لم تكن موجودة من قبل بالذكاء الاصطناعي.\n\n💻 الامـر: *.superai*\nℹ️ الوصف: 🇾🇪 يزيد من جودة الصورة باستخدام تقنية الذكاء الاصطناعي.\n\n💻 الامـر: *.waifuai*\nℹ️ الوصف: 🇾🇪 يجمع بين لوحات ألوان الصور والذكاء الاصطناعي.\n\n💻 الامـر: *.dreamai*\nℹ️ الوصف: 🇾🇪 لتطبيق تأثير deepdream على الصورة.\n\n💻 الامـر: *.neuraltalkai*\nℹ️ الوصف: 🇾🇪 الصورة توضح ما يحدث بالذكاء الاصطناعي.\n\n💻 الامـر: *.ttiai <text>*\nℹ️ الوصف: 🇾🇪 تحويل النص إلى صورة.\n\n💻 الامـر: *.toonai*\nℹ️ الوصف: 🇾🇪 يحول الوجه في الصورة إلى شخصية كرتونية.\n\n💻 الامـر: *.textai <text>*\nℹ️ الوصف: 🇾🇪 يخلق قصة مصطنعة لك من الجملة التي تكتبها.\n\n💻 الامـر: *.nudityai*\nℹ️ الوصف: 🇾🇪 يظهر قيمة NSFW في الصورة بين 1 و 0.\n\n💻 الامـر: *.ganstyle*\nℹ️ الوصف: 🇾🇪 يدمج الصورة التي قمت بالرد عليها بالصورة المحددة حاليًا.\n\n⚠️ 🇾🇪 *تعمل كل أدوات الذكاء الاصطناعي هذه مع التعلم العميق. كلما زاد استخدامك ، زادت المعلومات التي يخزنها.* ``استخدم الأحرف الإنجليزية فقط!```');
        } else {
            await message.sendMessage('💻 Usage: *.moodai <text>*\nℹ️ Desc: 🇬🇧 It finds your mood from the article you wrote.\n\n💻 Usage: *.colorai*\nℹ️ Desc: 🇬🇧 It colorize bw photos.\n\n💻 Usage: *.faceai*\nℹ️ Desc: 🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.animai*\nℹ️ Desc: 🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.superai*\nℹ️ Desc: 🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Usage: *.waifuai*\nℹ️ Desc: 🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Usage: *.dreamai*\nℹ️ Desc: 🇬🇧 Applies deepdream effect to the photo.\n\n💻 Usage: *.neuraltalkai*\nℹ️ Desc: 🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: *.ttiai <text>*\nℹ️ Desc: 🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Usage: *.toonai*\nℹ️ Desc: 🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Usage: *.textai <text>*\nℹ️ Desc: 🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Usage: *.nudityai*\nℹ️ Desc: 🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: *.ganstyle*\nℹ️ Desc: 🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');
        }
    }));
    Asena.addCommand({pattern: 'faceai$', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var image_an = await WhatsAsenaStack.face()
        var webimage = await axios.get(image_an, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
    }));
    Asena.addCommand({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var anim_img = await WhatsAsenaStack.anime()
        var IMGWADATA = await axios.get(anim_img, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'}
        )
    }));
    Asena.addCommand({pattern: 'colorai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'waifuai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'superai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msgdata = await WhatsAsenaStack.mood(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: msgdata,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Asena.addCommand({pattern: 'dreamai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI); 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'neuraltalkai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.png"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msg_tt = await WhatsAsenaStack.tti(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text2img", {
            text: msg_tt,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
    }));
    Asena.addCommand({pattern: 'toonai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'nudityai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.png"),
                });
                await message.client.sendMessage(message.jid, `*Output:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var text_ai = await WhatsAsenaStack.text(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text-generator", {
            text: text_ai
        });
        await message.client.sendMessage(message.jid, `*Article:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'ganstyle$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI); 
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'deepai$', fromMe: false, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        if (Config.LANG == 'AR' || Config.LANG == 'AZ') {
            await message.sendMessage('💻 Usage: *.moodai <text>*\nℹ️ Desc: 🇹🇷 Yazdığınız yazıdan ruh halini bulur.\n\n💻 Usage: *.colorai*\nℹ️ Desc: 🇹🇷 Siyah beyaz fotoğrafları renklendirir.\n\n💻 Usage: *.faceai*\nℹ️ Desc: 🇹🇷 Yapay zeka ile daha önce hiç var olmamış insan yüzleri üretir.\n\n💻 Usage: *.animai*\nℹ️ Desc: Yapay zeka ile daha önce hiç var olmayan anime yüzleri üretir.\n\n💻 Usage: *.superai*\nℹ️ Desc: 🇹🇷 Fotoğrafın kalitesini yapay zeka ile arttırır.\n\n💻 Usage: *.waifuai*\nℹ️ Desc: 🇹🇷 Fotoğrafların renk paletlerini yapay zeka ile birleştirir.\n\n💻 Usage: *.dreamai*\nℹ️ Desc: 🇹🇷 Fotoğrafa deepdream efekti uygular.\n\n💻 Usage: *.neuraltalkai*\nℹ️ Desc: 🇹🇷 Fotoğrafki olan şeyi yapay zeka ile açıklar.\n\n💻 Usage: *.ttiai <text>*\nℹ️ Desc: 🇹🇷 Yazıyı resme dönüştür.\n\n💻 Usage: *.toonai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki yüzü çizgi film karakterine çevirir.\n\n💻 Usage: *.textai <text>*\nℹ️ Desc: 🇹🇷 Yazdığınız cümleden size yapay bir hikaye yaratır.\n\n💻 Usage: *.nudityai*\nℹ️ Desc: 🇹🇷 Fotoğraftaki NSFW değerini 1 ve 0 arasında gösterir.\n\n💻 Usage: *.ganstyle*\nℹ️ Desc: 🇹🇷 Yanıtladığınız fotoğrafı seçili olan resim ile birleştirir.\n\n⚠️ 🇹🇷 *Bütün bu yapay zeka araçlarını derin öğrenme ile çalışır. Ne kadar fazla kullanırsanız o kadar fazla bilgiyi depolar.* ```Sadece ingilizce karakter kullanın!```');
        } else {
            await message.sendMessage('💻 Usage: *.moodai <text>*\nℹ️ Desc: 🇬🇧 It finds your mood from the article you wrote.\n\n💻 Usage: *.colorai*\nℹ️ Desc: 🇬🇧 It colorize bw photos.\n\n💻 Usage: *.faceai*\nℹ️ Desc: 🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.animai*\nℹ️ Desc: 🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.superai*\nℹ️ Desc: 🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Usage: *.waifuai*\nℹ️ Desc: 🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Usage: *.dreamai*\nℹ️ Desc: 🇬🇧 Applies deepdream effect to the photo.\n\n💻 Usage: *.neuraltalkai*\nℹ️ Desc: 🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: *.ttiai <text>*\nℹ️ Desc: 🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Usage: *.toonai*\nℹ️ Desc: 🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Usage: *.textai <text>*\nℹ️ Desc: 🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Usage: *.nudityai*\nℹ️ Desc: 🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: *.ganstyle*\nℹ️ Desc: 🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');
        }
    }));
    Asena.addCommand({pattern: 'faceai$', fromMe: false, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var image_an = await WhatsAsenaStack.face()
        var webimage = await axios.get(image_an, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
    }));
    Asena.addCommand({pattern: 'animai', fromMe: false, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var anim_img = await WhatsAsenaStack.anime()
        var IMGWADATA = await axios.get(anim_img, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'}
        )
    }));
    Asena.addCommand({pattern: 'colorai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => { 
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);   
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'waifuai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'superai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);  
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msgdata = await WhatsAsenaStack.mood(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: msgdata,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Asena.addCommand({pattern: 'dreamai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'neuraltalkai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.png"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msg_tt = await WhatsAsenaStack.tti(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text2img", {
            text: msg_tt,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
    }));
    Asena.addCommand({pattern: 'toonai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'nudityai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.png"),
                });
                await message.client.sendMessage(message.jid, `*Output:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'textai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var text_ai = await WhatsAsenaStack.text(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text-generator", {
            text: text_ai
        });
        await message.client.sendMessage(message.jid, `*Article:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'ganstyle$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.png')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.png"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الانشـاء بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
