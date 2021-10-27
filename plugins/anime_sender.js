/* Codded by ®zzzzl1l
Telegram: t.me/WhatsBot_AR
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const request = require('request');
const fs = require('fs');
const WhatsAsenaStack = require('whatsasena-npm');
let wk = Config.WORKTYPE == 'public' ? false : true
var pic = ''
var giff = ''
var wr_usage = ''
if (Config.LANG == 'TR') pic = 'بحث صـور آنمـي عشـوائيـه', wr_usage = '*من فضلك فقط اضف للأمـر كلمـة* _normal_ *أو* _nsfw_ *استخدم كلماتك!*', giff = 'بحث آنمـي فيديـو'
if (Config.LANG == 'EN') pic = 'Sends random anime photo.', wr_usage = '*Please use only* _normal_ *or* _nsfw_ *words!*', giff = 'Sends random anime video.'
if (Config.LANG == 'AZ') pic = 'Təsadüfi anime şəkli göndərir.', wr_usage = '*Zəhmət olmasa yalnız* _normal_ *və ya* _nsfw_ *sözlərindən istifadə edin!*', giff = 'Təsadüfi anime videosu göndərir.'
if (Config.LANG == 'RU') pic = 'Отправляет случайное аниме-фото.', wr_usage = '*Пожалуйста, используйте только* _normal_ *или* _nsfw_ *слова!*', giff = 'Отправляет случайное аниме-видео.'
if (Config.LANG == 'ES') pic = 'Envía una foto de anime aleatoria.', wr_usage = '*¡Utilice sólo palabras* _normal_ *o* _nsfw_', giff = 'Envía videos de anime aleatorios.'
if (Config.LANG == 'PT') pic = 'Envia foto de anime aleatória.', wr_usage = '*Use apenas palavras* _normal_ *ou* _nsfw_', giff = 'Envia vídeo de anime aleatório.'
if (Config.LANG == 'ML') pic = 'ക്രമരഹിതമായ ആനിമേഷൻ ഫോട്ടോ അയയ്ക്കുന്നു.', wr_usage = '*ദയവായി* _normal_ *അല്ലെങ്കിൽ* _nsfw_ *വാക്കുകൾ മാത്രം ഉപയോഗിക്കുക!*', giff = 'ക്രമരഹിതമായ ആനിമേഷൻ വീഡിയോ അയയ്ക്കുന്നു.'
if (Config.LANG == 'HI') pic = 'यादृच्छिक एनीमे फोटो भेजता है।', wr_usage = '*कृपया केवल* _normal_ *या* _nsfw_ *शब्दों का ही प्रयोग करें!*', giff = 'यादृच्छिक एनीमे वीडियो भेजता है।'
if (Config.LANG == 'ID') pic = 'Mengirim foto anime acak.', wr_usage = '*Harap gunakan hanya* _normal_ *atau* _nsfw_ *kata-kata!*', giff = 'Mengirimkan video anime acak.'

Asena.addCommand({pattern: 'صور انمي ?(.*)', fromMe: wk, desc: pic, usage: 'animepic normal // animepic nsfw'}, (async (message, match) => {
  if (match[1] == 'normal') {
    var image_link = await WhatsAsenaStack.anime_wall('normal')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم التنزيـل بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆' })
  } else if (match[1] == 'nsfw') {
    var image_link_nsfw = await WhatsAsenaStack.anime_wall('nsfw')
    var image_buffer_nsfw = await axios.get(image_link_nsfw, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer_nsfw.data), MessageType.image, { mimetype: Mimetype.png, caption: '- تـم التنزيـل بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆' })
  } else {
    return await message.client.sendMessage(message.jid,wr_usage,MessageType.text)
  }
}));
Asena.addCommand({pattern: 'متحركات انمي ?(.*)', fromMe: wk, desc: giff, usage: 'animegif normal // animegif nsfw'}, (async (message, match) => {
  if (match[1] == 'normal') {
    var gif_link = await WhatsAsenaStack.anime_gif('normal')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(gif_link, '/root/Whats_Bot/pic.mp4', async() => {                          
      await message.client.sendMessage(message.jid, fs.readFileSync('/root/Whats_Bot/pic.mp4'), MessageType.video, { caption: '- تـم التنزيـل بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆', mimetype: Mimetype.gif })
    })
  } else if (match[1] == 'nsfw') {
    var gif_link_nsfw = await WhatsAsenaStack.anime_gif('nsfw')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(gif_link_nsfw, '/root/Whats_Bot/picn.mp4', async() => {                          
      await message.client.sendMessage(message.jid, fs.readFileSync('/root/Whats_Bot/picn.mp4'), MessageType.video, { caption: '- تـم التنزيـل بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆', mimetype: Mimetype.gif })
    })
  } else {
    return await message.client.sendMessage(message.jid,wr_usage,MessageType.text)
  }
}));
