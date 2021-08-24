const exercicioService = require('../service/exercicioService');
const crypto = require('crypto');
const axios = require('axios');
//const helper = require('../helper/helper');




test('Should save an exercicio', async function(){
    const exercicio1 = gerarExercicio();
    const response = await request(`http://localhost:3000/exercicios`, 'post', exercicio1);
    expect(response.status).toBe(201);
    const data = response.data;
	  expect(data.nome).toBe(exercicio1.nome);
  	expect(data.descricao).toBe(exercicio1.descricao);
  //  await exercicioService.deleteExercicio(data.id);
});


test('Deve voltar todos os exercicios', async function(){
  const exercicio1 = gerarExercicio();
  await request(`http://localhost:3000/exercicios`, 'post', exercicio1);
  const response = await request(`http://localhost:3000/exercicios/`, 'get');
  const data = response.data;
  expect(response.status).toBe(200);
  expect.anything(data);


//  await exercicioService.deleteExercicio(data.id);
});

test('Deve atualizar exercicio', async function(){
  const exercicio = gerarExercicio();
  const responsePOST = await request(`http://localhost:3000/exercicios`, 'post', exercicio);
  const outroExercicio= gerarExercicio();
  const responsePUT = await request(`http://localhost:3000/exercicios/${responsePOST.data.idexercicio}`, 'put', outroExercicio);
  expect(responsePUT.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/exercicios/${responsePOST.data.idexercicio}`, 'get');
  const data = responseGET.data;
  expect(data.nome).toBe(outroExercicio.nome);
  expect(data.descricao).toBe(outroExercicio.descricao);
});

test('Deve excluir exercicio', async function(){
  const exercicio = gerarExercicio();
  const responsePOST = await request(`http://localhost:3000/exercicios`, 'post', exercicio);
  const responseDELETE = await request(`http://localhost:3000/exercicios/${responsePOST.data.idexercicio}`, 'delete');
  expect(responseDELETE.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/exercicios/${responsePOST.data.idexercicio}`, 'get');
  expect(responseGET.status).toBe(404);
});





const gerarExercicio = function (){
  const exercicio = {
        nome: generate(), 
        descricao: generate(),
        tipo:generate(),
        series:getRandomInt(1,5),
        tempo:getRandomInt(1,30),
        caracteristicas:generate(),
        }
  //console.log(exercicio.nome);
  return exercicio;
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
