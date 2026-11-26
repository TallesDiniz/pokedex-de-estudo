import { defineConfig } from 'vite'

// Mesma configuração do KiOferta, sem o plugin do Tailwind (framework de CSS é proibido).
export default defineConfig({
  // O código do app fica em src/ (index.html está lá)
  root: './src',
  build: {
    // O build sai em dist/, na raiz do projeto (o Capacitor vai usar essa pasta)
    outDir: '../dist',
    emptyOutDir: true,
  },
})
