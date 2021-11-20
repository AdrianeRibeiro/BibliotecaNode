const fetch = require('node-fetch')
//import fetch from 'node-fetch'

async function checaStatus(arrayLinks) {
  const arrayStatus = await Promise.all(arrayLinks.map(async url => {
    const res = await fetch(url)
    return res.status
  }))

  return arrayStatus
}

function geraArrayDeURLS(arrayLinks) {
  return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function ValidaURLS(arrayLinks) {
  const links = geraArrayDeURLS(arrayLinks)
  const statusLinks = await checaStatus(links)

  return statusLinks
}


module.exports = ValidaURLS;