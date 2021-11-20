const pegaArquivo = require('../index')

describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe('function')
  })

  it("deve retornar array com resultados", async () => {
    const path = "/home/adriane/Área de Trabalho/biblio-node/test/arquivos/texto1.md"
    const arrayResult = [
      {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
      }
    ]
    const resultado = await pegaArquivo(path)

    expect(resultado).toEqual(arrayResult)
  })

  it("deve retornar mensagem que 'não há links'", async () => {
    const path = "/home/adriane/Área de Trabalho/biblio-node/test/arquivos/texto1_semlinks.md"
    const resultado = await pegaArquivo(path)

    expect(resultado).toBe('não há links')
  })

  it("deve lançar um erro na falta de arquivo", () => {
    async function capturaErro() {
      const path = "/home/adriane/Área de Trabalho/biblio-node/test/arquivos"
      await pegaArquivo(path)
      expect(capturaErro).toThrowError(/não há arquivo no caminho/)
    } 
  })
})
