import express from 'express'
import getAllPosts from '../controllers/getAllPosts.js'

const routerPosts = express.Router()

routerPosts.get('/getAllPosts',async (req,res) => {
    try {
        const posts = await getAllPosts('./db/posts.json')
        res.json(posts)
    } catch (error) {
        res.status(400).json({msg:error})
    }
})

routerPosts.get('getPostByUserName/:userName',(req,res) => {
    try {
        
    } catch (error) {
        
    }
})

routerPosts.get('getPostByDateAndHour/:DateAndHour',(req,res) => {

})

export default routerPosts