const router = require('express').Router()
const {Mourn} = require('../db/models')
module.exports = router

router.get('/', async(req, res, next) => { 
    Mourn.findAll()
        .then(mourn => {
            res.status(200).json(mourn)
        })
        .catch(next)
})

