import express from 'express'
import getAllPosts from '../controllers/getAllPosts.js'
import getSpecificPosts from '../controllers/getSpecificPosts.js'

const routerPosts = express.Router()

const path = './db/posts.json'

routerPosts.get('/getAllPosts',async (req,res) => {
    try {
        const posts = await getAllPosts(path)
        res.json(posts)
    } catch (error) {
        res.status(400).json({msg:'server error'})
    }
})

routerPosts.get('/getPostByUserName/:userName',async(req,res) => {
    console.log(req.params.userName)
    try {
        const posts = await getSpecificPosts('userName',req.params.userName,path)
        res.json(posts)
    } catch (error) {
        res.status(400).json({msg:'server error'})
    }
})

routerPosts.post('/createPost',async(req,res) => {
    res.send('hi from create')
})

routerPosts.put('/updatePost',async(req,res) => {
    res.send('hi from update')
})

routerPosts.delete('/deletePost',async(req,res) => {
    res.send('hi from delete')
})

export default routerPosts