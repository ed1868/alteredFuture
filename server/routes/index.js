const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 56,
    user: req.user,
  })
})

module.exports = router
