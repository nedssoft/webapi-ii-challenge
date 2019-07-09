const express = require('express')

const { createPost, createPostComment, getAllPosts, getSinglePost, deletePost } = require('../controllers')
const router = express.Router()

router.post('/', createPost)
router.get('/', getAllPosts )
router.get('/:id', getSinglePost )
router.delete('/:id', deletePost )
router.post('/:id/comments', createPostComment)


module.exports = {
  router: router
}