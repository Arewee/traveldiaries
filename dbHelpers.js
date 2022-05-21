const knex = require ('knex');
const config = require('./knexfile');
const db = knex(config.development)


function getAllUsers(){
    return db('users').orderBy('id', 'desc')
}

async function addUser(user){
  await db('users').insert(user)
  return db('users').where({username:user.username})
}

function findUserByUsername(username){
    return db('users').where({username:username}).first();
}

function removeUser(id){
    return db('users').where({id:id}).del()
}

function findUserById(id) {
    return db('users').where({id:id}).first()
}

// DESTINATIONS

function getAllDestinations(){
    return db('destinations').orderBy('id', 'desc')
}

async function addDestination(newDestination){
    await db('destinations')
    .where({user_id:newDestination.user_id})
    .insert(newDestination)
}

function removeDestination(id){
    return db('destinations').where({id:id}).del()
}

function updateDestination(id, newDestination){
    return db('destinations')
    .where({id:id})
    .update(newDestination)
}


module.exports = {
    getAllUsers,
    addUser,
    findUserByUsername,
    removeUser,
    getAllDestinations,
    findUserById,
    addDestination,
    removeDestination,
    updateDestination

 

}