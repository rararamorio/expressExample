var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  const data = {
    text: 'success!'
  }
  res.send(data)
})

module.exports = router
