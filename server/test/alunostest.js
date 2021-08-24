const alunosService = require('../service/alunosService');
const crypto = require('crypto');
const axios = require('axios');
const helper = require('../helper/helper');




test.only('Should save an aluno', async function(){
    const aluno1 = helper.gerarAluno();
    const response = await request(`http://localhost:3000/alunos`, 'post', aluno1);
    expect(response.status).toBe(201);
    const data = response.data;
	  expect(data.nome).toBe(aluno1.nome);
  	expect(data.cpf).toBe(aluno1.cpf);
  //  await alunosService.deleteAluno(data.id);
});


test('Should find an aluno with his cpf and senha', async function(){
  const aluno1 = gerarAluno();
  await request(`http://localhost:3000/alunos`, 'post', aluno1);
  const response = await request(`http://localhost:3000/alunos/${aluno1.cpf}/${aluno1.senha}`, 'get');
  const data = response.data;
  expect(response.status).toBe(200);
  expect(data.nome).toBe(aluno1.nome);
  expect(data.cpf).toBe(aluno1.cpf);
});

test('Deve atualizar aluno', async function(){
  const aluno = gerarAluno();
  const responsePOST = await request(`http://localhost:3000/alunos`, 'post', aluno);
  const outroAluno= gerarAluno();
  const responsePUT = await request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'put', outroAluno);
  expect(responsePUT.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'get');
  const data = responseGET.data;
  expect(data.nome).toBe(outroAluno.nome);
  expect(data.cpf).toBe(outroAluno.cpf);
});

test('Deve excluir aluno', async function(){
  const aluno = gerarAluno();
  const responsePOST = await request(`http://localhost:3000/alunos`, 'post', aluno);
  const responseDELETE = await request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'delete');
  expect(responseDELETE.status).toBe(204);
  const responseGET = await request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'get');
  expect(responseGET.status).toBe(404);
});





const gerarAluno = function (){
  const aluno = {
        nome: generate(), 
        cpf: generate(),
        senha:generate(),
        cargaHoraria:getRandomInt(1,10),
        peso:getRandomInt(1,20),
        altura:getRandomInt(150,200),
        observacoes:generate(),
        dataNascimento:getRandomInt(1,30)+'/'+getRandomInt(1,12)+'/'+getRandomInt(1950,2004)
  }
  //console.log(aluno.nome);
  return aluno;
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
