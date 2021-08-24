create table treinador(
    idTreinador serial primary key,
    nome text not null,
    cpf text not null,  
    senha text not null,
    salario float not null
);

create table aluno(
    idAluno serial primary key,
    nome text not null,
    cpf text not null,  
    dataNascimento text not null,
    peso integer not null,
    altura integer not null,
    observacoes text,
    senha text not null,
    cargaHoraria integer not null
);

create table treino(
    idTreino serial primary key,
    nome text not null,
    descricao text not null
);


create table exercicio(
idExercicio serial primary key,
nome text not null,
series integer not null,
tempo integer not null,
descricao text not null,
tipo text not null,
caracteristicas text not null
);


create table assocTreinoExercicios(
idTreino serial NOT NULL,
idExercicio serial NOT NULL,
    FOREIGN KEY (idTreino) REFERENCES treino(idTreino),   
    FOREIGN KEY (idExercicio) REFERENCES exercicio(idExercicio)
);


create table assocTreinoAluno(
idTreino serial NOT NULL,
idAluno serial NOT NULL,
dia integer not null,
    FOREIGN KEY (idTreino) REFERENCES treino(idTreino),   
    FOREIGN KEY (idAluno) REFERENCES aluno(idAluno)
);


create table assocTreinoTreinador(
idTreino serial NOT NULL,
idTreinador serial not null,
criado  timestamp default now(),
    FOREIGN KEY (idTreino) REFERENCES treino(idTreino),   
    FOREIGN KEY (idTreinador) REFERENCES treinador(idTreinador)
);