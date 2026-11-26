// Tela Resultados (provisória): o conteúdo real é da frente B.
// Recebe o nome do pokémon pela rota: #/resultados/pokemon/{nome}
async function resultados(app, parametros) {
  app.innerHTML = `
    <h1>Resultados</h1>
    <p>Pokémon buscado: <span id="nome-buscado"></span></p>
  `
  // textContent (e não innerHTML) para o texto do endereço não virar HTML
  app.querySelector('#nome-buscado').textContent = parametros.nome
}

export default { url: '#/resultados/pokemon/:nome', label: '', pagina: resultados }
