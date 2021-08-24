const associacaoData = require('../data/associacaoData');

exports.saveAssociacaoTreinoExercicio = async function (idtreino,idexercicio) {
	//const existingTreino = await treinoData.getTreinoByAcao(treino.acao);
//	if (existingTreino) throw new Error('Treino already exists');
	return associacaoData.saveAssociacaoTreinoExercicio(idtreino,idexercicio);
};

exports.getAssociacaoTreinoExercicio = async function () {
	//const existingTreino = await treinoData.getTreinoByAcao(treino.acao);
//	if (existingTreino) throw new Error('Treino already exists');
	return associacaoData.getAssociacaoTreinoExercicio();
};

exports.getAssociacaoExercicioPorTreino = async function (idtreino) {
	//const existingTreino = await treinoData.getTreinoByAcao(treino.acao);
//	if (existingTreino) throw new Error('Treino already exists');
	return associacaoData.getAssociacaoExercicioPorTreino(idtreino);
};


