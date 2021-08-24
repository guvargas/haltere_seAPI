const alunosData = require('../data/alunosData');


exports.getAlunoById = async function (id) {
	const aluno = await alunosData.getAlunoById(id);
	if (!aluno) throw new Error('Aluno not found');
	return aluno;
};
exports.getAluno = async function (cpf,senha) {
	const aluno = await alunosData.getAluno(cpf,senha);
	if (!aluno) throw new Error('Aluno not found');
	return aluno;
};

exports.saveAluno = async function (aluno) {
	//const existingAluno = await alunosData.getAlunoByAcao(aluno.acao);
//	if (existingAluno) throw new Error('Aluno already exists');
	return alunosData.saveAluno(aluno);
};

exports.deleteAluno = function (id) {
	return alunosData.deleteAluno(id);
};

exports.updateAluno = async function (id, aluno) {
	await exports.getAlunoById(id);
	return alunosData.updateAluno(id, aluno);
};
