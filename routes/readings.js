import { Router } from 'express'
import * as readingsCtrl from '../controllers/readings.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/', readingsCtrl.create)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }
