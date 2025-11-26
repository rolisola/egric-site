# React Headroom App

Projeto React 19 com Vite, React Headroom e React Router 7.

## 🚀 Tecnologias

- **React 19** - Biblioteca UI
- **Vite 7** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React Router 7** - Roteamento
- **React Headroom** - Header com scroll behavior
- **Node 24** - Runtime JavaScript
- **Yarn 4.11** - Gerenciador de pacotes

## 📦 Instalação

```bash
cd react-headroom-app
yarn install
```

## 🏃‍♂️ Executar

```bash
yarn dev
```

O projeto estará disponível em `http://localhost:5173`

## ✨ Funcionalidades

### Header com React Headroom

O header possui comportamento especial ao rolar a página:

- **Esconde ao rolar para baixo** - O header desaparece suavemente
- **Aparece ao rolar para cima** - O header reaparece ao detectar scroll up
- **Não aparece no topo** - O header só aparece após rolar um pouco (pinStart: 100px)
- **Transições suaves** - Animações CSS para entrada/saída

### Navegação

Três páginas com conteúdo longo para testar o comportamento do scroll:

- **Home** (`/`) - Página inicial
- **Sobre** (`/about`) - Informações sobre o projeto
- **Contato** (`/contact`) - Formulário de contato

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.tsx       # Componente Header com Headroom
│   └── Header.css       # Estilos do Header
├── pages/
│   ├── Home.tsx         # Página Home
│   ├── About.tsx        # Página Sobre
│   └── Contact.tsx      # Página Contato
├── App.tsx              # Componente principal com rotas
├── App.css              # Estilos globais da aplicação
└── index.css            # Estilos base
```

## ⚙️ Configuração do Headroom

O componente usa as seguintes props:

```tsx
<Headroom
  disableInlineStyles    // Permite usar apenas CSS customizado
  pinStart={100}         // Começa a detectar após 100px de scroll
  style={{...}}          // Posição fixa no topo
>
```

As classes CSS controlam o comportamento:

- `.headroom--unpinned` - Header escondido
- `.headroom--pinned` - Header visível
- `.headroom--scrolled` - Página foi rolada

## 🎨 Personalização

Para ajustar o comportamento do header, edite:

- **Distância de ativação**: Altere `pinStart` em `Header.tsx`
- **Velocidade da animação**: Ajuste `transition` em `Header.css`
- **Cores e estilo**: Modifique `.header` em `Header.css`

## 📝 Scripts

- `yarn dev` - Inicia servidor de desenvolvimento
- `yarn build` - Cria build de produção
- `yarn preview` - Preview do build de produção
- `yarn lint` - Executa linter

## 📄 Licença

MIT
