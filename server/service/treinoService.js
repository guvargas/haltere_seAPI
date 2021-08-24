const treinoData = require('../data/treinoData');


exports.getTreinoById = async function (id) {
	const treino = await treinoData.getTreinoById(id);
	if (!treino) throw new Error('Treino not found');
	return treino;
};
exports.getTreinoByName = async function (nome) {
	const treino = await treinoData.getTreinoByName(nome);
	if (!treino) throw new Error('Treino not found');
	return treino;
};

exports.saveTreino = async function (treino) {
	//const existingTreino = await treinoData.getTreinoByAcao(treino.acao);
//	if (existingTreino) throw new Error('Treino already exists');
	return treinoData.saveTreino(treino);
};

exports.deleteTreino = function (id) {
	return treinoData.deleteTreino(id);
};

exports.updateTreino = async function (id, treino) {
	await exports.getTreinoById(id);
	return treinoData.updateTreino(id, treino);
};
