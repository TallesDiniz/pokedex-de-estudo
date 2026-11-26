// Tela Favoritos (provisória): a lista com Preferences entra na E3.
async function favoritos(app) {
  app.innerHTML = `
    <h1>Favoritos</h1>
  `
}

export default { url: '#/favoritos', label: 'Favoritos', pagina: favoritos }
