import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

/*conn.send3ButtonLoc(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, buttons3, idbuttons3, m)*/
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //kata
    let kata = `${pickRandom('𝐏𝐞𝐫𝐛𝐚𝐧𝐲𝐚𝐤 𝐢𝐛𝐚𝐝𝐚𝐡','𝐒𝐥𝐚𝐥𝐮 𝐛𝐞𝐫𝐬𝐲𝐮𝐤𝐮𝐫 𝐚𝐭𝐚𝐬 𝐧𝐢𝐤𝐦𝐚𝐭 𝐘𝐚𝐧𝐠 𝐌𝐚𝐡𝐚 𝐊𝐮𝐚𝐬𝐚','𝐓𝐢𝐧𝐠𝐠𝐚𝐥𝐤𝐚𝐧 𝐩𝐞𝐫𝐛𝐮𝐚𝐭𝐚𝐧 𝐲𝐚𝐧𝐠 𝐧𝐞𝐠𝐚𝐭𝐢𝐯𝐞','𝐇𝐢𝐝𝐮𝐩 𝐜𝐮𝐦𝐚 𝐬𝐞𝐤𝐚𝐥𝐢','𝐉𝐚𝐧𝐠𝐚𝐧 𝐥𝐮𝐩𝐚 𝐛𝐞𝐫𝐚𝐦𝐚𝐥','𝐔𝐧𝐭𝐮𝐤 𝐦𝐚𝐬𝐚 𝐝𝐞𝐩𝐚𝐧 𝐲𝐚𝐧𝐠 𝐜𝐞𝐫𝐚𝐡','𝐃𝐢𝐝𝐮𝐧𝐢𝐚 𝐦𝐚𝐮𝐩𝐮𝐧 𝐝𝐢 𝐚𝐤𝐡𝐢𝐫𝐚𝐭','𝐒𝐞𝐦𝐮𝐚 𝐢𝐧𝐝𝐚𝐡 𝐩𝐚𝐝𝐚 𝐰𝐚𝐤𝐭𝐮𝐧𝐲𝐚','𝐃𝐮𝐧𝐢𝐚 𝐭𝐞𝐫𝐮𝐬 𝐛𝐞𝐫𝐩𝐮𝐭𝐚𝐫','𝐘𝐚𝐧𝐠 𝐝𝐢𝐚𝐭𝐚𝐬 𝐚𝐤𝐚𝐧 𝐦𝐞𝐫𝐚𝐬𝐚𝐤𝐚𝐧 𝐲𝐚𝐧𝐠 𝐝𝐢𝐛𝐚𝐰𝐚𝐡','𝐁𝐞𝐠𝐢𝐭𝐮𝐩𝐮𝐧 𝐬𝐞𝐛𝐚𝐥𝐢𝐤𝐧𝐲𝐚','𝐇𝐢𝐝𝐮𝐩 𝐭𝐢𝐝𝐚𝐤 𝐚𝐤𝐚𝐧 𝐚𝐛𝐚𝐝𝐢','𝐉𝐢𝐤𝐚 𝐞𝐧𝐠𝐤𝐚𝐮 𝐬𝐞𝐥𝐚𝐥𝐮 𝐢𝐧𝐠𝐤𝐚𝐫 𝐣𝐚𝐧𝐣𝐢 𝐤𝐞𝐩𝐚𝐝𝐚 𝐀𝐥𝐥𝐚𝐡','𝐃𝐚𝐧 𝐬𝐞𝐥𝐚𝐥𝐮 𝐦𝐞𝐧𝐠𝐮𝐜𝐚𝐩𝐤𝐚𝐧 𝐢𝐬𝐭𝐢𝐠𝐟𝐚𝐫 𝐣𝐢𝐤𝐚 𝐞𝐧𝐠𝐤𝐚𝐮 𝐦𝐞𝐧𝐠𝐚𝐥𝐚𝐦𝐢 𝐦𝐮𝐬𝐢𝐛𝐚𝐡','𝐘𝐚𝐧𝐠 𝐦𝐞𝐧𝐢𝐦𝐩𝐚𝐦𝐮','𝐀𝐰𝐚𝐥𝐢 𝐝𝐞𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐜𝐮𝐜𝐚𝐩𝐤𝐚𝐧 𝐛𝐢𝐬𝐦𝐢𝐥𝐥𝐚𝐡','𝐒𝐞𝐫𝐭𝐚 𝐝𝐢 𝐚𝐤𝐡𝐢𝐫𝐢 𝐝𝐞𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐮𝐜𝐚𝐩𝐤𝐚𝐧 𝐡𝐚𝐦𝐝𝐚𝐥𝐚𝐡')}`
/*conn.sendButton(m.chat, `*${ucapan()}, ${name} 👋*`, text.trim(), await genProfile(conn, m), [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], false, { quoted: fkon, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://facebook.com/sadtime098",
    mediaType: "VIDEO",
    description: "https://facebook.com/sadtime098",
    title: `${pickRandom('Halo Apa Kabar?')}`,
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
}
} })*/
let nowaa = '0'
let nogww = '628988986891'
let nogwww = `@${nomorown1.split`@`[0]}`
let nowa = `${nowaa.split`@`[0]}@s.whatsapp.net`
let nogw = `${nogww.split`@`[0]}@s.whatsapp.net`
let but1 = ('All Menu') 
let id1 = '.? all'
let but2 = ('List Menu') 
let id2 = '.tesm'
let but3 = ('Sewabot') 
let id3 = '.sewa'
let konten = (`*${ucapan()}, ${tag} 👋*, ${kata}`)
let knnt = `
*『 𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚝𝚒𝚘𝚗 』* 

⁛ BOT(BUILD-OPERATE-TRANSFER) adalah program komputer yang dijalankan di Whatsapp yang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis, BOT Whatsapp dirancang sedemikian rupa sehingga dapat digunakan dengan nyaman, dan kemungkinan memiliki sedikit bug, Adanya fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, dll`
let ᴛᴇs = `Pᴏᴡᴇʀᴇᴅ Bʏ ⬝ @${nomorwa.split`@`[0]}\nCʀᴇᴀᴛᴏʀ Bᴏᴛ ⬝ @${nomorown1.split`@`[0]}\n☃︎ *DATE:* ${week} ${date}\n☃︎ *TIME:* ${wktuwib}`
conn.send2ButtonImg(m.chat, await genProfile(conn, m), konten, ᴛᴇs, but1, id1, but2, id2, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://facebook.com/sadtime098',
    mediaType: 2, 
    description: sgc,
    title: "𝐇𝐚𝐢, 𝐉𝐚𝐧𝐠𝐚𝐧 𝐥𝐮𝐩𝐚 𝐛𝐞𝐫𝐬𝐲𝐮𝐤𝐮𝐫 𝐡𝐚𝐫𝐢 𝐢𝐧𝐢 :)",
    body: kata,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.register = true

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "𝐏𝐚𝐠𝐢 𝐤𝐚𝐤 🏙️"
  }
  if (time >= 10) {
    res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐬𝐢𝐚𝐧𝐠 𝐤𝐚𝐤 ☀️"
  }
  if (time >= 15) {
    res = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐬𝐨𝐫𝐞 𝐤𝐚𝐤 🌇"
  }
  if (time >= 18) {
    res = "𝐌𝐚𝐥𝐚𝐦 𝐤𝐚𝐤 🌃"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}