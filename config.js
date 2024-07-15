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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_34_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4Kzg2TUNNajMzdGo1T015YmlMZFFFZ0ZMN0tlSm5TbUQ2RW5FSm53RkVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrSU5vOG9TcFR6MkpRelZVQmotaTZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1Mzc3M2M5LTcxMDQtNDkxMS1hZWM3LWZhMjRiN2RiN2Q0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDUyLFxuICAgICAgNzAsXG4gICAgICAyNTIsXG4gICAgICAxNzcsXG4gICAgICAxMTYsXG4gICAgICAxNzIsXG4gICAgICAxODAsXG4gICAgICAyMzYsXG4gICAgICAyMjcsXG4gICAgICA1LFxuICAgICAgOTAsXG4gICAgICAxMixcbiAgICAgIDEzMSxcbiAgICAgIDE0OCxcbiAgICAgIDIwOCxcbiAgICAgIDExLFxuICAgICAgMjMyLFxuICAgICAgMjMzLFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDE0OCxcbiAgICAgIDY2LFxuICAgICAgNjYsXG4gICAgICAxNjEsXG4gICAgICAxODAsXG4gICAgICAxMzcsXG4gICAgICAxNDYsXG4gICAgICA4OCxcbiAgICAgIDE5MixcbiAgICAgIDU2LFxuICAgICAgODIsXG4gICAgICAxNCxcbiAgICAgIDI1NSxcbiAgICAgIDE2MixcbiAgICAgIDE0NCxcbiAgICAgIDQyLFxuICAgICAgMTg2LFxuICAgICAgOTksXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcXgzdWtERU4rRjA3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJxd2ZYT3k3MGNGRlExZEdick1MZ25jMHNlYUs3UDFPSmNpeVRRN3NjaHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQmxDUktsRGd1SkRqWUwzVG1HYUF4aVEvdEdFblQ0QmxacFpPdDJXT01nbVdIQThUY3dmVEZsQkg2ZTcxbk9qRVVNUVFzZXV4TytrRytxZG91Zk9DQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0JzQUs1RzJCcHdWZGxqQ0N5ekFBQ1kzb0VNVnltNi9TUFF5ckRWeUpka2ZzTWdCZ3gxZ0RnZWdQclpPM0pJSE4yTUoyTDJDcUlXM0ljeW51TGRnZ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2NjM0ODE5OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjg0MjMwMDczMjYzMzc6MjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM2NjM0ODE5OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMjUyNTFcbn0iCn0="  // PUT your SESSION_ID 


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
