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

// @desc    Delete a list
// @route   DELETE /api/lists/:id
// @access  Public
export const deleteAList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id)
  if (list) {
    await list.remove()
    res.json({ message: 'The list is successfully removed!' })
  } else {
    res.status(404)
    throw new Error('The list is not found!')
  }
})
