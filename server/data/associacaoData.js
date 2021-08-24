const database = require('../infra/database');


exports.saveAssociacaoTreinoExercicio = function (idtreino,idexercicio) {
	return database.one(
		'insert into assoctreinoexercicios (idtreino,idexercicio) values ($1, $2) returning *', 
		[idtreino, 
			idexercicio]);
};


exports.getAssociacaoTreinoExercicio = function () {
	return database.query('select * from assoctreinoexercicios');
};

exports.getAssociacaoExercicioPorTreino = function (idtreino) {
	return database.query('select * from exercicio d inner join assoctreinoexercicios b	on d.idexercicio= b.idexercicio  where b.idtreino =$1',[idtreino]);
};



