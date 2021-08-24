const database = require('../infra/database');


exports.getTreinador = function (cpf,senha) {
	return database.oneOrNone('select * from treinador where cpf = $1 and senha= $2 ', [cpf,senha]);
};

exports.getTreinadorById = function (id) {
	return database.oneOrNone('select * from treinador where idtreinador = $1', [id]);
};

exports.saveTreinador = function (treinador) {
	return database.one(
		'insert into treinador (nome, cpf, senha, salario) values ($1, $2, $3, $4) returning *', 
		[	treinador.nome, 
			treinador.cpf,
			treinador.senha,
			treinador.salario
		]);
};

exports.updateTreinador = function (id, treinador) {
	return database.none('update treinador set nome = $1, cpf = $2, senha = $3, salario= $4 where idtreinador = $5',
		 			[treinador.nome,treinador.cpf,treinador.senha,treinador.salario,id]);
};

exports.deleteTreinador = function (id) {
	return database.none('delete from treinador where idtreinador = $1', [id]);
};
