// Gera o menu a partir da lista de rotas.
// Só entram no menu as rotas com label preenchido.
function navbar(itensMenu) {
  const navbarElement = document.getElementById('navbar')

  function render() {
    // Sem hash (ou só '#') conta como Início
    let hashAtual = window.location.hash
    if (hashAtual === '' || hashAtual === '#') hashAtual = '#/'

    navbarElement.innerHTML = `
      <nav class="navbar">
        ${itensMenu
          .filter((item) => item.label !== '')
          .map((item) => {
            // Marca o item da tela atual (o visual vem do CSS)
            const ativo = item.url === hashAtual ? 'ativo' : ''
            return `<a href="${item.url}" class="navbar-item ${ativo}">${item.label}</a>`
          })
          .join('')}
      </nav>
    `
  }

  render()
  // Redesenha o menu quando a rota muda, para atualizar o item ativo
  window.addEventListener('hashchange', render)
}

export { navbar }
