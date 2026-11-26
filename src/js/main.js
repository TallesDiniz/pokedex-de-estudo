import { mapaderotas, paginaNaoEncontrada } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

// Elemento onde cada tela é desenhada
const app = document.getElementById('app')

// Menu gerado a partir da mesma lista de rotas
navbar(mapaderotas)

// Compara o hash com o modelo de uma rota, pedaço por pedaço.
// Ex.: modelo '#/detalhe/:id' e hash '#/detalhe/25' -> { id: '25' }
// Devolve os parâmetros encontrados, ou null se não combinar.
function combinarRota(modelo, hash) {
  const partesModelo = modelo.split('/')
  const partesHash = hash.split('/')

  // Quantidade de pedaços diferente: não é esta rota
  if (partesModelo.length !== partesHash.length) {
    return null
  }

  const parametros = {}
  for (let i = 0; i < partesModelo.length; i++) {
    const parteModelo = partesModelo[i]
    const parteHash = partesHash[i]

    if (parteModelo.startsWith(':')) {
      // Pedaço variável: guarda o valor (vazio não vale)
      if (parteHash === '') return null
      try {
        parametros[parteModelo.slice(1)] = decodeURIComponent(parteHash)
      } catch {
        // Endereço com '%' inválido (ex. '%E0'): trata como rota inexistente
        return null
      }
    } else if (parteModelo !== parteHash) {
      // Pedaço fixo diferente: não é esta rota
      return null
    }
  }
  return parametros
}

// Procura a rota do hash atual e desenha a tela.
// Como o hash fica no endereço, F5 desenha de novo a mesma tela.
function renderizarPagina() {
  // Sem hash (ou só '#') vai para o Início
  let hash = window.location.hash
  if (hash === '' || hash === '#') hash = '#/'

  for (const rota of mapaderotas) {
    const parametros = combinarRota(rota.url, hash)
    if (parametros) {
      rota.pagina(app, parametros)
      return
    }
  }

  // Nenhuma rota combinou: tela 404
  paginaNaoEncontrada.pagina(app)
}

window.addEventListener('hashchange', renderizarPagina)
renderizarPagina()
