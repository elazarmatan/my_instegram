import express from 'express'
import getUser from '../controllers/getUser.js'
import bcrypt from 'bcrypt'
import createUser from '../controllers/createUser.js'

const userRouter = express.Router()
const path = './db/users.json'

userRouter.post('/login',async(req,res) => {
   try {
    const userExist = await getUser(path,req.body)
    const passwordMatch = await bcrypt.compare(req.body.password,userExist[0].password)
    res.send(passwordMatch)
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
        res.json({msg:'succes'})
    } catch (error) {
        console.error(error)
        res.status(400).send('error')
    }
})

export default userRouter