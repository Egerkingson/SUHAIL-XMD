const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255629982140";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_58_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzZlcDEwbWVHOFJWWmRxWVdxTk5SMnJKdnpWVzJUdldTSW1RLzYyUDNWST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXNHbFBtYnZRRi1xYmRMVDRyUmpQQVwiLFxuICBcInBob25lSWRcIjogXCIzNjFjZjhmMy02YWVkLTQzZTAtYjRjMC01OWQ3OGQ1OTAyZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgNjgsXG4gICAgICAxNzAsXG4gICAgICAxNDEsXG4gICAgICAxMTgsXG4gICAgICA3MSxcbiAgICAgIDI4LFxuICAgICAgMjUxLFxuICAgICAgMTAsXG4gICAgICA5NixcbiAgICAgIDIyOCxcbiAgICAgIDIzMCxcbiAgICAgIDIyMyxcbiAgICAgIDIwMyxcbiAgICAgIDM4LFxuICAgICAgNDksXG4gICAgICAyMDMsXG4gICAgICAxNTAsXG4gICAgICAyNDksXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgODksXG4gICAgICAxMDAsXG4gICAgICAxNzAsXG4gICAgICA0NCxcbiAgICAgIDM3LFxuICAgICAgMjI2LFxuICAgICAgMTMzLFxuICAgICAgMTY3LFxuICAgICAgMTI5LFxuICAgICAgMTgsXG4gICAgICAyMDUsXG4gICAgICAxNTAsXG4gICAgICAxNDAsXG4gICAgICAxNSxcbiAgICAgIDM0LFxuICAgICAgMTkzLFxuICAgICAgMjA4LFxuICAgICAgMTAzLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWllLUVRSOERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyOTk4MjE0MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTExMTgxODQxNzM4MTc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTYvcElzSEVPVzNoTGdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNaFQvUjlpUHRKb1o0Qk5tekZjYnRnQ0JCV09jc0pGVWdKcENMVjlCS1JrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRxQnFlOCs3YVVZMWxoNWZMZnRhQU5ZWTFnc1QvVmRaVEVRUEZOS3paWFFQeVZxNnV6VCtMVUdTOEZLbVpobXF5UTduYThLM0VDUXJzbzNkaGlWMkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhxa2RjSmQzcXJWcGlZVE1lMmthVnJZVFI1bkJ2Sk1sOWxZbmhQQURTTEQ5VDFBb1dmMDFqZU53QzYwWnFxSDk4KzFpMzBIYXkrMmVsSUREcHBTUGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyOTk4MjE0MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTI1OTI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS09EXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLT0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkTzFqbEVTUEZrTmtNR0I5bkN2SDNmMm41NFJ4OFBBcmtvUHZLTXpwaEhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDI3MTQ3NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY3MjI5NjMyMzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
