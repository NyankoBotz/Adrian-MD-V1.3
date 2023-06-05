/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '794370bf166df605baf7ef07' // https://api.lolhuman.xyz
global.rosekey = '1dba55ed01be5c69e2b930c0' // https://api.itsrose.site

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'NyankoBotz-Md'
global.namaowner = 'Razzorz-Cr'

//—————「 Setting Owner 」—————//
global.owner = ['6287762376734']
global.nomerowner = '62 877-62376-734'
global.premium = ['6287762376734']

//—————「 Set Wm 」—————//
global.packname = 'Sticker Create By NyankoBotz \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴\n𝚈𝚃:NyankoBotzOfc'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/4a5867f4f1a172c75e7e5.jpg'
global.link = 'https://youtube.com/@NyankoBotOfficial'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
