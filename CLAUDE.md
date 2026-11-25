# CLAUDE.md — Pokédex de estudo (Prova final · "O app conversa com o mundo")

Contexto para continuar o projeto com um agente de IA. Leia tudo antes de responder ou de mexer em qualquer arquivo.

Última atualização: 25/11/2026. Apresentação em **03/12/2026** (faltam poucos dias; priorize o que vale nota).

## Como trabalhar neste projeto

- Responda em **português (PT-BR)**. Comentários de código, mensagens de commit e textos do app também em PT-BR.
- **Fase atual:** o desenho está fechado para a E1 e a implementação está começando. **Só gere ou altere código para a tarefa (card do Kanban) que o usuário indicar.** Não adiante etapas, não refatore o que não foi pedido, não crie arquivos fora do escopo do card.
- Separe sempre o que o grupo **já decidiu** do que é **proposta**. Não trate proposta como decisão.
- Antes de afirmar qualquer detalhe da PokéAPI, lembre que os campos citados abaixo vêm de conhecimento geral e **precisam ser confirmados no Postman** (a E1 exige isso de qualquer forma). Se o usuário colar uma resposta real da API, ela vale mais que este arquivo.
- Faça uma pergunta de cada vez quando precisar de uma decisão.
- Se algo neste arquivo contradizer o que você vê no repositório, avise o usuário em vez de escolher sozinho.

### Regras específicas para agentes de IA

- **Autoria e fator individual:** a nota de cada integrante depende de commits na **própria conta** e de cards movidos por quem os fez. Por isso: **não faça commit nem push sem o usuário pedir**, nunca altere `git config user.name`/`user.email`, e nunca faça commit em nome de outra pessoa.
- **Código tem de ser explicável.** Cada integrante responde na apresentação sobre a própria parte, sem ler. Prefira código simples, curto e comentado; evite abstrações sofisticadas e explique o que escreveu quando entregar.
- **Respeite as regras que zeram nota** (seção abaixo): `fetch` só em `servicos/api.js`, nada de `display: grid`, nenhum framework de CSS/JS, nenhuma chave de API.
- **Não invente dependências.** Só instale pacote novo se o usuário aprovar. O projeto deve rodar com `npm install` e `npm run dev` em pasta limpa.
- **Uso de IA precisa ser declarado** no documento (seção 9, obrigatória). Ao terminar uma tarefa, resuma em 2 a 3 linhas o que você fez, para o usuário registrar (proposta: arquivo `docs/uso-de-ia.md` ou tabela no Docs, com data, tarefa e o que foi gerado/revisado).
- Não crie nem edite o documento do grupo no Google Docs por conta própria; o histórico do Docs entra no fator individual e o documento **não pode ser recriado ou copiado**. Pode ajudar com rascunhos de texto para o usuário colar.
- Dado de teste: não cole dados pessoais nem tokens em código ou commits.

## Equipe e organização

- Grupo de **3 pessoas**:
  - **Talles Diniz** — GitHub `TallesDiniz` — **frente C (Base e nativo)** (decidido)
  - **Paulo Gustavo Lisboa** — GitHub `Pgustavols` — frente a definir
  - **João Pedro do Carmo** — GitHub `docarmojoao4` — frente a definir
- **Divisão em três frentes (decidida pelo grupo; atribuição de A e B ainda pendente):**
  - **A. Dados:** `servicos/api.js`, conversão, `servicos/cache.js`, `servicos/efetividade.js`.
  - **B. Telas e CSS:** `paginas/` (Início, Resultados, Detalhe), `tokens.css`, `base.css`, helper de estados.
  - **C. Base e nativo:** esqueleto, `main.js`, `rotas.js`, `navbar.js`, Favoritos com Preferences, Capacitor, APK, telas Favoritos, Sobre e 404.
