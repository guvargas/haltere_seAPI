const pgp = require('pg-promise')();
const db = pgp({
	user: 'postgres',
	password: '1234',
	host: 'localhost',
	port: 5432,
	database: 'Halterese'
});
module.exports = db;

//dava pra aplicar singleton mas a linguagem é kekw