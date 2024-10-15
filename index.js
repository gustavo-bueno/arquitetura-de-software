const Aluno = require('./src/models/aluno');
const Turma = require('./src/models/turma');
const TurmaPresencial = require('./src/models/turma');

const aluno = Aluno('João', 'joao_login', '123456');
const turma = Turma('ES46A', 7.5);
const turmaPresencial = TurmaPresencial('ES46B', 7.5, 80);

console.log('Aluno:', aluno);
console.log('Aprovado na turma:', turma.aprovado());
console.log('Aprovado na turma presencial:', turmaPresencial.aprovado());