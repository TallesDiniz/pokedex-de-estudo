// Tela Início (provisória): o conteúdo real (busca com autocomplete) é da frente B.
async function inicio(app) {
  app.innerHTML = `
    <h1>Pokédex de estudo</h1>
    <p>Qual pokémon vence esse tipo?</p>
  `
}

export default { url: '#/', label: 'Início', pagina: inicio }
