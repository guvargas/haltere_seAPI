const express = require('express');
const router = express.Router();
const exercicioService = require('../service/exercicioService');


router.get('/exercicios/:id', async function (req, res, next) {
	try {
		const exercicio = await exercicioService.getExercicioById(req.params.id);
		res.json(exercicio);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.get('/exercicios/', async function (req, res, next) {
	try {
		const exercicios = await exercicioService.getExercicios();
		res.json(exercicios);
	} catch (e) {
		console.log(e);
		next(e);
	}
});


router.get('/exercicios/tipo/:tipo', async function (req, res, next) {
	try {
		const exercicio = await exercicioService.getExercicioByTipo(req.params.tipo);
		res.json(exercicio);
	} catch (e) {
		next(e);
	}
});

router.post('/exercicios', async function (req, res, next) {
	const exercicio = req.body;
	try {
		const novoExercicio = await exercicioService.saveExercicio(exercicio);
		res.status(201).json(novoExercicio);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.put('/exercicios/:id', async function (req, res, next) {
	const exercicio = req.body;
	try {
		await exercicioService.updateExercicio(req.params.id, exercicio);
		res.status(204).end();
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.delete('/exercicios/:id', async function (req, res, next) {
	try {
		await exercicioService.deleteExercicio(req.params.id);
		res.status(204).end();
	} catch (e) {
		next(e);
	}
});

module.exports = router;
