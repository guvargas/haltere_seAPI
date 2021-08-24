const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/alunosRoute'));
app.use('/', require('./route/treinadorRoute'));
app.use('/', require('./route/exercicioRoute'));
app.use('/', require('./route/treinoRoute'));
app.use('/', require('./route/associacaoRoute'));

app.use(function (error, req, res, next) {
	if (error.message === 'Aluno already exists') {
		return res.status(409).send(e.message);
	}
	if (error.message === 'Aluno not found') {
		return res.status(404).send(e.message);
	}
	if (error.message === 'Treinador not found') {
		return res.status(404).send(e.message);
	}
	if (error.message === 'Exercicio not found') {
		return res.status(404).send(e.message);
	}
	if (error.message === 'Treino not found') {
		return res.status(404).send(e.message);
	}
	if(error.message === 'not implemented yet'){

		return res.status(500).send(e.message);
	}
});

app.listen(3000);
