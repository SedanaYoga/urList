import express from 'express'
import { getAllList, postAList } from '../controller/listController.js'

const router = express.Router()
// @desc Fetch all lists
// @route GET /
// @access Public
router.route('/').get(getAllList).post(postAList)
export default router
