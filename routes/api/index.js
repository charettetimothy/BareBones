const router = require('express').Router()
// const tablesRoutes = require('./tables')
const productRoutes = require('./products')
const authRoutes = require('./authRoutes')
const stripeRoutes = require('./stripeRoutes')
// Book routes
// router.use('/tables', tablesRoutes)
router.use('/api/products', productRoutes)
router.use('/authRoutes', authRoutes)
router.use('/stripeRoutes', stripeRoutes)
// when dealing with data its usually an api route
module.exports = router

