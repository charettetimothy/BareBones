const router = require('express').Router()
const productRoutes = require('./products')
const authRoutes = require('./authRoutes')
const stripeRoutes = require('./stripeRoutes')
// this is localhost3001 user sees 3000 data is api routes 
router.use('/products', productRoutes)
router.use('/authRoutes', authRoutes)
router.use('/stripeRoutes', stripeRoutes)

module.exports = router

