const database = require('../infra/database');


exports.saveAssociacaoTreinoExercicio = function (idtreino,idexercicio) {
	return database.one(
		'insert into assoctreinoexercicios (idtreino,idexercicio) values ($1, $2) returning *', 
		[idtreino, 
			idexercicio]);
};

exports.saveAssociacaoAlunoTreino = function (idaluno,idtreino,dia) {
	return database.one(
		'insert into assoctreinoaluno (idtreino,idaluno,dia) values ($1, $2,$3) returning *', 
		[idtreino, 
			idaluno,dia]);
};

exports.saveAssociacaoTreinadorTreino = function (idtreinador,idtreino) {
	return database.one(
		'insert into assoctreinotreinador (idtreinador,idtreino) values ($1, $2) returning *', 
		[idtreinador, 
			idtreino]);
};

exports.getAssociacaoTreinoExercicio = function () {
	return database.query('select * from assoctreinoexercicios');
};

exports.getAssociacaoTreinoPorTreinador = function (idtreinador) {
	return database.query('select * from treino d inner join assoctreinotreinador b	on d.idtreino= b.idtreino  where b.idtreinador =$1',[idtreinador]);
};

exports.getAssociacaoExercicioPorTreino = function (idtreino) {
	return database.query('select * from exercicio d inner join assoctreinoexercicios b	on d.idexercicio= b.idexercicio  where b.idtreino =$1',[idtreino]);
};

exports.getAssociacaoTreinosPorAluno = function (idaluno) {
	return database.query('select * from treino d inner join assoctreinoaluno b	on d.idtreino= b.idtreino  where b.idaluno =$1',[idaluno]);
};




