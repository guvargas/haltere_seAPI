const database = require('../infra/database');


exports.saveAssociacaoTreinoExercicio = function (idtreino,idexercicio) {
	return database.one(
		'insert into assoctreinoexercicios (idtreino,idexercicio) values ($1, $2) returning *', 
		[idtreino, 
			idexercicio]);
};

