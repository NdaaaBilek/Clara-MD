import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628xxx', 'Xyroinee', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285640575421'
global.packname = 'Ndaa - MD by'
global.author = '© Ndaa.'
global.namebot = '​NdaaBotz - MD'
global.wm = '© NdaaBotz-Md By Ndaa'
global.stickpack = 'NdaaBotz - Md by'
global.stickauth = '© Ndaa'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/'
global.sgh = 'https://github.com/Ndaaabilek'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co'
global.ptrakterr = 'https://trakteer.id'
global.povo = ''
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'nkVtJv9DVi'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "nkVtJv9DVi",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

