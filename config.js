const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "29B3TTbT#lkuTgYxb13y-3SayEq2CK18MW2gfKCh2JHT0eNdek1k",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/gaveshvimanshana126-cyber/VIMA-MD_V1/refs/heads/main/Image/20260218_134730.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 VIMA-MD Is Alive Now😍*",
BOT_OWNER: '94742549935',  // Replace with the owner's phone number



};
