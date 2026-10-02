# Ativar WhatsApp real e renomear a página "Como Funciona"

## O que muda

**1. WhatsApp oficial em todo o site**
O número fica em um único lugar (`src/lib/site.ts`). Ao trocá-lo para **5581997090029**, todos os botões e ícones de WhatsApp passam a abrir a conversa certa: cabeçalho, hero, faixa de destaque, cards de modalidade, formulário de contato, botão flutuante e as mensagens que já citam cada modalidade (imóvel, automóvel, moto, serviço, caminhão).

**2. URL "Como Funciona" passa a ser `/como-funciona-consorcio`**
- O arquivo da página é renomeado e o endereço interno atualizado.
- O item do menu (desktop e celular), o link do rodapé e a entrada do mapa do site passam a apontar para a nova URL — o rótulo no menu continua "Como Funciona".
- O sitemap passa a listar `/como-funciona-consorcio`.
- A URL antiga nunca esteve no ar publicado, então a troca é limpa, sem página duplicada nem redirecionamento.

**3. Telefone do rodapé**
O texto de exemplo "(XX) XXXXX-XXXX" é substituído por **(81) 99709-0029**, mantendo o mesmo ícone e o mesmo estilo. O e-mail `contato@fazconsorcio.com.br` permanece como está.

Nada mais é tocado: home, visual, cores, logo, demais páginas e o conteúdo das páginas de consórcio continuam iguais.

## Validação

- Checagem de tipos e build sem erros.
- `/como-funciona-consorcio` responde normalmente e `/como-funciona` deixa de existir.
- Menu (desktop e celular), rodapé e mapa do site levando à nova URL.
- Um link de WhatsApp copiado e conferido: abre `wa.me/5581997090029` com a mensagem correta.

## Detalhes técnicos

- `src/lib/site.ts`: `WHATSAPP_NUMBER = "5581997090029"`; `NAV_LINKS` com `to: "/como-funciona-consorcio"`.
- `src/routes/como-funciona.tsx` → `src/routes/como-funciona-consorcio.tsx`, com o path de `createFileRoute` atualizado.
- `src/routes/sitemap[.]xml.ts`: entrada renomeada (mantendo `changefreq: "weekly"` e `priority: "0.8"`).
- `src/components/site/Footer.tsx`: linha do telefone com `(81) 99709-0029`.
- O `id="como-funciona"` da seção dentro da home não é alterado — é apenas a âncora de rolagem da própria página.
