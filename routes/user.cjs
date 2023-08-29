const express = require('express')

const router = express.Router()

const userCtrl = require('../controllers/user.cjs')

const ensureLoggedIn = require('../config/ensureLoggedIn.cjs')

//INDUCES
//I
//N
//D
router.delete('/:id', userCtrl.auth, userCtrl.deleteUser)
//U
router.put('/:id', userCtrl.updateUser, userCtrl.auth)
//C
router.post('/new', userCtrl.createUser, userCtrl.auth)
//E
//S
router.get('/:id', userCtrl.getUser)

router.get('/check-token', ensureLoggedIn, userCtrl.checkToken)

module.exports = router

