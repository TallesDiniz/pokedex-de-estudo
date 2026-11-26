import { mapaderotas } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

// Elemento onde cada tela é desenhada
const app = document.getElementById('app')

// Menu gerado a partir da mesma lista de rotas
navbar(mapaderotas)

// Procura a rota do hash atual na lista e desenha a tela correspondente.
// Por enquanto só compara o hash exato; rotas com parâmetro e a 404 entram no card #6.
function renderizarPagina() {
  const hash = window.location.hash || '#/'
  const rota = mapaderotas.find((tela) => tela.url === hash)
  if (rota) {
    rota.pagina(app)
  }
}

window.addEventListener('hashchange', renderizarPagina)
renderizarPagina()
