const treinadorService = require('../service/treinadorService');
const crypto = require('crypto');
const axios = require('axios');
//const helper = require('../helper/helper');




test('Should save an treinador', async function(){
    const treinador1 = gerarTreinador();
    const response = await request(`http://localhost:3000/treinadores`, 'post', treinador1);
    expect(response.status).toBe(201);
    const data = response.data;
	  expect(data.nome).toBe(treinador1.nome);
  	expect(data.cpf).toBe(treinador1.cpf);
  //  await treinadorService.deleteTreinador(data.id);
});


test('Should find an treinador with his cpf and senha', async function(){
  const treinador1 = gerarTreinador();
  await request(`http://localhost:3000/treinadores`, 'post', treinador1);
  const response = await request(`http://localhost:3000/treinadores/${treinador1.cpf}/${treinador1.senha}`, 'get');
  const data = response.data;
  expect(response.status).toBe(200);
  expect(data.nome).toBe(treinador1.nome);
  expect(data.cpf).toBe(treinador1.cpf);

//  await treinadorService.deleteTreinador(data.id);
});

test('Deve atualizar treinador', async function(){
  const treinador = gerarTreinador();
  const responsePOST = await request(`http://localhost:3000/treinadores`, 'post', treinador);
  const outroTreinador= gerarTreinador();
  const responsePUT = await request(`http://localhost:3000/treinadores/${responsePOST.data.idtreinador}`, 'put', outroTreinador);
  expect(responsePUT.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/treinadores/${responsePOST.data.idtreinador}`, 'get');
  const data = responseGET.data;
  expect(data.nome).toBe(outroTreinador.nome);
  expect(data.cpf).toBe(outroTreinador.cpf);
});

test('Deve excluir treinador', async function(){
  const treinador = gerarTreinador();
  const responsePOST = await request(`http://localhost:3000/treinadores`, 'post', treinador);
  const responseDELETE = await request(`http://localhost:3000/treinadores/${responsePOST.data.idtreinador}`, 'delete');
  expect(responseDELETE.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/treinadores/${responsePOST.data.idtreinador}`, 'get');
  expect(responseGET.status).toBe(404);
});





const gerarTreinador = function (){
  const treinador = {
        nome: generate(), 
        cpf: generate(),
        senha:generate(),
        salario:getRandomInt(500,1300)
      }
  //console.log(treinador.nome);
  return treinador;
}

const generate = function () {return crypto.randomBytes(5).toString('hex');};

function getRandomInt(min, max) {    
  min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}
const request = function (url, method, data) {
	return axios({ url, method, data, validateStatus: false });
};
