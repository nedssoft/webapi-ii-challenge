const express = require('express')

const { createPost } = require('../controllers')
const router = express.Router()

router.post('/', createPost)

module.exports = {
  router: router
}