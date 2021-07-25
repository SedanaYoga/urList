import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
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
})

const List = mongoose.model('List', listSchema)

export default List
