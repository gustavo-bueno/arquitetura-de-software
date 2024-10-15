const TurmaPresencial = (codigo, nota, frequencia) => {
  return {
    codigo,
    nota,
    frequencia,
    aprovado: () => {
      return nota > 6 && frequencia >= 75
    }
  }
}

module.exports = TurmaPresencial;