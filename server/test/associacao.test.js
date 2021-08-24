
const helper = require('../helper/helper');

test.only('Deve criar um treino e um exercicio e associar os dois', async function(){
    const treino = helper.gerarTreino();
    const responseTreino = await helper.request(`http://localhost:3000/treinos`, 'post', treino);
    expect(responseTreino.status).toBe(201);
    const exercicio = helper.gerarExercicio();
    const responseExercicio = await helper.request(`http://localhost:3000/exercicios`, 'post', exercicio);
    expect(responseExercicio.status).toBe(201);
    console.log('id treino:'+responseTreino.data.idtreino);
    console.log('id exercicio:'+responseExercicio.data.idexercicio);
    const responseAssociacao = await helper.request(`http://localhost:3000/associacao/treinoexercicio/${responseTreino.data.idtreino}/${responseExercicio.data.idexercicio}`, 'post');
    expect(responseAssociacao.status).toBe(201);

});
