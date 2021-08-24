const treinoService = require('../service/treinoService');
const crypto = require('crypto');
const axios = require('axios');
//const helper = require('../helper/helper');




test('Should save an treino', async function(){
    const treino1 = gerarTreino();
    const response = await request(`http://localhost:3000/treinos`, 'post', treino1);
    expect(response.status).toBe(201);
    const data = response.data;
	  expect(data.nome).toBe(treino1.nome);
  	expect(data.cpf).toBe(treino1.cpf);
  //  await treinoService.deleteTreino(data.id);
});


test('Deve encontrar um treino pelo seu nome', async function(){
  const treino1 = gerarTreino();
  await request(`http://localhost:3000/treinos`, 'post', treino1);
  const response = await request(`http://localhost:3000/treinos/nome/${treino1.nome}`, 'get');
  const data = response.data;
  expect(response.status).toBe(200);
  expect(data.nome).toBe(treino1.nome);
  expect(data.descricao).toBe(treino1.descricao);

//  await treinoService.deleteTreino(data.id);
});

test('Deve atualizar treino', async function(){
  const treino = gerarTreino();
  const responsePOST = await request(`http://localhost:3000/treinos`, 'post', treino);
  const outroTreino= gerarTreino();
  const responsePUT = await request(`http://localhost:3000/treinos/${responsePOST.data.idtreino}`, 'put', outroTreino);
  expect(responsePUT.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/treinos/${responsePOST.data.idtreino}`, 'get');
  const data = responseGET.data;
  expect(data.nome).toBe(outroTreino.nome);
  expect(data.cpf).toBe(outroTreino.cpf);
});

test.only('Deve excluir treino', async function(){
  const treino = gerarTreino();
  const responsePOST = await request(`http://localhost:3000/treinos`, 'post', treino);
  const responseDELETE = await request(`http://localhost:3000/treinos/${responsePOST.data.idtreino}`, 'delete');
  expect(responseDELETE.status).toBe(204);
  
});





const gerarTreino = function (){
  const treino = {
        nome: generate(), 
        descricao: generate(),
        }
  //console.log(treino.nome);
  return treino;
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
