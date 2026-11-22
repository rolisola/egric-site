import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Chave secreta de TESTE do Turnstile (sempre aprova) — usada só no `yarn dev`
const TURNSTILE_SECRET_TESTE = '1x0000000000000000000000000000000AA'

/*
 * Em desenvolvimento, executa functions/api/contato.js (Cloudflare Pages Function)
 * dentro do próprio servidor do Vite, para testar o formulário com `yarn dev`.
 */
function contatoApiDev(mode) {
  return {
    name: 'contato-api-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/contato', async (req, res) => {
        try {
          const partes = []
          let tamanho = 0
          for await (const parte of req) {
            tamanho += parte.length
            if (tamanho > 64 * 1024) break
            partes.push(parte)
          }

          const headers = new Headers()
          for (const [nome, valor] of Object.entries(req.headers)) {
            if (typeof valor === 'string' && !nome.startsWith(':')) headers.set(nome, valor)
          }
          headers.set('CF-Connecting-IP', req.socket.remoteAddress || '127.0.0.1')

          const request = new Request(`http://${req.headers.host}${req.originalUrl}`, {
            method: req.method,
            headers,
            body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(partes),
          })

          const arquivos = loadEnv(mode, process.cwd(), '')
          const env = {
            ...arquivos,
            TURNSTILE_SECRET_KEY: arquivos.TURNSTILE_SECRET_KEY || TURNSTILE_SECRET_TESTE,
            CONTATO_DEV: 'true',
          }

          const { onRequest } = await server.ssrLoadModule('/functions/api/contato.js')
          const resposta = await onRequest({ request, env })

          res.statusCode = resposta.status
          resposta.headers.forEach((valor, nome) => res.setHeader(nome, valor))
          res.end(Buffer.from(await resposta.arrayBuffer()))
        } catch (erro) {
          console.error('[contato-api-dev]', erro)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false, erro: 'Erro interno.' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), contatoApiDev(mode)],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1'
    ]
  }
}))
