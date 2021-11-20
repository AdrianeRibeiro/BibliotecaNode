const fetch = require('node-fetch')

function manejaErros(error) {
  throw new Error(erro.message)
}

async function checaStatus(arrayLinks) {
  try {
    const arrayStatus = await Promise
      .all(arrayLinks
        .map(async url => {
          const res = await fetch(url)
          return res.status
    }))

    return arrayStatus
  } catch(erro) {
    manejaErros(erro)
  }
}

function geraArrayDeURLS(arrayLinks) {
  return arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join())
}

async function ValidaURLS(arrayLinks) {
  const links = geraArrayDeURLS(arrayLinks)
  const statusLinks = await checaStatus(links)

  const resultados = arrayLinks.map((objeto, indice) => 
    (
      {
         ...objeto, 
         status: statusLinks[indice] 
      }
    )
  )

  return resultados
}


module.exports = ValidaURLS;