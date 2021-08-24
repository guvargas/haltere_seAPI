const treinadorData = require('../data/treinadorData');


exports.getTreinadorById = async function (id) {
	const treinador = await treinadorData.getTreinadorById(id);
	if (!treinador) throw new Error('Treinador not found');
	return treinador;
};
exports.getTreinador = async function (cpf,senha) {
	const treinador = await treinadorData.getTreinador(cpf,senha);
	if (!treinador) throw new Error('Treinador not found');
	return treinador;
};

exports.saveTreinador = async function (treinador) {
	//const existingTreinador = await treinadorData.getTreinadorByAcao(treinador.acao);
//	if (existingTreinador) throw new Error('Treinador already exists');
	return treinadorData.saveTreinador(treinador);
};

exports.deleteTreinador = function (id) {
	return treinadorData.deleteTreinador(id);
};

exports.updateTreinador = async function (id, treinador) {
	await exports.getTreinadorById(id);
	return treinadorData.updateTreinador(id, treinador);
};
