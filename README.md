# Pokédex de estudo

Trabalho da prova final de **Programação para Dispositivos Móveis** — FATEC Mogi das Cruzes — Prof. Rodrigo dos Santos Faustino.

**Pergunta do app:** qual pokémon vence esse tipo?

O usuário busca um pokémon pelo nome; o app mostra os tipos efetivos contra ele e os 5 melhores candidatos por soma de stats base. Também tem tela de detalhe, favoritos e cache da última resposta para uso sem internet.

## Equipe

| Integrante | GitHub |
|---|---|
| Talles Diniz | [@TallesDiniz](https://github.com/TallesDiniz) |
| Paulo Gustavo Lisboa | [@Pgustavols](https://github.com/Pgustavols) |
| João Pedro do Carmo | [@docarmojoao4](https://github.com/docarmojoao4) |

## Stack

- JavaScript puro (sem framework)
- CSS puro com CSS Modules (sem framework de CSS)
- Vite para rodar o projeto em desenvolvimento
- Capacitor para gerar o app mobile (Android)

## Dados

API: [PokéAPI](https://pokeapi.co/) (aberta, sem chave).

## Rotas

| Rota | Tela |
|---|---|
| `#/` | Início (busca com autocomplete) |
| `#/resultados/pokemon/{nome}` | Resultados |
| `#/detalhe/{id}` | Detalhe |
| `#/favoritos` | Favoritos |
| `#/sobre` | Sobre |
| qualquer outra | 404 |

## Como rodar

```bash
npm install
npm run dev
```

## Layout

- Protótipo no Figma: [Pokédex de estudo — Layout e Telas](https://www.figma.com/design/44MvU7mjgwUiLh0occiBC3)
- Guia de layout e tokens: [`docs/layout/guia-de-layout.md`](./docs/layout/guia-de-layout.md)

## Acompanhamento

As tarefas ficam no Kanban (GitHub Projects) deste repositório, uma Issue por tarefa.
