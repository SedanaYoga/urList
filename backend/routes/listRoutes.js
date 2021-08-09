import express from 'express'
import {
  deleteAList,
  getAllList,
  postAList,
  updateAList,
} from '../controller/listController.js'

const router = express.Router()

router.route('/').get(getAllList).post(postAList)
router.route('/:id').put(updateAList).delete(deleteAList)

export default router
