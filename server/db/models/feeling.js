const Sequelize = require('sequelize')
const db = require('../db')

const Feeling = db.define('feeling', { 
    date: { 
        type: Sequelize.DATEONLY, 
        defaultValue: Sequelize.NOW
    }, 
    type: { 
        type: Sequelize.STRING, 
        allowNull: false
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

module.exports = Feeling