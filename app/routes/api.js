import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import CropController from '../controllers/cropController.js';
import ProducerController from '../controllers/producerController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)

router.get('/crops', CropController.index)
router.post('/crops', CropController.store)
router.get('/crops/:id', CropController.show)
router.put('/crops/:id', CropController.update)
router.delete('/crops/:id', CropController.destroy)

router.get('/producers', ProducerController.index)
router.post('/producers', ProducerController.store)
router.get('/producers/:id', ProducerController.show)
router.put('/producers/:id', ProducerController.update)
router.delete('/producers/:id', ProducerController.destroy)

export default router
