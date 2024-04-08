const CryptoJS = require('crypto-js')
const fs = require('fs')

function encrypt(text: string) {
  return CryptoJS.AES.encrypt(
    text,
    "yaayooDataEncryptSuperDuperSecretKey",
  ).toString()
}

function decrypt(text: string) {
  return CryptoJS.AES.decrypt(
    text,
    "yaayooDataEncryptSuperDuperSecretKey",
  ).toString(CryptoJS.enc.Utf8)
}
const data = fs.readFileSync('./code.ts', 'utf8')
const encryptedData = encrypt(data)
fs.writeFile('essentials.txt', encryptedData, function (err: any) {
  if (err) throw err;
  console.log('Saved!')
})
/* encrypt() */