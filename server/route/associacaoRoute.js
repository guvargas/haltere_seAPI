const express = require('express');
const router = express.Router();
const associacaoService = require('../service/associacaoService');



router.get('/associacao/treinoexercicio/', async function (req, res, next) {
try {
		const novaAssociacao = await associacaoService.getAssociacaoTreinoExercicio();
		res.status(200).json(novaAssociacao);
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

module.exports = router;
