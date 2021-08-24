
const helper = require('../helper/helper');

test('Deve criar e salvar um aluno', async function(){
    const aluno1 = helper.gerarAluno();
    const response = await helper.request(`http://localhost:3000/alunos`, 'post', aluno1);
    expect(response.status).toBe(201);
    const data = response.data;
	  expect(data.nome).toBe(aluno1.nome);
  	expect(data.cpf).toBe(aluno1.cpf);
  //  await alunosService.deleteAluno(data.id);
});

test('Deve achar um aluno com seu cpf e senha', async function(){
  const aluno1 = helper.gerarAluno();
  await helper.request(`http://localhost:3000/alunos`, 'post', aluno1);
  const response = await helper.request(`http://localhost:3000/alunos/${aluno1.cpf}/${aluno1.senha}`, 'get');
  const data = response.data;
  expect(response.status).toBe(200);
  expect(data.nome).toBe(aluno1.nome);
  expect(data.cpf).toBe(aluno1.cpf);
});

test('Deve atualizar aluno', async function(){
  const aluno = helper.gerarAluno();
  const responsePOST = await helper.request(`http://localhost:3000/alunos`, 'post', aluno);
  const outroAluno= helper.gerarAluno();
  const responsePUT = await helper.request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'put', outroAluno);
  expect(responsePUT.status).toBe(204);
  const responseGET = await helper.request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'get');
  const data = responseGET.data;
  expect(data.nome).toBe(outroAluno.nome);
  expect(data.cpf).toBe(outroAluno.cpf);
});

test('Deve excluir aluno', async function(){
  const aluno = helper.gerarAluno();
  const responsePOST = await helper.request(`http://localhost:3000/alunos`, 'post', aluno);
  const responseDELETE = await helper.request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'delete');
  expect(responseDELETE.status).toBe(204);
  const responseGET = await helper.request(`http://localhost:3000/alunos/${responsePOST.data.idaluno}`, 'get');
  expect(responseGET.status).toBe(404);
});




