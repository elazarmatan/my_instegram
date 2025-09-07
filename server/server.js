import express, { json } from 'express'
import 'dotenv/config'
import cors from 'cors'
import routerPosts from './routes/posts.js'

const server = express()

server.use('/',(req,res,next) => {
    console.log(`method: ${req.method} url: ${req.url}`)
    next()
})

const corsOptions = 'http://localhost:5174/'

server.use(cors(corsOptions))

server.use(express.static('images'))

server.use(json())

server.use('/posts',routerPosts)

server.listen(process.env.PORT,() => console.log(`server listening on port:${process.env.PORT}`))