- A frente B depende dos dados da A: combinar cedo o contrato do modelo convertido (seção "Modelo de dados convertido") para trabalharem em paralelo.
- **Repositório:** não há organização do GitHub; o Talles está criando na conta dele (nome sugerido: `pokedex-de-estudo`, **proposta**) e convidando os outros dois como colaboradores. Conferir no enunciado como o professor recebe o link e se precisa de acesso. Ainda não confirmado que o repositório existe.
- **Kanban:** GitHub Projects (colunas A fazer, Fazendo, Feito), com uma Issue por tarefa do plano (numeração 1.1 a 3.8 no documento "Plano e acompanhamento"). Cada card tem um responsável e **quem faz move o próprio card**.
- **Plano de tarefas e acompanhamento:** documento "Pokédex de estudo — Plano e acompanhamento", no Claude Docs do Talles, com situação geral, tarefas por etapa, checklist final e registro de andamento.
- Convenção de commits (proposta): mensagens curtas em PT-BR citando o card, ex.: `rotas e navbar (#6)`. Cada integrante deve commitar em pelo menos 2 dias diferentes.

## A prova (resumo do enunciado)

- FATEC Mogi das Cruzes · Análise e Desenvolvimento de Sistemas · Programação para Dispositivos Móveis · Prof. Rodrigo dos Santos Faustino.
- Grupos de 3 a 4 pessoas. Um repositório por grupo na organização do GitHub, com Kanban.
- Etapas: **E1** (esqueleto, docs com capa e identificação, pergunta do app, esqueleto rodando com rotas e menu, API testada no Postman com print no Docs), **E2** (busca, resultados e detalhe vindos da API, com estados carregando, erro e vazio), **E3** (cache, recurso nativo, favoritos e documento completo). As datas de E1 a E3 não apareceram no texto extraído do PDF: conferir no enunciado. **Apresentação: 03/12**, 10 minutos, app rodando a 360 px, uma pergunta para cada integrante.
- Nota: app 50 pts, documento 30 pts, apresentação 20 pts. A nota do grupo é multiplicada por um fator individual (histórico do Google Docs, commits em pelo menos 2 dias diferentes, cards concluídos no Kanban).
- Esqueleto base: o do KiOferta (Desafio 1), trocando `dadosMockados/` por `servicos/`.

### Regras que valem nota

- **A1** Todo `fetch` mora em `servicos/api.js`. Nenhuma tela chama `fetch`.
- **A2** `async`/`await` e `try/catch` em toda chamada. A resposta passa por uma função que converte para o formato do app; a tela não conhece os nomes de campo da API.
- **A3** Quatro estados em toda tela que busca dados: carregando, erro (com botão "tentar de novo"), vazio e sem internet.
- **A4** A última resposta de cada busca fica guardada. Sem internet, mostrar o que foi guardado com o aviso "dados de 14h32".
- **A5** Nenhuma chave de API no código (só APIs abertas).
- **Layout (L1–L4):** tudo em Flexbox (**nada de `display: grid`**), nenhum filho flex com largura ou altura fixa, cores só de `tokens.css`, tudo funcionando a 360 px sem rolagem lateral. **Sem framework de CSS ou de JavaScript.**
- **Recurso nativo:** um entre Geolocation, Camera, Share e Preferences (Capacitor). Preferences só conta se guardar os **favoritos**; usada só como cache, não conta.
- **Penalidades:** não rodar com `npm install` e `npm run dev` em pasta limpa (máx. metade em P1–P7); `fetch` fora de `api.js` (P2 pela metade); `display: grid` ou framework de CSS (P7 zerado); chave de API no código (P2 zerado); documento recriado ou copiado (fator sem a fonte Docs); código idêntico ao de outro grupo (zero para os dois).
- **Rubrica do app (50):** P1 estrutura e rotas (8), P2 API isolada e convertida (10), P3 quatro estados (8), P4 cache com hora sem internet (6), P5 recurso nativo (8), P6 favoritos no aparelho (4), P7 layout (6).
- **Documento (30), seções obrigatórias:** 1 problema e três situações de uso; 2 mapa de telas; 3 a API (endereços, exemplo de resposta resumido, função de conversão, limites); 4 recurso nativo (inclui o que o app faz quando a permissão é negada); 5 testes de falha com prints dos quatro estados; 6 três decisões e um descartado; 7 organização da equipe (Kanban e tabela integrante → telas, arquivos, seções); 8 duas dificuldades reais; 9 uso de IA (declarar é obrigatório); 10 o que ficou de fora, conclusão e referências. Padrão Fatec: capa, sumário automático, tópicos numerados. Código e JSON em bloco de texto, prints só das telas a 360 px.
- **Apresentação (20):** sem slides; pergunta do app (1 min), fluxo buscar → detalhe → favoritar → recurso nativo (3 min), **modo avião** mostrando aviso e cache (2 min), código de `api.js`, conversão e estados explicado por quem escreveu (4 min).

