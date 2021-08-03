import express from 'express'
import { getAllList, postAList } from '../controller/listController.js'

const router = express.Router()

router.route('/').get(getAllList).post(postAList)
export default router
