import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'

// @desc Fetch all lists
// @route GET /api/lists
// @access Public
export const getAllList = asyncHandler(async (req, res) => {
  const lists = await List.find({})
  res.json(lists)
})

// @desc    Create a list
// @route   POST /api/lists
// @access  Public
export const postAList = asyncHandler(async (req, res) => {
  const { type, details } = req.body
  const { name, url, userName, theDetail } = details
  const list = new List({
    type: type,
    details: {
      name: name,
      url: url,
      userName: userName,
      theDetail: theDetail,
    },
  })
  const createdList = await list.save()
  res.status(201).json(createdList)
})
