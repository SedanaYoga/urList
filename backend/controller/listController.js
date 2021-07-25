import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'

export const getAllList = asyncHandler(async (req, res) => {
  const lists = await List.find({})
  res.json(lists)
})

export const postAList = asyncHandler(async (req, res) => {
  res.json(req.body)
  // const { type, details } = req.body
  // const list = await List.create({
  //   type,
  //   details,
  // })
  // if (list) {
  //   res.status(201).json({
  //     _id: list._id,
  //     type: list.type,
  //     details: list.details,
  //   })
  // } else {
  //   res.status(400)
  //   throw new Error('Gabisa post!')
  // }
})
