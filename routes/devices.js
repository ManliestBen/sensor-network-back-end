import { Router } from 'express'
import * as devicesCtrl from '../controllers/devices.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, devicesCtrl.index)
router.get('/:id', checkAuth, devicesCtrl.show)
router.post('/', checkAuth, devicesCtrl.create)

export { router }
