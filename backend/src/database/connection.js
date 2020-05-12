const knex = require('knex');
const configration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configration.test : configration.development;

const connection = knex(config);

module.exports = connection;