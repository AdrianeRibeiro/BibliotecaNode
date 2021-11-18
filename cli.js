const chalk = require('chalk')
const pegaArquivo = require('./index')
const ValidaURLS = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegaArquivo(caminhoDoArquivo[2])

  if (caminho[3] == 'validar') {
    console.log(chalk.yellow('links validados'), ValidaURLS(resultado))
  } else {
    console.log(chalk.yellow('lista de links'), resultado)
  }
}

processaTexto(caminho)
