import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'

export const getAllList = asyncHandler(async (req, res) => {
  const lists = await List.find({})
  res.json(lists)
})

export const postAList = asyncHandler(async (req, res) => {
  res.json(req.body)
})
