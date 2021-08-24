const express = require('express');
const router = express.Router();
const associacaoService = require('../service/associacaoService');

//pega os treinos de um aluno
router.get('/associacao/treinosporaluno/:idaluno', async function (req, res, next) {
	try {
			const associacao = await associacaoService.getAssociacaoTreinosPorAluno(req.params.idaluno);
			res.status(200).json(associacao);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});

//pega a associacao treino exercicio
router.get('/associacao/treinoexercicio/', async function (req, res, next) {
try {
		const novaAssociacao = await associacaoService.getAssociacaoTreinoExercicio();
		res.status(200).json(novaAssociacao);
	} catch (e) {
		console.log(e);
		next(e);
	}
});


//pega os treinos de um treinador
router.get('/associacao/treinosportreinador/:idtreinador', async function (req, res, next) {
	try {
			const treinos = await associacaoService.getAssociacaoTreinoPorTreinador(req.params.idtreinador);
			res.status(200).json(treinos);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});

//pega os exercicios de um treino
router.get('/associacao/exerciciosportreino/:idtreino', async function (req, res, next) {
	try {
			const exercicios = await associacaoService.getAssociacaoExercicioPorTreino(req.params.idtreino);
			res.status(200).json(exercicios);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});

//associa um exercicio a um treino
router.post('/associacao/treino/:idtreino/exercicio/:idexercicio/', async function (req, res, next) {
try {
		const novaAssociacao = await associacaoService.saveAssociacaoTreinoExercicio(req.params.idtreino,req.params.idexercicio);
		res.status(201).json(novaAssociacao);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

//associa um treinador a um treino
router.post('/associacao/treinador/:idtreinador/treino/:idtreino/', async function (req, res, next) {
	try {
			const novaAssociacao = await associacaoService.saveAssociacaoTreinadorTreino(req.params.idtreinador,req.params.idtreino);
			res.status(201).json(novaAssociacao);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});
	

//associa um aluno a um treino e a um dia
router.post('/associacao/aluno/:idaluno/treino/:idtreino/dia/:dia', async function (req, res, next) {
	try {
			const novaAssociacao = await associacaoService.saveAssociacaoAlunoTreino(req.params.idaluno,req.params.idtreino,req.params.dia);
			res.status(201).json(novaAssociacao);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});
	
module.exports = router;
