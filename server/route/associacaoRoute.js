const express = require('express');
const router = express.Router();
const associacaoService = require('../service/associacaoService');


router.get('/associacao/treinosporaluno/:idaluno', async function (req, res, next) {
	try {
			const associacao = await associacaoService.getAssociacaoTreinosPorAluno(req.params.idaluno);
			res.status(200).json(associacao);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});

router.get('/associacao/treinoexercicio/', async function (req, res, next) {
try {
		const novaAssociacao = await associacaoService.getAssociacaoTreinoExercicio();
		res.status(200).json(novaAssociacao);
	} catch (e) {
		console.log(e);
		next(e);
	}
});
router.get('/associacao/exerciciosportreino/:idtreino', async function (req, res, next) {
	try {
			const exercicios = await associacaoService.getAssociacaoExercicioPorTreino(req.params.idtreino);
			res.status(200).json(exercicios);
		} catch (e) {
			console.log(e);
			next(e);
		}
	});


router.post('/associacao/treino/:idtreino/exercicio/:idexercicio/', async function (req, res, next) {
try {
		const novaAssociacao = await associacaoService.saveAssociacaoTreinoExercicio(req.params.idtreino,req.params.idexercicio);
		res.status(201).json(novaAssociacao);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

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
