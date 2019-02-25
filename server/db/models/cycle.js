const Sequelize = require('sequelize')
const db = require('../db')

const Cycle = db.define('cycle', { 
    startDate: { 
        type: Sequelize.DATEONLY
    }, 
    endDate: { 
        type: Sequelize.DATEONLY
    }
})
 
module.exports = Cycle