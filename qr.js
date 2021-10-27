/* Copyright (C) 2021 زلـزال الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar

🔆𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 - زلـزال الهيبـه
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType, Mimetype} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsasena/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2126, 14]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.italic('مستلم رمز Whats_BotString')}
${chalk.blue.italic('ℹ️ جارٍ الاتصال بـ Whatsapp ... يُرجى الانتظار.')}`);
    });
    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold(conn.user.jid.startsWith('90') || conn.user.jid.startsWith('994') ? 'كود جلسة Whats_Bot الخاص بك: ' : 'WhatsBot String Code: '), st
        );

        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ASENA_SESSION="${st}"`);
        }
        console.log(conn.user.jid.startsWith('90') || conn.user.jid.startsWith('994') ? 'لا تشارك هذا الرمز مع أي شخص ' + conn.user.name : 'Dont Share This Code to Anyone ' + conn.user.name)
        process.exit(0);
    });
    await conn.connect();
}
whatsAsena()
