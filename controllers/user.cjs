const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.cjs')


//function to create a token using JWT
function createJWT(user){
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
        )
    }
    
//checkToken function which responds with the expiry of the the token
exports.checkToken = (req, res) => {
    console.log('req.user', req.user)
    res.json(req.exp)
  }

//authencationn function which returns the local token
const apiController ={

    auth (req,res){
        cons
        res.json(res.locals.data.token)
    }
}
//********************************************CRUD********************************************//
const dataController ={
//C
      async createUser (req,res,next){
    try {
        const newUser = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = newUser
        res.locals.data.token = token
        res.json(newUser)
        next()
    } catch (error) {
        console.log('Ya gatta database prablem son')
        req.status(400).json({error:error.message})
    }
},

//R
    async getUser(req,res,next){
    try {
        const foundUser =  await User.findOne({_id:req.params.id})
        res.json(foundUser)
        next()
    } catch (error) {
        req.status(400).json({error:error.message})
        
    }
},


    async loginUser (req,res,next){
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user) throw Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match) throw new Error()
        res.locals.data.user = user
        res.locals.data.token = createJWT(token)
        next()
    } catch (error) {
        res.status(400).json('Bad Credentials')
    }
},

//U
    async updateUser(req,res,next) {
    try {
        const updatedUser = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        updatedUser.save()
        res.locals.data.user = updatedUser
        res.locals.data.user = req.user.token 
        next()
    } catch (error) {
        res.status(400).json('Bad Credentials')
        
    }
},

//D
    async deleteUser (req,res,next){
    try {
        await User.findOneAndDelete({email:req.body.email})
        req.locals.data.user = null
        req.locals.data.token = null
        res.json('User Deleted')
        next()
    } catch (error) {
        res.status(400).json('Bad Credentials')
        
    }
}
}


module.exports = {
    checkToken,
    dataController,
    apiController
}