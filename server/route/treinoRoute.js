const express = require('express');
const router = express.Router();
const treinoService = require('../service/treinoService');


router.get('/treinos/:id', async function (req, res, next) {
	try {
		const treino = await treinoService.getTreinoById(req.params.id);
		res.json(treino);
	} catch (e) {
		console.log(e);
		next(e);
	}
});


router.get('/treinos/', async function (req, res, next) {
	try {
		const treino = await treinoService.getTreinos();
		res.json(treino);
	} catch (e) {
		console.log(e);
		next(e);
	}
});


router.get('/treinos/nome/:name', async function (req, res, next) {
	try {
		const treino = await treinoService.getTreinoByName(req.params.name);
		res.json(treino);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.post('/treinos', async function (req, res, next) {
	const treino = req.body;
	try {
		const novoTreino = await treinoService.saveTreino(treino);
		res.status(201).json(novoTreino);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.put('/treinos/:id', async function (req, res, next) {
	const treino = req.body;
	try {
		await treinoService.updateTreino(req.params.id, treino);
		res.status(204).end();
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.delete('/treinos/:id', async function (req, res, next) {
	try {
		await treinoService.deleteTreino(req.params.id);
		res.status(204).end();
	} catch (e) {
		next(e);
	}
});

module.exports = router;
