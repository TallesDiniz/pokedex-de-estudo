// Tela Sobre (provisória): link da PokéAPI e hora da última atualização entram depois.
async function sobre(app) {
  app.innerHTML = `
    <h1>Sobre</h1>
  `
}

export default { url: '#/sobre', label: 'Sobre', pagina: sobre }
