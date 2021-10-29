/* Copyright (C) 2021 زلـزال_الهيبـه.

- By   : ®WhatsAsena - Yusuf Ust
- Edit : ©𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁 : t.me/WhatsBot_Ar
- Commend : مساعده.

*/

const Asena = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');

// ==================== MAIN DESCRIPTION TEXT ====================
const h_Des = "- يقدم معلومات حول استخدام  𝗪𝗵𝗮𝘁𝘀_𝗕𝗼𝘁🔆  عبر قائمـة المساعـدة."
const h_DedEN = "Gives information about using the bot from the Help menu."
const matchnullEN = "========== *🆘 General Help 🆘* ==========\n\n🔹 *.alive:* Checks if the bot is running.\n\n🔹 *.asena:* Shows the complete list of commands.\n🔹 *.setvar:* It settings config without entering Heroku.\n\n🔸 For more help, use the command ```.help <the topic you want help with>```\nExample: ```.help how can ı turn to public my bot?```\n\n========== *End General Help* =========="
const matchnull = "========== *🆘 القائمـه الرئيسيـه 🆘* ==========\n\n🔹 *.بوت:* يتحقق ما إذا كان البـوت قيد التشغيل.\n🔹 *.الاوامر:* يظهر كل قائمـة الأوامـر.\n🔹 *.setvar:* اضـافة الفارات دون الدخول لهيروكو.\n\n🔸 لمزيد من المساعدة ```.مساعده + الموضوع الذي تريد المساعدة فيه``` استخدم الأمـر.\nمثـال: ```.مساعده كيف أجعل الروبوت الخاص بي متاحًا للجميع؟؟```\n\n========== *تمـت المساعـدة العامـة* =========="
const notfound = "```لم يتم العثور على المساعدة التي طلبتها!```\n```يرجى وصف المشكلة بشكل أكثر وصفيًا.```"
const notfoundEN = "```The help you wanted to get was not found!```\n```Please state the problem in a more descriptive way.```"

// ==================== ALL DESCRİPTİONS ====================
const pubTR = "- سيـؤدي جعل البـوت الخاص بك عـامً إلى جعل الأوامـر عامـة. بعد إتاحتـه للجمهور ، يمكن للمستخدم استخـدام الأوامر الشخصية والمسؤولـة فقط. لا يمكن استخـدام أوامـر أخـرى.\n- لجعل البـوت الخاص بك عـامً *.setvar WORK_TYPE:public* استخـدم الأمـر التالـي."
const pubEN = "Making your bot public will make the commands public. After it is made public, the user can only use personal and admin commands. User cannot use commands other than this.\n To make your bot public, type *.setvar WORK_TYPE:public*"
const blTR = "يغلق BlockChat bot اي مجموعة أو شخص أو دردشات متعددة انت تحددها.\nلاستخدامه ، انتقل أولاً إلى الدردشة واكتب *.jid* ثم انسخ إلى الكود الوارد. (Except @g.us or @whatsapp.net!)\nثم استخدم هذا الأمـر *.setvar BLOCK_CHAT:id && id1,id2..*"
const sudoTR = "رفـع مطـور ، يشارك الروبوت الخاص بك مع المستخدم الذي تختاره بكل صلاحياته ، إذا وضعت 0 في نهاية الرقم ، حيث يمكن للمستخدم أيضًا استخدامه في المجموعـة.\nللاستخدام ، اكتب *.setvar SUDO:90xxxx && 90xx,90xxx [مع مفتاح الدولة, (❌ +90xx • ✅ 90xx)]*"

const privTR = "إن جعل الروبوت خاصًا يجعل الأوامر خاصة لك فقط .. حيث لا يمكن لأي شخص استخدامـه معك.\nلجعل الروبوت خاصًا ، اكتب *.setvar WORK_TYPE:private*""
const privEN = "Making your bot private makes commands private only for you. Anyone cannot use.\nTo make your bot private, type *.setvar WORK_TYPE:private*"
const blEN = "Closes BlockChat bot to group, person or multiple chats you specify.\n To use it, first go to chat and type *.jid* Then copy to incoming code. (Except @g.us or @whatsapp.net!)\nThen use this command *.setvar BLOCK_CHAT:id && id1,id2..*"
const sudoEN = "SUDO, Shares your bot to the user you choose with all its powers.If you put ,0 at the end of the number, the user can also use it in the group.\nTo use, type *.setvar SUDO:90xxxx && 90xx,90xxx [with county code, (❌ +90xx • ✅ 90xx)]*"

if (Config.LANG == 'AR' || Config.LANG == 'AZ') {
    
    Asena.addCommand({pattern: 'مساعده ?(.*)', fromMe: true, desc: h_Des}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnull,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('nasıl')) || (match[1].includes('public') && match[1].includes('yapimi')) || (match[1].includes('public') && match[1].includes('yapımı')) || (match[1].includes('public') && match[1].includes('nedir')) || (match[1].includes('herkese') && match[1].includes('acik') || match[1].includes('açık')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('nasıl')) || (match[1].includes('private') && match[1].includes('yapimi')) || (match[1].includes('private') && match[1].includes('yapımı')) || (match[1].includes('private') && match[1].includes('nedir')) || (match[1].includes('bana') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                privTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('belirli') && match[1].includes('sohbet')) || (match[1].includes('sohbet') && match[1].includes('kapat')) || (match[1].includes('nasil') && match[1].includes('kapatabilirim')) || (match[1].includes('blockchat') && match[1].includes('nedir')) || (match[1].includes('sohbet') && match[1].includes('özel')) ) {
            return await message.client.sendMessage(
                message.jid,
                blTR,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('nedir')) || (match[1].includes('SUDO') && match[1].includes('nasil')) || (match[1].includes('botu') && match[1].includes('baskasina')) || (match[1].includes('botu') && match[1].includes('arkadaşıma')) || (match[1].includes('SUDO') && match[1].includes('kullanmak')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoTR,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfound,
                MessageType.text
            );
        }
    }));
}
else {
    
    Asena.addCommand({pattern: 'مساعده ?(.*)', fromMe: true, desc: h_DedEN}, (async (message, match) => {

        if (match[1] === '') {
            return await message.client.sendMessage(
                message.jid,
                matchnullEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('public') && match[1].includes('how')) || (match[1].includes('public') && match[1].includes('set')) || (match[1].includes('public') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                pubEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('private') && match[1].includes('how')) || (match[1].includes('private') && match[1].includes('set')) || (match[1].includes('private') && match[1].includes('setting')) ) {
            return await message.client.sendMessage(
                message.jid,
                privEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('SUDO') && match[1].includes('usage')) || (match[1].includes('SUDO') && match[1].includes('what')) || (match[1].includes('how') && match[1].includes('SUDO')) || (match[1].includes('set') && match[1].includes('SUDO')) || (match[1].includes('share') && match[1].includes('bot')) ) {
            return await message.client.sendMessage(
                message.jid,
                sudoEN,
                MessageType.text
            );
        }
        else if ( (match[1].includes('block') && match[1].includes('chat')) || (match[1].includes('how') && match[1].includes('block')) || (match[1].includes('close') && match[1].includes('bot')) || (match[1].includes('specific') && match[1].includes('chat')) || (match[1].includes('specific') && match[1].includes('set')) ) {
            return await message.client.sendMessage(
                message.jid,
                blEN,
                MessageType.text
            );
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                notfoundEN,
                MessageType.text
            );
        }
    }));
}
