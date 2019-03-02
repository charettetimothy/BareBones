const router = require('express').Router()
const tablesRoutes = require('./tables')
const waitListRoutes = require('./waitlist')
const authRoutes = require('./authRoutes')
// Book routes
router.use('/tables', tablesRoutes)
router.use('/waitlist', waitListRoutes)
router.use('/authRoutes', authRoutes)

module.exports = router

