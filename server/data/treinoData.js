const database = require('../infra/database');


exports.getTreinoByName = function (nome) {
	return database.oneOrNone('select * from treino where nome = $1' [nome]);
};

exports.getTreinoById = function (id) {
	return database.oneOrNone('select * from treino where idtreino = $1', [id]);
};

exports.saveTreino = function (treino) {
	return database.one(
		'insert into treino (nome, descricao) values ($1, $2) returning *', 
		[	treino.nome, 
			treino.descricao	
		]);
};

exports.updateTreino = function (id, treino) {
	return database.none('update treino set nome = $1, descricao = $2 where idtreino = $3',
		 			[treino.nome,treino.descricao,id]);
};

exports.deleteTreino = function (id) {
	return database.none('delete from treino where idtreino = $1', [id]);
};
