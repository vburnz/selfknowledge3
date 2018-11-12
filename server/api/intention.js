const router = require('express').Router()
const {Intention} = require('../db/models')
module.exports = router

router.get('/', async(req, res, next) => { 
    Intention.findAll()
        .then(intention => {
            res.status(200).json(intention)
        })
        .catch(next)
})

router.post('/', async(req, res, next) => { 
    Intention.create(req.body)
        .then(intention => { 
            res.status(201).json(intention)
        })
        .catch(next)
})

