# Inserir logo da Faz Consórcio no site

## Objetivo
Substituir os logotipos placeholder ("F" em badge) pela logo oficial enviada e configurá-la como favicon.

## O que será feito

### 1. Publicar a logo como asset
- Usar o CLI `lovable-assets` para fazer upload de `user-uploads://Logo_Faz_Consorcio.png`.
- Gerar o ponteiro `src/assets/logo-faz-consorcio.png.asset.json`.

### 2. Criar componente de logo reutilizável
- Criar `src/components/site/Logo.tsx` que importa o asset e renderiza a imagem da logo.
- Permitir variantes de cor/tamanho via props (`header`, `footer`, `size`).

### 3. Atualizar Header
- Substituir o badge "F" + texto "Faz Consórcio" pelo componente `Logo`.
- Manter o link para `#inicio` e a responsividade.
- Garantir que a logo fique visível tanto no topo transparente quanto no header scrollado.

### 4. Atualizar Footer
- Substituir o badge "F" + texto "Faz Consórcio" pelo componente `Logo`.
- Manter a grid e os links rápidos.

### 5. Configurar favicon
- Copiar a logo para `public/favicon.png` (como o arquivo já tem fundo branco, servirá bem como favicon).
- Atualizar `src/routes/__root.tsx` para usar `/favicon.png` no `head().links`.
- Remover o favicon padrão `public/favicon.ico`.

### 6. Verificar
- Rodar o build para garantir que não há erros de importação.
- Capturar screenshot do header e footer para confirmar que a logo aparece corretamente.

## Arquivos que serão alterados
- `src/assets/logo-faz-consorcio.png.asset.json` (novo)
- `src/components/site/Logo.tsx` (novo)
- `src/components/site/Header.tsx`
- `src/components/site/Footer.tsx`
- `src/routes/__root.tsx`
- `public/favicon.png` (novo)
- `public/favicon.ico` (removido)

## Notas técnicas
- O upload será feito via Lovable Assets para manter o repositório leve.
- A logo será renderizada como `<img>` com `alt="Faz Consórcio"`.
- O favicon usará a mesma imagem PNG, evitando duplicar assets.
