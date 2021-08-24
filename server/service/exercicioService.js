const exercicioData = require('../data/exercicioData');


exports.getExercicioById = async function (id) {
	const exercicio = await exercicioData.getExercicioById(id);
	if (!exercicio) throw new Error('Exercicio not found');
	return exercicio;
};
exports.getExercicioByTipo = async function (tipo) {
	const exercicio = await exercicioData.getExercicioByTipo(tipo);
	if (!exercicio) throw new Error('Exercicio not found');
	return exercicio;
};

exports.getExercicios = async function () {
	const exercicios = await exercicioData.getExercicios();
	if (!exercicios) throw new Error('Exercicio not found');
	return exercicios;
};

exports.saveExercicio = async function (exercicio) {
	//const existingExercicio = await exercicioData.getExercicioByAcao(exercicio.acao);
//	if (existingExercicio) throw new Error('Exercicio already exists');
	return exercicioData.saveExercicio(exercicio);
};

exports.deleteExercicio = function (id) {
	return exercicioData.deleteExercicio(id);
};

exports.updateExercicio = async function (id, exercicio) {
	await exports.getExercicioById(id);
	return exercicioData.updateExercicio(id, exercicio);
};
