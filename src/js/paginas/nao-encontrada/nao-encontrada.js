// Tela 404: aparece quando o hash não combina com nenhuma rota.
async function naoEncontrada(app) {
  app.innerHTML = `
    <h1>Página não encontrada</h1>
    <p>Esse endereço não existe no app.</p>
    <a href="#/">Voltar para o início</a>
  `
}

export default { url: '', label: '', pagina: naoEncontrada }
