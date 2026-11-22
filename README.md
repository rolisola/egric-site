# EGRIC Site

Site institucional para o EGRIC (Espeleo Grupo Rio Claro) desenvolvido em React + Vite.

## 🦇 Sobre o Projeto

Site oficial do Espeleo Grupo Rio Claro, uma organização dedicada à exploração, pesquisa e conservação do patrimônio espeleológico brasileiro.

## ⚡ Tecnologias

Este projeto utiliza:

- **[React](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[Vite](https://vite.dev/)** - Build tool ultrarrápido
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones para React
- **[Yarn](https://yarnpkg.com/)** - Gerenciador de pacotes

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- Yarn 4+

### Instalação

Clone o repositório:
```bash
git clone https://github.com/rolisola/egric-site.git
cd egric-site
```

Instale o Yarn 4+:
```bash
corepack enable
corepack prepare yarn@stable --activate
```
Instale as dependências:
```bash
yarn install
```

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn dev`

Executa o aplicativo em modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

A página recarrega automaticamente quando você faz alterações.\
Você também verá erros de lint no console.

### `yarn build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem hashes.\
Seu aplicativo está pronto para ser implantado!

### `yarn preview`

Visualiza a versão de produção localmente.\
Execute após `yarn build` para testar a build de produção.

## 🔧 Configuração

### Vite

A configuração do Vite está em `vite.config.js`. Este projeto usa:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Plugin oficial React para Vite
- **Fast Refresh** - HMR (Hot Module Replacement) instantâneo

### ESLint

A configuração do ESLint está em `eslint.config.js`. Para expandir a configuração, consulte a [documentação do ESLint](https://eslint.org/docs/latest/).

## 🌐 Deploy

### Cloudflare Pages (Recomendado)

Este projeto está configurado para deploy no Cloudflare Pages:

```yaml
Build command: yarn build
Build output directory: build
Node version: 18
```

## ✉️ Formulário de contato

O card de contato da página inicial (`src/components/contato`) envia para `POST /api/contato`,
uma [Cloudflare Pages Function](https://developers.cloudflare.com/pages/functions/) em `functions/api/contato.js`.
As regras de validação ficam em `src/shared/contato.js` e valem para o navegador e para o servidor.

**Proteções:** só aceita POST/JSON vindo do próprio site (header `Origin`), corpo de no máximo 10 KB,
5 envios por IP por hora, campo *honeypot*, tempo mínimo de preenchimento de 3 s,
[Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) verificado no servidor,
validação e limpeza de todos os campos (incluindo caracteres invisíveis e limite de links) e e-mail só em texto puro.

### Testar localmente

`yarn dev` já executa a função dentro do servidor do Vite, com as chaves de teste do Turnstile.
Enquanto `CONTATO_ENVIAR_EMAIL` não for `true`, **nenhum e-mail é enviado**: a mensagem aparece no terminal do `yarn dev`.

### Variáveis (Cloudflare Pages → Settings → Variables and Secrets)

Veja `.env.example`. Para testar localmente com outros valores, copie para `.env.local`.

| Variável | Onde | Descrição |
| --- | --- | --- |
| `VITE_TURNSTILE_SITE_KEY` | build | Site key do Turnstile |
| `TURNSTILE_SECRET_KEY` | secret | Secret key do Turnstile (sem ela, o envio é recusado) |
| `CONTATO_ENVIAR_EMAIL` | variável | `true` para enviar de verdade; qualquer outro valor = modo teste |
| `RESEND_API_KEY` | secret | Chave da API do [Resend](https://resend.com) |
| `CONTATO_EMAIL_REMETENTE` | variável | Remetente num domínio verificado no Resend |
| `CONTATO_EMAIL_DESTINO` | variável | Padrão: `egric.espeleogrupo@gmail.com` |
| `ALLOWED_ORIGINS` | variável | Opcional, origens aceitas separadas por vírgula |

Para o limite por IP valer entre todos os servidores da Cloudflare, crie um namespace KV e vincule-o
ao projeto com o nome **`CONTATO_RATE_LIMIT`** (Settings → Bindings). Sem ele, o limite é por instância.

Para testar num deploy de preview, use as [chaves de teste do Turnstile](https://developers.cloudflare.com/turnstile/troubleshooting/testing/)
(`1x00000000000000000000AA` / `1x0000000000000000000000000000000AA`).

### Outras Plataformas

O projeto também pode ser hospedado em:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📚 Saiba Mais

Para aprender mais sobre as tecnologias utilizadas:

- [Documentação do Vite](https://vite.dev/guide/)
- [Documentação do React](https://react.dev/)
- [Guia de Deploy do Vite](https://vite.dev/guide/static-deploy.html)

### Progressive Web App (PWA)

Este projeto inclui um `manifest.json` para funcionalidades PWA básicas.\
Para recursos avançados de PWA, consulte o plugin [vite-plugin-pwa](https://vite-pwa-org.netlify.app/).

### Estrutura do Projeto

```txt
egric-site/
├── public/              # Arquivos estáticos
│   ├── manifest.json
│   └── favicon.ico
├── src/                 # Código-fonte
│   ├── components/      # Componentes React
│   │   ├── Header/
│   │   └── Footer/
│   ├── pages/          # Páginas
│   ├── assets/         # Imagens e recursos
│   ├── App.js          # Componente principal
│   └── index.js        # Ponto de entrada
├── index.html          # Template HTML
├── vite.config.js      # Configuração do Vite
└── package.json        # Dependências
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto pertence ao EGRIC - Espeleo Grupo Rio Claro.

---

**Desenvolvido com ♥ para a comunidade espeleológica brasileira** 🦇
