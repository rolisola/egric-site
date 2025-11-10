# Cartilhas do EGRIC

Esta pasta deve conter os arquivos PDF das cartilhas educativas do EGRIC.

## Arquivos esperados:

- `cartilha-seguranca.pdf` - Cartilha de Segurança em Cavernas
- `cartilha-equipamentos.pdf` - Cartilha de Equipamentos
- `cartilha-conservacao.pdf` - Cartilha de Conservação
- `cartilha-iniciantes.pdf` - Cartilha para Iniciantes

## Como adicionar os PDFs:

1. Adicione os arquivos PDF nesta pasta
2. Os nomes dos arquivos devem corresponder aos listados acima
3. O site carregará automaticamente os PDFs quando disponíveis

## Para habilitar a visualização:

No arquivo `/src/pages/Cartilhas/Cartilhas.jsx`, altere a propriedade `disponivel` de `false` para `true` para cada cartilha que tiver o PDF disponível:

```jsx
{
  id: 'seguranca',
  titulo: 'Cartilha de Segurança em Cavernas',
  // ... outras propriedades
  disponivel: true  // <- altere para true quando o PDF estiver disponível
}
```
