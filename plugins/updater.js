/* Copyright (C) 2021 زلـزال_الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar
- Commend : تحديث.
- Commend : تحديث الان.

*/

const simpleGit = require('simple-git');
const git = simpleGit();
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const WhatsAsenaStack = require('whatsasena-npm');
const Language = require('../language');
const Lang = Language.getString('updater');


Asena.addCommand({pattern: 'تحديث$', fromMe: true, desc: Lang.UPDATER_DESC}, (async (message, match) => {
    await WhatsAsenaStack.startwhatsasena()
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var degisiklikler = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '▫️ [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
        await message.client.sendMessage(
            message.jid,
            degisiklikler + '```', MessageType.text
        ); 
    }
}));
var Action = ''
if (Config.LANG == 'AR') Action = '*- جـاري تحـديث البـوت ... ⪼ 𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆*'
if (Config.LANG == 'AZ') Action = '*WhatsAsena Hal -hazırda Yenilənir!*'
if (Config.LANG == 'EN') Action = '*WhatsAsena Currently Updating!*'
if (Config.LANG == 'RU') Action = '*WhatsAsena сейчас обновляется!*'
if (Config.LANG == 'ES') Action = '*WhatsAsena Actualizando actualmente!*'
if (Config.LANG == 'PT') Action = '*O WhatsAsena está sendo atualizado no momento!*'
if (Config.LANG == 'ML') Action = '*WhatsAsena നിലവിൽ അപ്ഡേറ്റ് ചെയ്യുന്നു!*'
if (Config.LANG == 'HI') Action = '*WhatsAsena वर्तमान में अपडेट हो रहा है!*'
if (Config.LANG == 'ID') Action = '*WhatsAsena Saat Ini Memperbarui!*'
Asena.addCommand({pattern: 'تحديث الان$', fromMe: true, desc: Lang.UPDATE_NOW_DESC}, (async (message, match) => {
    await WhatsAsenaStack.startwhatsasena()
    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text
        );    
    } else {
        var on_progress = false
        if (on_progress) return await message.client.sendMessage(message.jid,Action,MessageType.text)
        var guncelleme = await message.reply(Lang.UPDATING);
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text);
                await new Promise(r => setTimeout(r, 1000));
                return await message.client.sendMessage(
                    message.jid,Lang.IN_AF, MessageType.text);
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            on_progress = true
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text);
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ فشل تحديث البـوت !! * \ n * خطـأ:* ```' + err + '```', MessageType.text);
                }
            }));
            await guncelleme.delete();
        }
    }
}));
