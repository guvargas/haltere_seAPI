const database = require('../infra/database');


exports.getAluno = function (cpf,senha) {
	return database.oneOrNone('select * from aluno where cpf = $1 and senha= $2 ', [cpf,senha]);
};

exports.getAlunoById = function (id) {
	return database.oneOrNone('select * from aluno where idaluno = $1', [id]);
};

exports.saveAluno = function (aluno) {
	return database.one(
		'insert into aluno (nome, cpf, senha, cargahoraria, dataNascimento, peso, altura, observacoes) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *', 
		[	aluno.nome, 
			aluno.cpf,
			aluno.senha,
			aluno.cargaHoraria,
			aluno.dataNascimento,
			aluno.peso,
			aluno.altura,
			aluno.observacoes
		]);
};

exports.updateAluno = function (id, aluno) {
	return database.none('update aluno set nome = $1, cpf = $2, senha = $3, cargaHoraria= $4, dataNascimento= $5, peso= $6, altura= $7, observacoes= $8 where idaluno = $9',
		 			[aluno.nome,aluno.cpf,aluno.senha,aluno.cargaHoraria,aluno.dataNascimento,aluno.peso,aluno.altura,aluno.observacoes,id]);
};

exports.deleteAluno = function (id) {
	return database.none('delete from aluno where idaluno = $1', [id]);
};