## Decisões confirmadas pelo grupo

- Tema **12 · Pokédex de estudo**: pergunta do app "qual pokémon vence esse tipo?", API **PokéAPI**.
- **O usuário pesquisa pelo nome do pokémon** (não por tipo). Texto normalizado (minúsculas, sem acento, sem espaços). Há **autocomplete**.
- Resultado da busca: os **tipos efetivos** contra o pokémon e uma lista com os **5 melhores pokémons por status geral** (soma dos stats base) contra ele.
- **Filtros na tela de Resultados** (sem filtro inclui todos): remover lendários; remover míticos; remover megas e todas as variações (gigantamax, regionais etc.); **select** de **uma única geração**, aplicado à geração do **pokémon candidato** (não do alvo).
- **Detalhe** mostra imagem, tipos, stats, total e também **fraquezas, resistências e imunidades**.
- **Favoritos:** é possível favoritar/desfavoritar na tela de Detalhe **e também remover direto na tela de Favoritos**. Favoritos guardados com **Preferences** (Capacitor); o cache da última resposta fica em `localStorage`.
- **Idioma do app: PT-BR.**
- Stack: **JavaScript puro**, **CSS puro com CSS Modules (de preferência)**, **Capacitor** para o app mobile. Tailwind foi descartado porque o enunciado proíbe framework de CSS.
- **Rotas definidas:** `#/` (Início), `#/resultados/pokemon/{nome}` (Resultados), `#/detalhe/{id}` (Detalhe), `#/favoritos` (Favoritos), `#/sobre` (Sobre) e fallback 404 com saída para o início.
- Vão gerar um **APK**.
- **Política de cache:** cache primeiro, com validade, para `pokemon`, `tipo`, `especie` e `nomes`; rede primeiro para a lista de resultados.
- **Divisão em três frentes (A Dados, B Telas e CSS, C Base e nativo)** e **Talles na frente C**. Quem fica com A e com B ainda não foi definido.
- Grupo: Talles Diniz, Paulo Gustavo Lisboa e João Pedro do Carmo.

## Ordem de trabalho combinada (próximos passos)

1. Criar repositório e Kanban (Talles). **Em andamento.**
2. Atribuir as frentes A e B ao Paulo e ao João Pedro.
3. Conferir no enunciado as datas de E1, E2 e E3.
4. **Esqueleto rodando** (frente C): base do KiOferta com `servicos/` no lugar de `dadosMockados/`, Vite, rotas e menu, validado com `npm install` e `npm run dev` em pasta limpa.
5. **Postman** (todos): testar os endpoints listados abaixo e guardar os prints para o documento.
6. **APK de debug vazio** (frente C): descobrir cedo se Android Studio e JDK funcionam.

## Desenho proposto (ponto de partida; rever livremente)

### Fluxo
1. Usuário digita; o autocomplete sugere nomes da lista `/pokemon?limit=1400` (guardada em cache).
2. `/pokemon/{nome}` traz os tipos do alvo (1 ou 2).
3. `/type/{tipo}` de cada tipo do alvo traz `damage_relations`. O app calcula o multiplicador de cada um dos 18 tipos atacantes (4x, 2x, 1x, 0,5x, 0,25x, 0x). Tipos efetivos = 2x ou mais, com 4x em destaque.
4. Candidatos = pokémons dos tipos efetivos (de `/type/{tipo}`, só nome e URL). Busca os stats de cada um, soma e ordena.
5. Filtros: **variações** se resolvem antes de buscar stats (ids acima de 10000 nas formas alternativas). **Lendário, mítico e geração** vêm de `/pokemon-species/{idEspecie}`; sugestão: buscar a espécie de forma preguiçosa, descendo a lista ordenada até completar 5 que passem nos filtros.
6. Menos de 5 resultados: mostrar o que houver; nenhum resultado = estado **vazio** com "limpar filtros".

