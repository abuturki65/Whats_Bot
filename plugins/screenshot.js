/* Copyright (C) 2021 زلـزال_الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar
- Commend : سكرين + رابـط.

*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const WhatsAsenaStack = require('whatsasena-npm')
const Language = require('../language');
const Lang = Language.getString('webss');
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'سكرين ?(.*)', fromMe: wk, desc: Lang.SS_DESC}, (async (message, match) => {
  if (match[1] == '') return await message.client.sendMessage(message.jid,Lang.LİNK, MessageType.text);
  var bufferdata = ''
  try {
    var enc = await WhatsAsenaStack.shot(match[1])
    bufferdata = enc
  } catch {
    return await message.client.sendMessage(message.jid,'*❌ خطـأ!*', MessageType.text);
  }
  await message.sendMessage(Buffer.from(bufferdata), MessageType.image, {mimetype: Mimetype.png, caption: '- تـم الالتقـاط بواسطـة ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆'})
}));
