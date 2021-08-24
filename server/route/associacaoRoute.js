const express = require('express');
const router = express.Router();
const associacaoService = require('../service/associacaoService');



router.post('http://localhost:3000/associacoes/treinoexercicio/:idtreino/:idexercicio', async function (req, res, next) {
	try {
		const novaAssociacao = await associacaoService.saveAssociacaoTreinoExercicio(req.params.idtreino,req.params.idexercicio);
		res.status(201).json(novaAssociacao);
	} catch (e) {
		console.log(e);
		next(e);
	}
});

module.exports = router;
