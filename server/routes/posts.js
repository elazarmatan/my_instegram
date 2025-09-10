import express from 'express'
import getSpecificPosts from '../controllers/getSpecificPosts.js'
import createPost from '../controllers/createPost.js'
import getAllposts from '../controllers/getAllPosts.js'

const routerPosts = express.Router()

const path = './db/posts.json'

routerPosts.get('/getAllPosts',async (req,res) => {
    try {
        const posts = await getAllposts(path)
        res.json(posts)
    } catch (error) {
        res.status(400).json({msg:'server error'})
    }
})

routerPosts.post('/getPostById',async(req,res) => {
    try {
        const posts = await getSpecificPosts(req.body,path)
        await new Promise(resolve => setTimeout(resolve,2000))
        res.json(posts)
    } catch (error) {
        res.status(400).json({msg:'server error'})
    }
})

routerPosts.post('/createPost',async(req,res) => {
    try {
       await createPost(path,req.body)
    } catch (error) {
        res.status(400).json({msg:'server error'})
    }
    res.json({msg:'create succes'})
})

routerPosts.put('/updatePost',async(req,res) => {
    res.send('hi from update')
})

routerPosts.delete('/deletePost',async(req,res) => {
    res.send('hi from delete')
})

export default routerPosts