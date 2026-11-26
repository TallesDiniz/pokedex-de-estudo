# Guia de Layout e Tokens — Pokédex de estudo

Proposta visual para o app no estilo **claro com toque de Pokédex** (escolhido em 25/11/2026).  
Serve de referência para a **frente B** (`tokens.css`, `base.css`, Início, Resultados e Detalhe) e para a **frente C** (`navbar.js`, Favoritos, Sobre e 404).

**Protótipo no Figma:** [Pokédex de estudo — Layout e Telas](https://www.figma.com/design/44MvU7mjgwUiLh0occiBC3)

> **Regras do enunciado que este guia respeita (L1–L4):**
> - Tudo em **Flexbox** (**proibido `display: grid`**).
> - Nenhum filho flex com largura ou altura fixa (usar `flex`, `min-width`, `max-width`, `flex-wrap`).
> - Todas as cores vêm de variáveis em `tokens.css` (nada de cor solta nos arquivos de tela).
> - Tudo funcionando a **360 px** sem rolagem lateral (`overflow-x: hidden` nunca como gambiarra — o conteúdo precisa caber).
> - **Sem framework de CSS** (CSS puro + CSS Modules).

---

## Imagens de referência

| Arquivo | O que mostra |
|---|---|
| [01-design-system.jpg](./01-design-system.jpg) | Paleta de cores, tipografia, escala de espaçamentos, bordas e chips dos 18 tipos |
| [02-tela-inicio.jpg](./02-tela-inicio.jpg) | Tela Início (`#/`) com busca, autocomplete aberto e barra inferior |
| [03-tela-resultados.jpg](./03-tela-resultados.jpg) | Tela Resultados (`#/resultados/pokemon/{nome}`) com alvo, tipos efetivos (4× e 2×), filtros em `flex-wrap` e os 5 melhores |
| [04-tela-detalhe.jpg](./04-tela-detalhe.jpg) | Tela Detalhe (`#/detalhe/{id}`) com botão Favoritar, barras de stats base + total e fraquezas/resistências/imunidades |
| [05-telas-favoritos-sobre-estados.jpg](./05-telas-favoritos-sobre-estados.jpg) | Favoritos (`#/favoritos`), aviso offline ("dados de 14h32") + estado de erro com "Tentar de novo", Sobre (`#/sobre`) e 404 |

---

## 1. Cores (`tokens.css`)

### Cores base do app

| Token | Valor | Uso |
|---|---|---|
| `--cor-primaria` | `#DC2626` | Cabeçalho, botão principal, item ativo do menu, destaque do total |
| `--cor-primaria-escura` | `#B91C1C` | Hover/ativo do botão principal |
| `--cor-primaria-suave` | `#FEE2E2` | Fundo leve de chip ativo ou destaque suave |
| `--cor-fundo` | `#F7F8FA` | Fundo geral da página (`body`) |
| `--cor-superficie` | `#FFFFFF` | Fundo dos cards, inputs, dropdown e navbar inferior |
| `--cor-superficie-hover` | `#F3F4F6` | Item destacado no autocomplete e hover leve |
| `--cor-texto` | `#111827` | Títulos, nomes de pokémons e texto principal |
| `--cor-texto-secundario` | `#4B5563` | Subtítulos, descrições, rótulos de stats |
| `--cor-texto-suave` | `#6B7280` | Números (`#130`), placeholders, itens inativos do menu |
| `--cor-texto-inverso` | `#FFFFFF` | Texto sobre vermelho primário e sobre chips de tipo |
| `--cor-borda` | `#E5E7EB` | Borda de cards, inputs e divisórias |

### Cores de estado (A3 e A4)

| Token | Valor | Uso |
|---|---|---|
| `--cor-aviso-fundo` | `#FEF3C7` | Banner de modo offline ("Sem internet · dados de 14h32") |
| `--cor-aviso-texto` | `#92400E` | Texto do banner offline |
| `--cor-aviso-borda` | `#FDE68A` | Borda do banner offline |
| `--cor-erro-fundo` | `#FEE2E2` | Card/aviso de erro e botão de remover favorito |
| `--cor-erro-texto` | `#991B1B` | Texto de erro e texto do botão remover |
| `--cor-sucesso` | `#16A34A` | Barras de stats altos (opcional) ou feedback positivo |

### Cores dos 18 tipos (chaves em inglês da PokéAPI → exibição em PT-BR)

Todas foram escolhidas para manter boa leitura com texto branco (`#FFFFFF`):

| Chave API | PT-BR | Token | Hex |
|---|---|---|---|
| `water` | Água | `--tipo-water` | `#2563EB` |
| `fire` | Fogo | `--tipo-fire` | `#EA580C` |
| `electric` | Elétrico | `--tipo-electric` | `#CA8A04` |
| `grass` | Planta | `--tipo-grass` | `#16A34A` |
| `rock` | Pedra | `--tipo-rock` | `#78716C` |
| `ground` | Terra | `--tipo-ground` | `#B45309` |
| `ice` | Gelo | `--tipo-ice` | `#0284C7` |
| `flying` | Voador | `--tipo-flying` | `#6366F1` |
| `dragon` | Dragão | `--tipo-dragon` | `#4F46E5` |
| `poison` | Venenoso | `--tipo-poison` | `#9333EA` |
| `fighting` | Lutador | `--tipo-fighting` | `#B91C1C` |
| `psychic` | Psíquico | `--tipo-psychic` | `#DB2777` |
| `bug` | Inseto | `--tipo-bug` | `#65A30D` |
| `ghost` | Fantasma | `--tipo-ghost` | `#5B21B6` |
| `dark` | Sombrio | `--tipo-dark` | `#374151` |
| `steel` | Aço | `--tipo-steel` | `#475569` |
| `fairy` | Fada | `--tipo-fairy` | `#EC4899` |
| `normal` | Normal | `--tipo-normal` | `#6B7280` |

---

## 2. Tipografia

- **Família:** `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif` (não precisa baixar fonte externa — carrega instantâneo e funciona 100% offline no modo avião e no APK).
- **Escala:**

| Token | Tamanho | Peso | Line-height | Uso |
|---|---|---|---|---|
| `--fonte-titulo` | `1.375rem` (22px) | `700` | `1.25` | Título principal da tela (`h1`), nome do pokémon no Detalhe |
| `--fonte-secao` | `1rem` (16px) | `600` | `1.35` | Títulos de seção (`h2`), nome nos cards |
| `--fonte-corpo` | `0.875rem` (14px) | `400` | `1.5` | Textos, inputs, botões, rótulos |
| `--fonte-legenda` | `0.75rem` (12px) | `500` | `1.4` | Chips de tipo, menu inferior, `#id`, subtítulos pequenos |

---

## 3. Espaçamentos, Bordas e Tamanhos

### Escala de espaçamento (múltiplos de 4px)

| Token | Valor | Uso típico |
|---|---|---|
| `--espaco-xs` | `4px` | Espaço entre ícone e texto, gap interno pequeno |
| `--espaco-sm` | `8px` | Gap entre chips de tipo, padding vertical de botões pequenos |
| `--espaco-md` | `12px` | Gap entre cards na lista, padding interno de inputs |
| `--espaco-lg` | `16px` | Padding lateral da tela (`#app`) e padding interno dos cards |
| `--espaco-xl` | `24px` | Separação entre blocos grandes |

### Bordas e sombras

| Token | Valor | Uso |
|---|---|---|
| `--raio-sm` | `8px` | Inputs, selects, botões |
| `--raio-md` | `12px` | Cards principais, dropdown de autocomplete |
| `--raio-pill` | `999px` | Chips de tipo, chips de filtro, badge de total |
| `--sombra-card` | `0 1px 3px rgba(17, 24, 39, 0.08)` | Elevação suave nos cards |
| `--sombra-dropdown` | `0 4px 12px rgba(17, 24, 39, 0.12)` | Lista de autocomplete |

### Medidas do viewport (360 px)

- Largura máxima do container central (`#app` e `<nav>`): `440px`, centralizado com `margin: 0 auto` (mesmo padrão do KiOferta), ocupando `100%` em telas de `360px`.
- Altura mínima da área de toque (botões, itens de menu, chips): `40px` a `44px` no mobile.
- Espaço inferior reservado em `#app`: `padding-bottom: 76px` para o último card nunca ficar escondido atrás da barra de navegação fixa.

---

## 4. Estrutura Flexbox por tela (sem `display: grid`)

1. **Barra de navegação inferior (`navbar.js`):**
   - `display: flex; justify-content: space-around; align-items: center;`
   - Fixa no rodapé (`position: fixed; bottom: 0; left: 0; right: 0;`), com container interno `max-width: 440px; margin: 0 auto;`.
   - 3 itens: **Início**, **Favoritos**, **Sobre**.

2. **Início (`#/`):**
   - Coluna única (`display: flex; flex-direction: column; gap: var(--espaco-lg);`).
   - Card de busca com input + lista de autocomplete logo abaixo + botão "Buscar" ocupando `100%`.
   - Sugestões rápidas de exemplo em `display: flex; flex-wrap: wrap; gap: var(--espaco-sm);`.

3. **Resultados (`#/resultados/pokemon/{nome}`):**
   - **Card do alvo:** `display: flex; align-items: center; gap: var(--espaco-md);` (imagem com `max-width: 72px; height: auto;` + coluna de texto com `flex: 1; min-width: 0;`).
   - **Tipos efetivos:** `display: flex; flex-wrap: wrap; gap: var(--espaco-sm);` — chips `4×` com borda/destaque reforçado.
   - **Filtros:** `display: flex; flex-wrap: wrap; gap: var(--espaco-sm);` para os checkboxes/chips (`Sem lendários`, `Sem míticos`, `Sem variações`) + `<select>` de geração ocupando a linha inteira (`flex: 1 1 100%`).
   - **Lista dos 5 melhores:** coluna flex com cards horizontais (`display: flex; align-items: center; gap: var(--espaco-md);`). Sempre usar `min-width: 0` na coluna do meio para nomes longos não causarem rolagem lateral a 360 px.

4. **Detalhe (`#/detalhe/{id}`):**
   - Topo com botão Voltar e botão Favoritar em `display: flex; justify-content: space-between; align-items: center;`.
   - Card hero centralizado (`flex-direction: column; align-items: center;`).
   - **Barras de stats:** cada linha em `display: flex; align-items: center; gap: var(--espaco-sm);` (rótulo com `flex: 0 1 84px`, valor com `flex: 0 1 36px`, trilha da barra com `flex: 1; min-width: 0;`).
   - **Fraquezas, resistências e imunidades:** blocos empilhados; cada faixa tem título e lista de chips em `display: flex; flex-wrap: wrap; gap: var(--espaco-sm);`.

5. **Favoritos (`#/favoritos`), Sobre (`#/sobre`), 404 e Estados:**
   - **Favoritos:** mesma estrutura de card horizontal de Resultados, com botão `Remover` no canto direito (com `event.stopPropagation()` para não abrir o Detalhe ao remover).
   - **Banner offline (A4):** faixa no topo do `#app` em `--cor-aviso-fundo` com texto `"Sem internet · dados de HHhMM"`.
   - **Carregando / Erro / Vazio / Sem internet (A3):** card centralizado em coluna (`display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--espaco-md);`), com botão `"Tentar de novo"` (erro/sem internet) ou `"Limpar filtros"` (vazio em Resultados).

---

## 5. Exemplo pronto de `tokens.css` (referência para a frente B)

```css
:root {
  /* Cores principais */
  --cor-primaria: #DC2626;
  --cor-primaria-escura: #B91C1C;
  --cor-primaria-suave: #FEE2E2;
  --cor-fundo: #F7F8FA;
  --cor-superficie: #FFFFFF;
  --cor-superficie-hover: #F3F4F6;
  --cor-texto: #111827;
  --cor-texto-secundario: #4B5563;
  --cor-texto-suave: #6B7280;
  --cor-texto-inverso: #FFFFFF;
  --cor-borda: #E5E7EB;

  /* Estados */
  --cor-aviso-fundo: #FEF3C7;
  --cor-aviso-texto: #92400E;
  --cor-aviso-borda: #FDE68A;
  --cor-erro-fundo: #FEE2E2;
  --cor-erro-texto: #991B1B;
  --cor-sucesso: #16A34A;

  /* Tipos Pokémon */
  --tipo-water: #2563EB;
  --tipo-fire: #EA580C;
  --tipo-electric: #CA8A04;
  --tipo-grass: #16A34A;
  --tipo-rock: #78716C;
  --tipo-ground: #B45309;
  --tipo-ice: #0284C7;
  --tipo-flying: #6366F1;
  --tipo-dragon: #4F46E5;
  --tipo-poison: #9333EA;
  --tipo-fighting: #B91C1C;
  --tipo-psychic: #DB2777;
  --tipo-bug: #65A30D;
  --tipo-ghost: #5B21B6;
  --tipo-dark: #374151;
  --tipo-steel: #475569;
  --tipo-fairy: #EC4899;
  --tipo-normal: #6B7280;

  /* Tipografia */
  --fonte-familia: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --fonte-titulo: 1.375rem;
  --fonte-secao: 1rem;
  --fonte-corpo: 0.875rem;
  --fonte-legenda: 0.75rem;

  /* Espaçamentos */
  --espaco-xs: 4px;
  --espaco-sm: 8px;
  --espaco-md: 12px;
  --espaco-lg: 16px;
  --espaco-xl: 24px;

  /* Bordas e sombras */
  --raio-sm: 8px;
  --raio-md: 12px;
  --raio-pill: 999px;
  --sombra-card: 0 1px 3px rgba(17, 24, 39, 0.08);
  --sombra-dropdown: 0 4px 12px rgba(17, 24, 39, 0.12);
}
```
