
const helper = require('../helper/helper');

test.only('Deve criar um treino e um exercicio e associar os dois', async function(){
    const treino = helper.gerarTreino();
    const responseTreino = await helper.request(`http://localhost:3000/treinos`, 'post', treino);
    expect(responseTreino.status).toBe(201);
    const exercicio = helper.gerarExercicio();
    const exercicio2 = helper.gerarExercicio();
    const responseExercicio = await helper.request(`http://localhost:3000/exercicios`, 'post', exercicio);
    const responseExercicio2 = await helper.request(`http://localhost:3000/exercicios`, 'post', exercicio2);
    expect(responseExercicio.status).toBe(201);
    expect(responseExercicio2.status).toBe(201);
    console.log(responseTreino.data.idtreino);
    console.log(responseExercicio.data.idexercicio);
    const responseAssociacao = await helper.request(`http://localhost:3000/associacoes/treinoexercicio/${responseTreino.data.idtreino}/${responseExercicio.data.idexercicio}`, 'post');
    expect(responseAssociacao.status).toBe(201);

});
