const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:     'localhost',
  port:     5432,
  database: 'dog_db_tdd',
};

let db = pg(config);

//index show new edit create update destroy
module.exports = {

  findAll() {
    return db.many(`
      SELECT *
      FROM dog
    `);
  },

  findOne(id) {
    return db.one(`
      SELECT *
      FROM dog
      WHERE dog_id = $1
    `, id)
  },

  makeOne() {
    // returns a blank dog object/promise
    return db.one(`
      INSERT INTO dog (name, color) 
      VALUES ('', '') 
      RETURNING *`)
  },

  save(id, data) {
    // returns  object/promise
    const doggie = Object.assign({id}, data);
    return db.one(`
      UPDATE dog
      SET 
        name = $/name/,
        color = $/color/,
        breed = $/breed/,
        age = $/age/,
        lbs = $/lbs/,
        state_born = $/state_born/,
        tag_id = $/tag_id/
      WHERE dog_id = $/id/
      RETURNING *
    `, doggie)
  },

  destroy(id) {
    // returns an empty promise
    return db.none(`DELETE FROM dog WHERE dog_id = $1`, id) ;
  },


  setDbHandle(handle) {
    db = handle;
  },

  db
};
