const Turma = (codigo, nota) => {

  return {
    codigo,
    nota,
    aprovado: () => {
      return nota >= 6
    }
  }
}

module.exports = Turma;