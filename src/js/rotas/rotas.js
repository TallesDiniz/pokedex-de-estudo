import inicio from '../paginas/inicio/inicio.js'
import resultados from '../paginas/resultados/resultados.js'
import detalhe from '../paginas/detalhe/detalhe.js'
import favoritos from '../paginas/favoritos/favoritos.js'
import sobre from '../paginas/sobre/sobre.js'
import naoEncontrada from '../paginas/nao-encontrada/nao-encontrada.js'

// Lista única de telas: o roteador (main.js) e o menu (navbar.js) usam esta lista.
// - url: modelo do hash; pedaços com ':' são parâmetros (ex. ':id')
// - label: texto no menu; vazio = não aparece no menu
const mapaderotas = [inicio, resultados, detalhe, favoritos, sobre]

// A 404 fica fora da lista: é usada quando nenhuma rota combina
const paginaNaoEncontrada = naoEncontrada

export { mapaderotas, paginaNaoEncontrada }
