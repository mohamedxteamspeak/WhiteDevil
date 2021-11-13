/* Copyright (C) 2021 TERROR-BOY.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WHITE DEVIL ----»»» TERROR BOY
*/

/*
 __________   _________     ________________  
     EDUTHO BUT CREDIT THERANAM
     
     THANKS TO AFNAN-PLK 
_______  __________  ___________  ________    
*/

const Ktb = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const White = require('../white');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

    Ktb.addCommand({pattern: 'snd$', fromMe: true, desc: 'Download status from wa'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'reply to a status', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'*Downloading Status* \n\n ',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('status.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.jid,fs.readFileSync('status.png'), MessageType.image ,{caption: '```WA STATUS GENERATED BY WHITEDEVIL```'  , mimetype: Mimetype.jpg, quoted: message.data,thumbnail: White.tm_b});
            });
        return 
        }
       else (message.reply_message.video === true && message.reply_message.video) 
        ffmpeg(location)
            .save('st.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid,fs.readFileSync('st.mp4'), MessageType.video , {caption: '```WA STATUS GENERATED BY WHITEDEVIL```'  , mimetype: Mimetype.mp4, quoted: message.data,thumbnail: White.tm_b});
            });
        
        return 
    }));
    
    /*
    
   Ktb.addCommand({pattern: 'sndv$', fromMe: true, desc: 'Download status from wa'}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,'reply to a status', MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,'*Downloading Video Status* \n\n ```If it is image try cmd [.sndi]```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === true && message.reply_message.video) {
            ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video ,{caption: '```WA STATUS GENERATED BY WHITEDEVIL```'  , mimetype: Mimetype.mp4, quoted: message.data,thumbnail: White.tm_b});
            });
        return 
        }

        ffmpeg(location)    
            .save('output.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp4'), MessageType.video, {caption: '```WA STATUS GENERATED BY WHITEDEVIL```'  , mimetype: Mimetype.mp4, quoted: message.data,thumbnail: White.tm_b});
            });
        return 
    }));
    
    
    
   */
   
