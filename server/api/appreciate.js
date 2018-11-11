const router = require('express').Router()
const {Appreciate} = require('../db/models')
module.exports = router

router.get('/', async(req, res, next) => { 
    Appreciate.findAll()
        .then(appreciate => {
            res.status(200).json(appreciate)
        })
        .catch(next)
})

