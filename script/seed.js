'use strict'

const db = require('../server/db')
const {User, Appreciate, Mourn, Intention} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const appreciates = await Promise.all([
    Appreciate.create({target:'this warm blanket', notes: 'its really warm and cozy, espeically with this heater, which i just remembered to check and yep it went off again', tags:['home', 'cozy', 'lil perceptual surprises']}),
    Appreciate.create({target: 'wilder than me', notes: 'i love this song, espeically when she walks in with that sweet corona', tags: ['sweet', 'corona']})
  ])

  const mourns = await Promise.all([ 
    Mourn.create({target:'my free and youthful passion and excitement', notes: 'once upon a time, i was just so perky and bright eyed and bushy tailed and naive but excitable as all heck', tags: ['yesteryear', 'youth', 'maidenhood', 'aged wisdom', 'getting older means getting more weary', 'time is a flat fucking circle']}), 
    Mourn.create({target: 'Pat Mullen // Tish Burnham', notes: 'the strong irish broad still holds on to the last moments of existence, but her youth and her full cognition are behind her. godbless all her strength, stamina, and sweetness', tags:['family', 'death', 'aging', 'irish']})
  ])

  const intentions = await Promise.all([
    Intention.create({target:'to finish this stackathon project', notes:'there has been a number of failures and dead ends and existential decision making crises but i am holding strong', tags: ['who am i', 'existential', 'individual projects']}), 
    Intention.create({target: 'to engage in self-encouragement instead of self-loathing', notes: 'if meaning is constructed and your conscious experience of life is determined by your perceptual narrative, than you must write your self a winning story in order for such to come true', tags: ['perception', 'constructed identity', 'constructed reality', 'narrative']})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${appreciates.length} appreciates`)
  console.log(`seeded ${mourns.length} mourns `)
  console.log(`seeded ${intentions.length} intentions`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
