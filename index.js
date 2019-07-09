const express = require('express')
const server = express()

const { router } = require('./routes')

server.use(express.json());

server.use('/api/posts', router)
server.get('/', (req, res) => {
  return res.status(200).json({message: 'The server is running'})
})
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`)
})