const crypto = require('crypto');
const axios = require('axios');
const { func } = require('../infra/database');


const generate = function () {
	return crypto.randomBytes(20).toString('hex');
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

this.request = function (url, method, data) {
	return axios({ url, method, data, validateStatus: false });
};

 this.gerarAluno=function(){
  const aluno1 = {
        nome: generate(), 
        cpf: generate(),
        senha:generate(),
        cargaHoraria:getRandomInt(1,10),
        peso:getRandomInt(1,20),
        altura:getRandomInt(150,200),
        observacoes:generate(),
        dataNascimento:getRandomInt(1,30)+'/'+getRandomInt(1,12)+'/'+getRandomInt(1950,2004)
  }
  return aluno1;
}
