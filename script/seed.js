'use strict'

const db = require('../server/db')
const {User, Appreciate, Mourn, Intention, Moon, Cycle} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const cycleOne = await Cycle.create({startDate:'2018-11-07', endDate:'2018-12-06'})
  const cycleTwo = await Cycle.create({startDate:"2018-12-07", endDate:"2019-01-04"})


  const appreciates = await Promise.all([
    Appreciate.create({cycleId: cycleOne.id, target:'this warm blanket', notes: 'its really warm and cozy, espeically with this heater, which i just remembered to check and yep it went off again', tags:['home', 'cozy', 'lil perceptual surprises']}),
    Appreciate.create({cycleId: cycleOne.id, target: 'wilder than me', notes: 'i love this song, espeically when she walks in with that sweet corona', tags: ['sweet', 'corona']}), 
    Appreciate.create({cycleId: cycleTwo.id, target: 'my cats', notes: 'dear frida and meme, thank you for reminding me daily that "Alive" is actually an okay state', tags:['cats', 'cat cult nation', 'cat cult milennium', 'depression cures']})
  ])

  const mourns = await Promise.all([ 
    Mourn.create({cycleId: cycleOne.id, target:'my free and youthful passion and excitement', notes: 'once upon a time, i was just so perky and bright eyed and bushy tailed and naive but excitable as all heck', tags: ['yesteryear', 'youth', 'maidenhood', 'aged wisdom', 'getting older means getting more weary', 'time is a flat fucking circle']}), 
    Mourn.create({cycleId: cycleOne.id, target: 'Pat Mullen // Tish Burnham', notes: 'the strong irish broad still holds on to the last moments of existence, but her youth and her full cognition are behind her. godbless all her strength, stamina, and sweetness', tags:['family', 'death', 'aging', 'irish']}), 
    Mourn.create({cycleId: cycleTwo.id, target: 'the days when i could consume media without seeing and being personally demoralized by its problematic aspects', notes: 'knowledge is power but also it can sometimes lead to you feeling more disempowered', tags:['youth', 'education', 'aged wisdom']})
  ])

  const intentions = await Promise.all([
    Intention.create({cycleId: cycleOne.id, target: 'to finish this stackathon project', notes:'there has been a number of failures and dead ends and existential decision making crises but i am holding strong', tags: ['who am i', 'existential', 'individual projects']}), 
    Intention.create({cycleId: cycleOne.id, target: 'to engage in self-encouragement instead of self-loathing', notes: 'if meaning is constructed and your conscious experience of life is determined by your perceptual narrative, than you must write your self a winning story in order for such to come true', tags: ['perception', 'constructed identity', 'constructed reality', 'narrative']}), 
    Intention.create({cycleId: cycleTwo.id, target: 'to get some sleep tonight!', notes: 'I think I can reach a finishing place in the next hour or so!!', tags: ['time', 'sleep', 'self-care']})
  ])

  const moons = await Promise.all([
    Moon.create({date: '2018-11-07', moonPhase: 1, moonPhaseDay: 1}), 
    Moon.create({date: '2018-11-08', moonPhase: 1, moonPhaseDay: 2}),
    Moon.create({date: '2018-11-09', moonPhase: 1, moonPhaseDay: 3}),
    Moon.create({date: '2018-11-10', moonPhase: 1, moonPhaseDay: 4}),
    Moon.create({date: '2018-11-11', moonPhase: 1, moonPhaseDay: 5}),
    Moon.create({date: '2018-11-12', moonPhase: 1, moonPhaseDay: 6}),
    Moon.create({date: '2018-11-13', moonPhase: 1, moonPhaseDay: 7}),
    Moon.create({date: '2018-11-14', moonPhase: 1, moonPhaseDay: 8}),
    Moon.create({date: '2018-11-15', moonPhase: 1, moonPhaseDay: 9}),
    Moon.create({date: '2018-11-16', moonPhase: 1, moonPhaseDay: 10}),
    Moon.create({date: '2018-11-17', moonPhase: 1, moonPhaseDay: 11}),
    Moon.create({date: '2018-11-18', moonPhase: 1, moonPhaseDay: 12}),
    Moon.create({date: '2018-11-19', moonPhase: 1, moonPhaseDay: 13}),
    Moon.create({date: '2018-11-20', moonPhase: 1, moonPhaseDay: 14}),
    Moon.create({date: '2018-11-21', moonPhase: 1, moonPhaseDay: 15}),
    Moon.create({date: '2018-11-22', moonPhase: 1, moonPhaseDay: 16}),
    Moon.create({date: '2018-11-23', moonPhase: 1, moonPhaseDay: 17}),
    Moon.create({date: '2018-11-24', moonPhase: 1, moonPhaseDay: 18}),
    Moon.create({date: '2018-11-25', moonPhase: 1, moonPhaseDay: 19}),
    Moon.create({date: '2018-11-26', moonPhase: 1, moonPhaseDay: 20}),
    Moon.create({date: '2018-11-27', moonPhase: 1, moonPhaseDay: 21}),
    Moon.create({date: '2018-11-28', moonPhase: 1, moonPhaseDay: 22}),
    Moon.create({date: '2018-11-29', moonPhase: 1, moonPhaseDay: 23}),
    Moon.create({date: '2018-11-30', moonPhase: 1, moonPhaseDay: 24}),
    Moon.create({date: '2018-12-01', moonPhase: 2, moonPhaseDay: 25}), 
    Moon.create({date: '2018-12-02', moonPhase: 2, moonPhaseDay: 26}),
    Moon.create({date: '2018-12-03', moonPhase: 2, moonPhaseDay: 27}),
    Moon.create({date: '2018-12-04', moonPhase: 2, moonPhaseDay: 28}),
    Moon.create({date: '2018-12-05', moonPhase: 2, moonPhaseDay: 29}), 
    Moon.create({date: '2018-12-06', moonPhase: 2, moonPhaseDay: 30}),



    Moon.create({date: '2018-12-07', moonPhase: 2, moonPhaseDay: 1}), 
    Moon.create({date: '2018-12-08', moonPhase: 2, moonPhaseDay: 2}),
    Moon.create({date: '2018-12-09', moonPhase: 2, moonPhaseDay: 3}),
    Moon.create({date: '2018-12-10', moonPhase: 2, moonPhaseDay: 4}),
    Moon.create({date: '2018-12-11', moonPhase: 2, moonPhaseDay: 5}),
    Moon.create({date: '2018-12-12', moonPhase: 2, moonPhaseDay: 6}),
    Moon.create({date: '2018-12-13', moonPhase: 2, moonPhaseDay: 7}),
    Moon.create({date: '2018-12-14', moonPhase: 2, moonPhaseDay: 8}),
    Moon.create({date: '2018-12-15', moonPhase: 2, moonPhaseDay: 9}),
    Moon.create({date: '2018-12-16', moonPhase: 2, moonPhaseDay: 10}),
    Moon.create({date: '2018-12-17', moonPhase: 2, moonPhaseDay: 12}),
    Moon.create({date: '2018-12-18', moonPhase: 2, moonPhaseDay: 12}),
    Moon.create({date: '2018-12-19', moonPhase: 2, moonPhaseDay: 13}),
    Moon.create({date: '2018-12-20', moonPhase: 2, moonPhaseDay: 14}),
    Moon.create({date: '2018-12-21', moonPhase: 2, moonPhaseDay: 15}),
    Moon.create({date: '2018-12-22', moonPhase: 2, moonPhaseDay: 16}),
    Moon.create({date: '2018-12-23', moonPhase: 2, moonPhaseDay: 17}),
    Moon.create({date: '2018-12-24', moonPhase: 2, moonPhaseDay: 18}),
    Moon.create({date: '2018-12-25', moonPhase: 2, moonPhaseDay: 19}),
    Moon.create({date: '2018-12-26', moonPhase: 2, moonPhaseDay: 20}),
    Moon.create({date: '2018-12-27', moonPhase: 2, moonPhaseDay: 21}),
    Moon.create({date: '2018-12-28', moonPhase: 2, moonPhaseDay: 22}),
    Moon.create({date: '2018-12-29', moonPhase: 2, moonPhaseDay: 23}),
    Moon.create({date: '2018-12-30', moonPhase: 2, moonPhaseDay: 24}),
    Moon.create({date: '2018-12-31', moonPhase: 2, moonPhaseDay: 25}),
    Moon.create({date: '2019-01-01', moonPhase: 2, moonPhaseDay: 26}), 
    Moon.create({date: '2019-01-02', moonPhase: 2, moonPhaseDay: 27}),
    Moon.create({date: '2019-01-03', moonPhase: 2, moonPhaseDay: 28}), 
    Moon.create({date: '2019-01-04', moonPhase: 2, moonPhaseDay: 29}), 

    Moon.create({date: '2019-01-05', moonPhase: 3, moonPhaseDay: 1}), 
    Moon.create({date: '2019-01-06', moonPhase: 3, moonPhaseDay: 2}),
    Moon.create({date: '2019-01-07', moonPhase: 3, moonPhaseDay: 3}), 
    Moon.create({date: '2019-01-08', moonPhase: 3, moonPhaseDay: 4}),
    Moon.create({date: '2019-01-09', moonPhase: 3, moonPhaseDay: 5}),
    Moon.create({date: '2019-01-10', moonPhase: 3, moonPhaseDay: 6}),
    Moon.create({date: '2019-01-11', moonPhase: 3, moonPhaseDay: 7}),
    Moon.create({date: '2019-01-12', moonPhase: 3, moonPhaseDay: 8}),
    Moon.create({date: '2019-01-13', moonPhase: 3, moonPhaseDay: 9}),
    Moon.create({date: '2019-01-14', moonPhase: 3, moonPhaseDay: 10}),
    Moon.create({date: '2019-01-15', moonPhase: 3, moonPhaseDay: 11}),
    Moon.create({date: '2019-01-16', moonPhase: 3, moonPhaseDay: 12}),
    Moon.create({date: '2019-01-17', moonPhase: 3, moonPhaseDay: 13}),
    Moon.create({date: '2019-01-18', moonPhase: 3, moonPhaseDay: 14}),
    Moon.create({date: '2019-01-19', moonPhase: 3, moonPhaseDay: 15}),
    Moon.create({date: '2019-01-20', moonPhase: 3, moonPhaseDay: 16}),
    Moon.create({date: '2019-01-21', moonPhase: 3, moonPhaseDay: 17}),
    Moon.create({date: '2019-01-22', moonPhase: 3, moonPhaseDay: 18}),
    Moon.create({date: '2019-01-23', moonPhase: 3, moonPhaseDay: 19}),
    Moon.create({date: '2019-01-24', moonPhase: 3, moonPhaseDay: 20}),
    Moon.create({date: '2019-01-25', moonPhase: 3, moonPhaseDay: 21}),
    Moon.create({date: '2019-01-26', moonPhase: 3, moonPhaseDay: 22}),
    Moon.create({date: '2019-01-27', moonPhase: 3, moonPhaseDay: 23})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${appreciates.length} appreciates`)
  console.log(`seeded ${mourns.length} mourns `)
  console.log(`seeded ${intentions.length} intentions`)
  console.log(`seeded ${moons.length} moons`)
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