### Mesma lógica, dois usos
`servicos/efetividade.js` recebe os tipos de um pokémon e as relações de dano e devolve o multiplicador por tipo atacante. Usado em Resultados (tipos efetivos contra o alvo) e no Detalhe (fraquezas, resistências, imunidades). Só ~18 tipos existem, então o cache de `/type/{tipo}` é muito reaproveitado.

### Telas e menu
| Rota | Tela | No menu principal? (proposta) |
|---|---|---|
| `#/` | Início: pergunta do app, campo com autocomplete | Sim |
| `#/resultados/pokemon/{nome}` | Resultados: alvo, tipos efetivos, 5 melhores, filtros | Não (acesso via busca) |
| `#/detalhe/{id}` | Detalhe: aberto pelo id, funciona após F5; botão de favoritar | Não (acesso via card/lista) |
| `#/favoritos` | Favoritos (do Preferences), com opção de remover item | Sim |
| `#/sobre` | Sobre: link da PokéAPI e hora da última atualização | Sim |
| qualquer outra | 404 com saída para o início | Não |

### Modelo de dados convertido (contrato com as telas)
- **Pokémon:** `id`, `nome`, `tipos` (chaves em inglês, ex. `water`; PT-BR só para exibir), `imagem` (official-artwork, fallback `front_default`, depois placeholder), `stats` (`hp`, `ataque`, `defesa`, `ataqueEspecial`, `defesaEspecial`, `velocidade`), `total`, `variacao` (não é a forma padrão), `idEspecie` (extraído da URL de `species`).
- **Espécie** (indexada pelo `idEspecie`, **não** pelo id do pokémon, pois formas alternativas apontam para a espécie base): `idEspecie`, `lendario`, `mitico`, `geracao` (número de 1 a 9, convertido de `generation-iii` etc.).
- **Efetividade:** multiplicador por tipo atacante, agrupado por faixa (4x, 2x, 0,5x, 0,25x, 0x). O Detalhe recebe `fraquezas`/resistências/imunidades calculadas pelo app (não vêm da API).
- **Lista de nomes** (autocomplete): `[{ id, nome }]`.
- **Entrada de cache:** `{ dados, salvoEm }`.
- **Favorito:** resumo já convertido (`id`, `nome`, `tipos`, `imagem`, `total`), para funcionar offline.
- Nomes de pokémons ficam como a PokéAPI devolve; só os 18 tipos têm tradução própria (mapa EN→PT para exibição).

### Cache e estados
- `api.js` classifica o erro antes da tela: falha de rede (`TypeError` do fetch) → **sem internet**; 404 → **vazio**; 5xx ou timeout (ex.: `AbortController` ~10 s) → **erro** com "tentar de novo". `navigator.onLine` e os eventos `online`/`offline` servem só como dica.
- Leitura (função tipo `buscarComCache(chave, validade, buscador)`): cache válido → devolve sem rede; vencido ou ausente → tenta a rede e grava; rede falhou e há cache (mesmo vencido) → devolve marcado como desatualizado; rede falhou e não há cache → sem internet. Validade sugerida: 24 h, como constante em um só lugar.
- A função devolve também a **origem** (`rede` ou `cache`) e o `salvoEm`. O aviso "dados de HH h MM" aparece quando o dado veio do cache **e** a conexão está fora (falha de rede ou `navigator.onLine === false`). Sem isso, em modo avião com cache válido o aviso nunca apareceria (critério P4).
- Guardar o **objeto já convertido**, não a resposta bruta (limite do `localStorage`, ~5 MB). Tratar `QuotaExceededError` com `try/catch` removendo entradas antigas.
- Chaves de cache com prefixo (ex. `cache:`), para não colidir com a chave dos favoritos (no navegador, o plugin Preferences usa `localStorage`).
- `resultado:{alvo}` guarda a lista de candidatos inteira e ordenada, sem filtros, para os filtros funcionarem offline. Se faltar espécie no cache, avisar que o resultado pode estar incompleto.
- No Detalhe, se o pokémon carregar mas as relações de tipo falharem, mostrar o pokémon e deixar só a seção de fraquezas em erro (com "tentar de novo").
- Estados por tela: Início, Resultados e Detalhe buscam dados (os quatro estados); Favoritos vem do aparelho (vazio = "nenhum favorito ainda"; ao remover o último item, entra direto no estado vazio); Sobre não busca.

