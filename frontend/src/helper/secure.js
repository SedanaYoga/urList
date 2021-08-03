import CryptoJS from 'crypto-js'

const passphrase = 'Z97_i7MW-h3k!'

export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}
