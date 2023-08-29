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
const checkToken = (req, res) => {
    console.log('req.user', req.user)
    res.json(req.exp)
  }

//********************************************CRUD********************************************//
//C
exports.createUser = async (req,res,next)=>{
    try {
        const newUser = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = newUser
        res.locals.data.token = token
        next()
    } catch (error) {
        console.log('Ya gatta database prablem son')
        req.status(400).json({error:error.message})
    }
}

//R
exports.getUser = async (req,res,next)=>{
    try {
        const foundUser =  await User.findOne({_id:req.params.id})
        res.json(foundUser)
    } catch (error) {
        req.status(400).json({error:error.message})
        
    }
}


exports.loginUser = async (req,res,next)=>{
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
}

//U
exports.updateUser = async (req,res,next) =>{
    try {
        const updatedUser = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        updatedUser.save()
        res.locals.data.user = updatedUser
        res.locals.data.user = req.user.token 
        
    } catch (error) {
        res.status(400).json('Bad Credentials')
        
    }
}

//D
exports.deleteUser = async (req,res,next)=>{
    try {
        await User.findOneAndDelete({email:req.body.email})
        req.locals.data.user = null
        req.locals.data.token = null
        res.json('User Deleted')
    } catch (error) {
        res.status(400).json('Bad Credentials')
        
    }
}