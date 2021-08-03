import mongoose from 'mongoose'
import CryptoJS from 'crypto-js'
import dotenv from 'dotenv'
dotenv.config()

const passphrase = process.env.CRYPTOJS_SECRET_PASSPHRASE

const listSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    details: {
      name: { type: String, required: true },
      url: { type: String, required: false },
      userName: { type: String, required: false },
      theDetail: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
)

listSchema.methods.decryptText = async function (text) {
  return await CryptoJS.AES.decrypt(text, passphrase).toString(
    CryptoJS.enc.Utf8
  )
}

listSchema.pre('save', async function (next) {
  if (this.type === 'account') {
    this.details.theDetail = await CryptoJS.AES.encrypt(
      this.details.theDetail,
      passphrase
    ).toString()
  } else {
    next()
  }
})

const List = mongoose.model('List', listSchema)

export default List
