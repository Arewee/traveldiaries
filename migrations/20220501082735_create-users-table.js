/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.createTable('users', tbl => {

    tbl.increments() 
    tbl.text('username', 120).notNullable().unique().index() 
    tbl.text('password', 200).notNullable()
    tbl.text('imageUrl').notNullable()
    tbl.timestamps(true,true)  


 })
    
 .createTable('destinations', tbl => {
    tbl.increments() 
    tbl.text('title').notNullable()
    tbl.text('description').notNullable()
    tbl.text('imageUrl').notNullable()
    tbl.timestamps(true,true)
    tbl.integer('user_id').notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
 })



};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('destinations')
};
