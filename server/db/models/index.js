const User = require('./user')
const Appreciate = require('./appreciate')
const Mourn = require('./mourn')
const Intention = require('./intention')
const Moon = require('./moon')
const Cycle = require('./cycle')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 * 
 */

Mourn.belongsTo(Cycle); 
Cycle.hasMany(Mourn); 

Intention.belongsTo(Cycle); 
Cycle.hasMany(Intention); 

Appreciate.belongsTo(Cycle); 
Cycle.hasMany(Appreciate); 


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User, 
  Appreciate, 
  Mourn, 
  Intention, 
  Moon, 
  Cycle
}
