Ajustar o slogan, headline principal e substituir a logo pelo novo arquivo enviado.

## Alterações de texto

- **`src/components/site/Hero.tsx`**
  - Trocar o slogan (badge) de `Seu objetivo mais perto de você.` para `Seus Objetivos Mais Perto de Você!`.
  - Trocar a headline `<h1>` de `Realize seus sonhos com planejamento e inteligência financeira.` para `Construa Seu Patrimônio com Planejamento e Inteligência Financeira: Faz Consórcio, é Sem Juros, é Mais Barato!`.

- **`src/routes/index.tsx`**
  - Atualizar o campo `slogan` no JSON-LD schema de `Seu objetivo mais perto de você.` para `Seus Objetivos Mais Perto de Você!`.

## Alterações de logo

- **Upload do novo asset**
  - Enviar `user-uploads://Ultima_logo.png` para o CDN via `lovable-assets create`, gerando um novo `src/assets/logo-faz-consorcio.png.asset.json`.
  - Deletar o asset anterior `src/assets/logo-faz-consorcio-round.png.asset.json` via `lovable-assets delete`.

- **Atualizar referências**
  - Em `src/components/site/Logo.tsx`, apontar o import para o novo `.asset.json`.
  - Ajustar dimensões padrão se necessário (a nova logo também é redonda, então proporção 1:1 continua adequada).
  - Substituir `public/favicon.png` por uma cópia da nova logo redonda.

## Validação

- Executar build/typecheck para garantir que imports e JSX continuam válidos.
- Verificar visualmente no preview se slogan, headline e nova logo aparecem corretamente no header, footer e favicon.