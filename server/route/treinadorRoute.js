const express = require('express');
const router = express.Router();
const treinadorService = require('../service/treinadorService');


router.get('/treinadores/:id', async function (req, res, next) {
	try {
		const treinador = await treinadorService.getTreinadorById(req.params.id);
		res.json(treinador);
	} catch (e) {
		console.log(e);
		next(e);
	}
});


router.get('/treinadores/:cpf/:senha', async function (req, res, next) {
	try {
		const treinador = await treinadorService.getTreinador(req.params.cpf,req.params.senha);
		res.json(treinador);
	} catch (e) {
		next(e);
	}
});

router.post('/treinadores', async function (req, res, next) {
	const treinador = req.body;
	try {
		const novoTreinador = await treinadorService.saveTreinador(treinador);
		res.status(201).json(novoTreinador);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.put('/treinadores/:id', async function (req, res, next) {
	const treinador = req.body;
	try {
		await treinadorService.updateTreinador(req.params.id, treinador);
		res.status(204).end();
	} catch (e) {
		console.log(e);
		next(e);
	}
});

router.delete('/treinadores/:id', async function (req, res, next) {
	try {
		await treinadorService.deleteTreinador(req.params.id);
		res.status(204).end();
	} catch (e) {
		next(e);
	}
});

module.exports = router;
