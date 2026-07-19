## Aplicar nova logo (versão redonda)

Substituir a logo atual pela nova versão redonda enviada em anexo, mantendo header, footer e favicon sincronizados.

### Passos

1. **Upload do novo asset**
   - Rodar `lovable-assets create` a partir de `/mnt/user-uploads/Logo_redonda_com_fundo_branco.png` gerando um novo `src/assets/logo-faz-consorcio-round.png.asset.json`.
   - Remover o pointer antigo `src/assets/logo-faz-consorcio.png.asset.json` via `lovable-assets delete` (garante limpeza no CDN).

2. **Atualizar componente `Logo`**
   - Trocar o import em `src/components/site/Logo.tsx` para o novo asset.
   - Como a logo agora é circular (proporção 1:1), ajustar dimensões padrão para ficarem bem no header/footer (ex.: `size` em altura ~56px no header, ~96px no footer) sem distorcer.

3. **Header (`Header.tsx`)**
   - Ajustar o tamanho passado ao `<Logo />` para caber bem no header fixo (a versão redonda precisa de menos largura que a horizontal anterior).

4. **Footer (`Footer.tsx`)**
   - Ajustar o tamanho do `<Logo />` para a nova proporção quadrada.

5. **Favicon**
   - Substituir `public/favicon.png` pelo novo arquivo (a versão redonda funciona melhor como favicon).
   - `src/routes/__root.tsx` já referencia `/favicon.png`, sem mudanças.

### Arquivos afetados
- `src/assets/logo-faz-consorcio-round.png.asset.json` (novo)
- `src/assets/logo-faz-consorcio.png.asset.json` (removido)
- `src/components/site/Logo.tsx`
- `src/components/site/Header.tsx`
- `src/components/site/Footer.tsx`
- `public/favicon.png` (substituído)
