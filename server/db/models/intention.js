const Sequelize = require('sequelize')
const db = require('../db')

const Intention = db.define('intention', { 
    date: { 
        type: Sequelize.DATEONLY, 
        defaultValue: Sequelize.NOW
    }, 
    target: { 
        type: Sequelize.STRING
    }, notes: { 
        type: Sequelize.TEXT
    }, 
    tags : { 
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})

module.exports = Intention