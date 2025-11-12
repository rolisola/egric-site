# React 19 + Vite App

Este é um aplicativo React 19 criado com Vite, usando Yarn 4.11 e Node 24.11.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite 7** - Build tool moderna e rápida
- **React Router DOM 7.9.5** - Sistema de roteamento
- **Yarn 4.11** - Gerenciador de pacotes
- **Node 24.11** - Runtime JavaScript

## 📋 Funcionalidades

- ✅ Menu de navegação com 5 itens principais
- ✅ 2 menus dropdown (Services e Products)
- ✅ Sistema de rotas completo
- ✅ Scroll restoration automático
  - Volta ao topo ao clicar nos itens principais do navbar (Home, About, Contact)
  - **NÃO** volta ao topo ao clicar nos subitens dos dropdowns
- ✅ Design responsivo e moderno

## 🗂️ Estrutura do Projeto

```
react-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Componente de navegação
│   │   ├── Navbar.css          # Estilos do navbar
│   │   └── ScrollToTop.jsx     # Componente de scroll restoration
│   ├── pages/
│   │   ├── Home.jsx            # Página inicial
│   │   ├── About.jsx           # Página sobre
│   │   ├── Services.jsx        # Página de serviços
│   │   ├── ServiceWeb.jsx      # Web Development
│   │   ├── ServiceMobile.jsx   # Mobile Apps
│   │   ├── ServiceCloud.jsx    # Cloud Solutions
│   │   ├── Products.jsx        # Página de produtos
│   │   ├── ProductA.jsx        # Produto A
│   │   ├── ProductB.jsx        # Produto B
│   │   ├── ProductC.jsx        # Produto C
│   │   ├── Contact.jsx         # Página de contato
│   │   └── Page.css            # Estilos compartilhados das páginas
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos do app
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globais
```

## 🎯 Navegação

### Itens principais (com scroll to top):
1. **Home** - Página inicial
2. **About** - Sobre nós
3. **Contact** - Contato

### Dropdown: Services (sem scroll to top nos subitens):
- Web Development
- Mobile Apps
- Cloud Solutions

### Dropdown: Products (sem scroll to top nos subitens):
- Product A
- Product B
- Product C

## 🚀 Como executar

1. **Certifique-se de ter as versões corretas:**
   ```bash
   node --version  # v24.11.0
   yarn --version  # 4.11.0
   ```

2. **Instale as dependências:**
   ```bash
   cd react-app
   yarn install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```

4. **Abra o navegador em:**
   ```
   http://localhost:5173
   ```
   (ou outra porta se 5173 estiver ocupada)

## 🎨 Características do Design

- Navbar fixo no topo com fundo escuro
- Menu dropdown com animação suave
- Páginas com gradiente de fundo
- Cards de conteúdo com hover effects
- Design totalmente responsivo
- Transições suaves em todos os elementos

## 📝 Notas Técnicas

### Scroll Restoration
O componente `ScrollToTop.jsx` implementa a lógica customizada:
- Monitora mudanças de rota via `useLocation`
- Define uma lista de rotas que NÃO devem fazer scroll to top (subitens dos dropdowns)
- Para todas as outras rotas, executa `window.scrollTo(0, 0)`

### Dropdowns
- Fecham automaticamente ao clicar fora
- Fecham ao navegar para uma página
- Indicação visual de rota ativa
- Seta animada mostrando estado aberto/fechado

## 📦 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Cria a build de produção
- `yarn preview` - Preview da build de produção
- `yarn lint` - Executa o linter

## 🔧 Configuração

O projeto usa as configurações padrão do Vite com suporte a React 19. Todas as dependências estão configuradas no `package.json`.

---

Desenvolvido com ❤️ usando React 19 e Vite
