const Turma = require("./turma");

const TurmaPresencial = (codigo, nota, frequencia) => {
  return {
    ...Turma(codigo, nota),
    frequencia,
    aprovado: () => {
      return nota > 6 && frequencia >= 75
    }
  }
}

module.exports = TurmaPresencial;