const router = require('express').Router()
const tablesRoutes = require('./tables')
const waitListRoutes = require('./waitlist')
const authRoutes = require('./authRoutes')
const stripeRoutes = require('./stripeRoutes')
// Book routes
router.use('/tables', tablesRoutes)
router.use('/waitlist', waitListRoutes)
router.use('/authRoutes', authRoutes)
router.use('/stripeRoutes', stripeRoutes)

module.exports = router

