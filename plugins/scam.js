/* Copyright (C) 2021 زلـزال_الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar
- Commend : وهم.

*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const WhatsAsenaStack = require('whatsasena-npm');
const Language = require('../language');
const Lang = Language.getString('scam');
var data = {
  action: true
}
Asena.addCommand({pattern: 'وهم ?(.*)', fromMe: true, desc: Lang.SCAM_DESC}, (async (message, match) => {
    if (match[1] === '') {
        return await message.sendMessage(Lang.SCAM_NOTFOUND);
    } else if (match[1] === 'كتابه') {
        if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.composing)
            }, 10000)
        }
    } else if (match[1] === 'انلاين') {
        if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.available)
            }, 10000)
        }
    } else if (match[1] === 'تسجيل') {
        if (data.action) {
            setInterval(async () => {
                await message.client.updatePresence(message.jid,Presence.recording)
            }, 10000)
        }
    } else if (match[1] === 'ايقاف') {
        data.action = false
        await message.client.updatePresence(message.jid,Presence.paused)
        await new Promise(r => setTimeout(r, 500));
        data.action = true
    } else {
        await message.client.sendMessage(message.jid, Lang.SCAM_NULL, MessageType.text);
    }
}));