### Favoritos (Preferences)
- Uma chave (ex. `favoritos`) com array de resumos em JSON (`JSON.stringify` / `JSON.parse`); `get`/`set` são assíncronos, então o botão do Detalhe lê a lista ao abrir.
- Identificar por `id`; no Detalhe o botão alterna favoritar/desfavoritar, e na tela de Favoritos há um botão de remover em cada card (sem disparar a navegação para o Detalhe).
- O Preferences não pede permissão: no documento, explicar isso e o que o app faz quando a **gravação falha** (aviso na tela, sem perder a lista).
- Extra opcional: Detalhe de um favorito, sem cache e sem internet, mostra o resumo guardado.

### Estrutura de pastas (a do enunciado)
```
src/
  index.html               página única com #app e o menu
  css/                     tokens.css, base.css, style.css
  js/
    main.js                roteador: hashchange + find na lista de rotas
    rotas/rotas.js         lista única de telas
    navbar/navbar.js       menu gerado a partir da lista
    servicos/api.js        único arquivo com fetch (+ conversão, ou conversores.js separado)
    servicos/cache.js      guarda e devolve a última resposta
    servicos/efetividade.js  (proposta) cálculo dos multiplicadores
    paginas/               uma pasta por tela, com o CSS Module dela
```

Vite como `npm run dev` (para cumprir a penalidade de rodar em pasta limpa). Capacitor com `webDir` apontando para o build do Vite. Colocar uma ou mais funções de estados (carregando/erro/vazio/sem internet) em um helper compartilhado.

## Pontos a confirmar na API (Postman, E1)
`/type` (lista dos 18 tipos), `/type/water` (`damage_relations` com `double_damage_from`, `half_damage_from`, `no_damage_from` e `pokemon` com nome e URL), `/pokemon/gyarados` (tipos, stats, sprites, `is_default`, `species`), `/pokemon-species/{id}` (`is_legendary`, `is_mythical`, `generation`), `/pokemon?limit=1400`. Verificar se formas alternativas aparecem em `/type/{tipo}` com ids acima de 10000. O GraphQL beta da PokéAPI poderia reduzir o número de chamadas, mas é beta e não foi verificado; só usar se o Postman confirmar e o grupo aceitar.

## Pontos em aberto
- **Atribuição das frentes A e B** entre Paulo e João Pedro.
- **Datas de E1, E2 e E3** (conferir no enunciado) e **como o professor recebe o link do repositório** (não há organização do GitHub).
- **Layout e tokens** a 360 px (cores, tipografia, cards, chips de tipo, filtros em Flexbox com `flex-wrap`).
- **Menu gerado da lista de rotas** (confirmar se apenas `Início`, `Favoritos` e `Sobre` aparecem na barra de navegação).
- **Testes de falha** (como provocar e registrar os quatro estados e a falha de gravação do Preferences).
- **Divisão dos blocos da apresentação** entre os três.
- **APK:** o enunciado marcava "[VERIFICAR] gerar o APK é obrigatório ou ponto extra"; o grupo decidiu gerar. Conferir cedo que Android Studio e JDK funcionam e gerar um APK de debug vazio.
- Registro para o documento: candidatos a "três decisões e um descartado" (cache primeiro com validade e o descartado rede primeiro para tudo; CSS Modules sem framework e o descartado Tailwind).

## Checklist antes de entregar (do enunciado)
Todo integrante na tabela de identificação e escrevendo na própria conta; clone em pasta limpa com `npm install` e `npm run dev` abrindo o app; `fetch` só em `api.js`; modo avião mostra aviso e dados guardados; F5 no detalhe e numa rota inexistente; permissão do recurso nativo negada e o app continua funcionando; teste a 360 px sem rolagem lateral; seção "Uso de IA" preenchida; cada integrante sabe explicar a própria parte sem ler.
