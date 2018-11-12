const Sequelize = require('sequelize')
const db = require('../db')

const Moon = db.define('moon', { 
    date: { 
        type: Sequelize.DATEONLY, 
        defaultValue: Sequelize.NOW
    }, 
    moonPhase:{ 
        type: Sequelize.INTEGER
    }, 
    moonPhaseDay: { 
        type: Sequelize.STRING
    }
})

module.exports = Moon