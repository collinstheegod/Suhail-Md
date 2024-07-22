const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process. env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_22_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVR2ZxazBhdVJxUHlYN0k1ZGVDL3AyWTRMTlZzQi9QMFNjUVAzdUw3YndnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODAyMTU3NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI1M0E1RUZBMDAxREM1MzkwMDVDMkZENkFEQzYzQkYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTYzNjU2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODAyMTU3NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZENkZGNDY3QzRFOEU1REUxN0NCNzlDMDIxMUYxRkNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTYzNjU2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxVlZOYnp2a1JNV2Q2NWY1akw4VEJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2Y2JjOWU0LTk3YmUtNDlhOS1hYjdlLTUwNzFkYmM1NjI2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAxNDksXG4gICAgICAxNjYsXG4gICAgICAxOTMsXG4gICAgICAyNTQsXG4gICAgICA1NyxcbiAgICAgIDIzOSxcbiAgICAgIDUsXG4gICAgICAxMjksXG4gICAgICAxMSxcbiAgICAgIDYxLFxuICAgICAgMjIsXG4gICAgICAxOTUsXG4gICAgICAxODQsXG4gICAgICAxODYsXG4gICAgICAyNSxcbiAgICAgIDEyMCxcbiAgICAgIDUxLFxuICAgICAgNTMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAyMTEsXG4gICAgICAxNTYsXG4gICAgICAxODEsXG4gICAgICAxODUsXG4gICAgICAxMTQsXG4gICAgICAxNixcbiAgICAgIDIsXG4gICAgICA4NyxcbiAgICAgIDE0MixcbiAgICAgIDYsXG4gICAgICAyOSxcbiAgICAgIDIzOSxcbiAgICAgIDMzLFxuICAgICAgMTkzLFxuICAgICAgNSxcbiAgICAgIDcxLFxuICAgICAgMCxcbiAgICAgIDI1LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBKRVZLQ1o3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgwMjE1NzU4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwODE2OTA1MzM1NjI1MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfjLkgUm9zZSDwn4y5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hkL29ZRUVNMnQrTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3NDNSVzY4cFpVd05BclNwZnpJdkMwRnk2T0t3bmlBNWp3dFhMSGpsVVV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVGOEJqeHZwVkpjb0dyNC9WbVU2UEFIaWZwTFUycTN6UjRVYUlxME5odkp5dUFob0JJbnJDMjYvM3NGekZpRTdtLzZyMEJzNm9oMzVkZXNBZ0RTUUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9OM3BhR3JnOEZGdUxoeFhrbWRXS0w1UXNMT1lNMjFsTGd4blAvajJQeHFFMTY5MzhpSjVPSlkzeUFPRkw0WXpxNjN4UjdSQkcxa3BHOTFETDFmVEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODAyMTU3NTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2MzY1NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKS2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpLYi5qc29uIjogIntcImtleURhdGFcIjpcInQ4Tlo1M3NEYjdORGx0aGpBeTQyVmsyejFSL01SMEJzQXdsWDdzd2Vxb2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA4ODQwMTEyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjM2NTYyOTEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
