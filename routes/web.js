import express from 'express'
const router = express.Router()


import StudentController from '../controller/studentController.js'


router.get('/', StudentController.getAllDoc)
router.post('/', StudentController.createDoc)
router.get('/:id', StudentController.getSingleDocBYId)
router.put('/:id', StudentController.updateDocById)
router.delete('/:id', StudentController.deleteDocById)


export default router 