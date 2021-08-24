
const helper = require('../helper/helper');

test('Deve criar um treino e um exercicio e associar os dois', async function(){
    const treino = helper.gerarTreino();
    const responseTreino = await helper.request(`http://localhost:3000/treinos`, 'post', treino);
    expect(responseTreino.status).toBe(201);
    const exercicio = helper.gerarExercicio();
    const responseExercicio = await helper.request(`http://localhost:3000/exercicios`, 'post', exercicio);
    expect(responseExercicio.status).toBe(201);
    const responseAssociacao = await helper.request(`http://localhost:3000/associacao/treino/${responseTreino.data.idtreino}/exercicio/${responseExercicio.data.idexercicio}`, 'post');
    expect(responseAssociacao.status).toBe(201);

});

test('Deve pegar a lista de treinos e exercicios', async function(){
    const responseAssociacao = await helper.request(`http://localhost:3000/associacao/treinoexercicio/`, 'get');
    expect(responseAssociacao.status).toBe(200);
});

test('Deve pegar todos os exercicios de um treino', async function(){
    const treino = helper.gerarTreino();
    const responseTreino = await helper.request(`http://localhost:3000/treinos`, 'post', treino);
    expect(responseTreino.status).toBe(201);

    const exercicio = helper.gerarExercicio();
    const responseExercicio = await helper.request(`http://localhost:3000/exercicios`, 'post', exercicio);
    expect(responseExercicio.status).toBe(201);

    const exercicio1 = helper.gerarExercicio();
    const responseExercicio1 = await helper.request(`http://localhost:3000/exercicios`, 'post', exercicio1);
    expect(responseExercicio1.status).toBe(201);

    const responseAssociacao = await helper.request(`http://localhost:3000/associacao/treino/${responseTreino.data.idtreino}/exercicio/${responseExercicio.data.idexercicio}`, 'post');
    expect(responseAssociacao.status).toBe(201);

    const responseAssociacao2 = await helper.request(`http://localhost:3000/associacao/treino/${responseTreino.data.idtreino}/exercicio/${responseExercicio1.data.idexercicio}`, 'post');
    expect(responseAssociacao2.status).toBe(201);

    const responseAssociacaoGET = await helper.request(`http://localhost:3000/associacao/exerciciosportreino/${responseTreino.data.idtreino}`, 'get');
    expect(responseAssociacao.status).toBe(201);

});


