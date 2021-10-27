/* Copyright (C) 2021 زلـزال_الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar
- Commend : بوت.
- Commend : النظام.

*/

const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'بوت', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```*- شكـراً لاستخـدامك سـورس ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆*```\n\n*- الاصـدار:* ```'+Config.VERSION+'```\n*- الفـرع:* ```'+Config.BRANCH+'```\n*- قنـاة السـورس:* https://t.me/WhatsBot_AR\n*- قنـاة التحديثـات:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.client.sendMessage(message.jid, Buffer.from(resim.data), MessageType.image, { mimetype: Mimetype.png, caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL)});
            }
            else if (payload.includes('{asenalogo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/Whats_Bot/media/gif/WhatsAsena Animated.mp4'), MessageType.video, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{asenalogo}', '')});
            }
            else {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), MessageType.text);
            }
        }
    }));

    Asena.addCommand({pattern: 'النظام', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'بوت', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```*- شكـراً لاستخـدامك سـورس ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆*```\n\n*- الاصـدار:* ```'+Config.VERSION+'```\n*- الفـرع:* ```'+Config.BRANCH+'```\n*- قنـاة السـورس:* https://t.me/WhatsBot_AR\n*- قنـاة التحديثـات:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.client.sendMessage(message.jid, Buffer.from(resim.data), MessageType.image, { mimetype: Mimetype.png, caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL)});
            }
            else if (payload.includes('{asenalogo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/Whats_Bot/media/gif/WhatsAsena Animated.mp4'), MessageType.video, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{asenalogo}', '')});
            }
            else {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), MessageType.text);
            }
        }
    }));

    Asena.addCommand({pattern: 'النظام', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
