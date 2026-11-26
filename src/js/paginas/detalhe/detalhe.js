// Tela Detalhe (provisória): o conteúdo real é da frente B.
// Recebe o id do pokémon pela rota: #/detalhe/{id}
async function detalhe(app, parametros) {
  app.innerHTML = `
    <h1>Detalhe</h1>
    <p>Id do pokémon: <span id="id-pokemon"></span></p>
  `
  // textContent (e não innerHTML) para o texto do endereço não virar HTML
  app.querySelector('#id-pokemon').textContent = parametros.id
}

export default { url: '#/detalhe/:id', label: '', pagina: detalhe }
