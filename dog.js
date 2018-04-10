const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:     'localhost',
  port:     5432,
  database: 'dog_db_tdd',
};

const db = pg(config);


//index show new edit create update destroy
module.exports = {

  findAll() {
    return db.many(`
      SELECT *
      FROM dog
    `);
  },

  findOne(id) {

  },

  makeOne() {
    // returns a blank dog object/promise
  },

  save(id, data) {
    // returns  object/promise
  },

  destroy(id) {
    // returns an empty promise
  }


};
