const express = require('express');
const router = express.Router();
const alunosService = require('../service/alunosService');


router.get('/alunos/:id', async function (req, res, next) {
	try {
		const aluno = await alunosService.getAlunoById(req.params.id);
		res.json(aluno);
	} catch (e) {
		console.log(e);
		next(e);
	}
});


router.get('/alunos/:cpf/:senha', async function (req, res, next) {
	try {
		const aluno = await alunosService.getAluno(req.params.cpf,req.params.senha);
		res.json(aluno);
	} catch (e) {
		next(e);
	}
});

router.post('/alunos', async function (req, res, next) {
	const aluno = req.body;
	try {
		const novoAluno = await alunosService.saveAluno(aluno);
		res.status(201).json(novoAluno);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.put('/alunos/:id', async function (req, res, next) {
	const aluno = req.body;
	try {
		await alunosService.updateAluno(req.params.id, aluno);
		res.status(204).end();
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.delete('/alunos/:id', async function (req, res, next) {
	try {
		await alunosService.deleteAluno(req.params.id);
		res.status(204).end();
	} catch (e) {
		next(e);
	}
});

module.exports = router;
