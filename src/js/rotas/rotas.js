import inicio from '../paginas/inicio/inicio.js'
import favoritos from '../paginas/favoritos/favoritos.js'
import sobre from '../paginas/sobre/sobre.js'

// Lista única de telas: o roteador (main.js) e o menu (navbar.js) usam esta lista.
// Resultados, Detalhe e a 404 entram no card #6.
const mapaderotas = [inicio, favoritos, sobre]

export { mapaderotas }
