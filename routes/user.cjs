const express = require('express')

const router = express.Router()

const {dataController,apiController, checkToken} = require('../controllers/user.cjs')

const ensureLoggedIn = require('../config/ensureLoggedIn.cjs')

//INDUCES
//I
//N
//D
router.delete('/:id', apiController.auth, dataController.deleteUser)
//U
router.put('/:id', dataController.updateUser, apiController.auth)
//C
router.post('/new', dataController.createUser, apiController.auth)
//E
//S
router.get('/:id', userCtrl.getUser)

router.get('/check-token', ensureLoggedIn, checkToken)

module.exports = router

