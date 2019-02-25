const Sequelize = require('sequelize')
const db = require('../db')

const Mourn = db.define('mourn', { 
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

module.exports = Mourn