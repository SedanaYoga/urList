import express from 'express'
import {
  deleteAList,
  getAllList,
  postAList,
} from '../controller/listController.js'

const router = express.Router()

router.route('/').get(getAllList).post(postAList)
router.route('/:id').delete(deleteAList)

export default router
