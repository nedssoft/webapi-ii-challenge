const express = require('express')

const { createPost, createPostComment } = require('../controllers')
const router = express.Router()

router.post('/', createPost)

router.post('/:id/comments', createPostComment)
module.exports = {
  router: router
}