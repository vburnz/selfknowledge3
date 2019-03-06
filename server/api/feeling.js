const router = require('express').Router()
const {Feeling} = require('../db/models')
module.exports = router

router.get('/:feelingType', async(req, res, next) => { 
    Feeling.findAll({ 
        where : { 
            type: req.params.feelingType
        }
    })
        .then(feeling => {
            res.status(200).json(feeling)
        })
        .catch(next)
})

router.get('/:feelingType/cycle/:startDate', async(req, res, next) => { 
    const date = new Date(Number(req.params.startDate)).setHours(0, 0, 0, 0); 
    console.log(date); 
    Feeling.findAll({
        where: { 
            createdAt: { 
                $gt: date
            }
        }
    })
        .then(feeling => {
            res.status(200).json(feeling)
        })
        .catch(next)
})

router.post('/:feelingType', async(req, res, next) => { 
    Feeling.create({...req.body, type: req.params.feelingType})
        .then(feeling => { 
            res.status(201).json(feeling)
        })
        .catch(next)
})

