const express = require('express')

const { createPost, createPostComment, getAllPosts } = require('../controllers')
const router = express.Router()

router.post('/', createPost)
router.get('/', getAllPosts )
router.post('/:id/comments', createPostComment)

module.exports = {
  router: router
}