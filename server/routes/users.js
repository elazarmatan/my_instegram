import express from 'express'
import getUser from '../controllers/getUser.js'
import bcrypt from 'bcrypt'
import createUser from '../controllers/createUser.js'
import jwt from 'jsonwebtoken'

const userRouter = express.Router()
const path = './db/users.json'

userRouter.post('/login',async(req,res) => {
   try {
    const userExist = await getUser(path,req.body)
    if(!userExist.length) return res.status(400).send(false)
    const passwordMatch = await bcrypt.compare(req.body.password,userExist[0].password)
    if(!passwordMatch) return res.status(400).send(false)
    const token = jwt.sign({userName:req.body.userName},process.env.SECRETE_KEY,{expiresIn:'7h'})
    res.json({token:token})
   } catch (error) {
    console.error(error)
    res.status(400).send(false)
   }
})

userRouter.post('/createUser',async(req,res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password,12)
        req.body.password = hashedPass
        await createUser(path,req.body)
        const token = jwt.sign({userName:req.body.userName},process.env.SECRETE_KEY,{expiresIn:'7m'})
        res.json({token:token})
    } catch (error) {
        console.error(error)
        res.status(400).send('error')
    }
})

userRouter.get('/checkToken',async(req,res) => {
    try {
    const token = req.headers['authorization'].split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    console.log(decoded)
    res.json(decoded);
  } catch (err) {
    res.status(400).json({ msg: `server internal error: ${err}` });
  }
})

export default userRouter