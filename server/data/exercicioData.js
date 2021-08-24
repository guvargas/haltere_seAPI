const database = require('../infra/database');


exports.getExercicioByTipo = function (tipo) {
	return database.oneOrNone('select * from exercicio where tipo = $1', [tipo]);
};

exports.getExercicioById = function (id) {
	return database.oneOrNone('select * from exercicio where idexercicio = $1', [id]);
};

exports.getExercicios = function (id) {
	return database.query('select * from exercicio');
};

exports.saveExercicio = function (exercicio) {
	return database.one(
		'insert into exercicio (nome, series,tempo,descricao,tipo,caracteristicas) values ($1, $2, $3, $4, $5, $6) returning *', 
		[	exercicio.nome, 
			exercicio.series,
			exercicio.tempo,
			exercicio.descricao,
			exercicio.tipo,
			exercicio.caracteristicas
		]);
};

exports.updateExercicio = function (id, exercicio) {
	return database.none('update exercicio set nome = $1, series = $2, tempo = $3, descricao= $4, tipo= $5, caracteristicas= $6 where idexercicio = $7',
		 			[exercicio.nome,exercicio.series,exercicio.tempo,exercicio.descricao,exercicio.tipo,exercicio.caracteristicas,id]);
};

exports.deleteExercicio = function (id) {
	return database.none('delete from exercicio where idexercicio = $1', [id]);
};
