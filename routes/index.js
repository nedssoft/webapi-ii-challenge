const express = require('express')

const { createPost, createPostComment, getAllPosts, getSinglePost } = require('../controllers')
const router = express.Router()

router.post('/', createPost)
router.get('/', getAllPosts )
router.get('/:id', getSinglePost )
router.post('/:id/comments', createPostComment)


module.exports = {
  router: router
}