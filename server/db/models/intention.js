const Sequelize = require('sequelize')
const db = require('../db')

const Intention = db.define('intention', { 
    date: { 
        type: Sequelize.DATEONLY, 
        defaultValue: Sequelize.NOW
    }, 
    target: { 
        type: Sequelize.STRING, 
        allowNull: false 
    }, notes: { 
        type: Sequelize.TEXT, 
        allowNull: false
    }, 
    tags : { 
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})

module.exports = Intention