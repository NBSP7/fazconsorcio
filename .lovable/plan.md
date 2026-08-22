# Revisão final: arquitetura multipágina, SEO técnico, GEO e conversão

Reestruturação completa do site atual da Faz Consórcio, preservando identidade visual, Home em `/`, componentes existentes e o stack TanStack Start.

## 1. Nova arquitetura de rotas

Criar as páginas:

```text
/                                        (Home, preservada visualmente)
/consorcio-de-imovel
/consorcio-de-veiculo
/consorcio-de-moto
/consorcio-de-caminhao
/consorcio-de-aviao
/consorcio-de-lancha
/consorcio-de-maquinas-e-equipamentos
/consorcio-para-investidores
/como-funciona-o-consorcio
/sobre
/simulador
/perguntas-frequentes
/contato
/politica-de-privacidade
/termos-de-uso
/blog  e  /blog/$slug
```

Rotas antigas removidas (conforme sua escolha): `/consorcios`, `/solucoes`, `/como-funciona`, `/simule-agora`, `/faq`, `/fale-conosco`, `/mapa-do-site`, `/parceiros`, `/politica-de-cookies`, `/avisos-legais`.

## 2. Menu e navegação

- Desktop: Início | Consórcios ▾ | Investidores | Como Funciona | Sobre | Blog | Contato | botão **SIMULAR CONSÓRCIO** (→ `/simulador`).
- Dropdown Consórcios: Imóvel, Veículo, Moto, Caminhão, Avião, Lancha, Máquinas e Equipamentos.
- Mobile: mesma arquitetura com accordion acessível (teclado, `aria-expanded`, foco visível).
- Rodapé reorganizado com todas as modalidades, institucional, legal e contato.
- Breadcrumbs visíveis em todas as páginas internas.

## 3. Conteúdo orientado a IA (GEO)

Cada página comercial segue a mesma estrutura: hero com H1 específico + resposta objetiva nas primeiras ~100 palavras, depois H2 em forma de pergunta real ("Consórcio de imóvel tem juros?", "Como acontece a contemplação?", "Posso dar lance?"), passos de funcionamento, para quem é indicado, o que pode ser adquirido, carta de crédito, contemplação, sorteio e lance, custos (sem juros de financiamento, mas com taxa de administração e encargos contratuais), vantagens e pontos de atenção, consórcio x financiamento, exemplos conceituais sem números, FAQ da modalidade e CTA para `/simulador` e WhatsApp.

Regras de conteúdo respeitadas: somente cotas não contempladas; nenhuma administradora, taxa, prazo, parcela, CNPJ, endereço, depoimento ou número de clientes inventado; nenhuma promessa de contemplação, retorno ou "melhor/menor taxa".

- `/consorcio-de-imovel` inclui seção sobre uso de determinadas cartas de crédito imobiliário para imóvel nos EUA/Portugal apresentada como possibilidade condicionada às regras da administradora e ao contrato, com consórcio contratado e pago em reais — nunca como regra geral.
- `/como-funciona-o-consorcio` será o conteúdo mais completo: grupo, administradora, cota, assembleia, carta de crédito, contemplação, sorteio, lance e lance embutido, taxa de administração, fundo de reserva, seguro, atualização de crédito/parcelas, análise de crédito, garantias, liberação da carta, aquisição do bem e cuidados antes de contratar.
- `/sobre` responde explicitamente o que é a Faz Consórcio, o que faz, modalidades, como é o atendimento, como pedir simulação e como identificar canais oficiais.
- `/perguntas-frequentes` por categorias: Geral, Contemplação, Lances, Carta de Crédito, Pagamentos, Imóveis, Veículos, Caminhões, Aeronaves/Embarcações, Análise de Crédito.
- Caixa "Informação importante" nas páginas educativas reforçando que condições variam por administradora, grupo e contrato, com referência ao Banco Central quando houver afirmação regulatória.

## 4. Blog / central de conhecimento

`/blog` como "Conteúdos e Guias sobre Consórcio", com `/blog/$slug` e cinco artigos iniciais originais: como funciona o consórcio; consórcio ou financiamento; como funciona o lance; o que é carta de crédito; como usar consórcio para construir patrimônio. Cada artigo: metadados únicos, H1, resumo-resposta inicial, autor "Equipe Faz Consórcio", datas de publicação/atualização configuráveis, breadcrumbs, links internos para páginas comerciais, FAQ e `/simulador`, e schema BlogPosting.

## 5. Simulador com captura real de lead

Ativar o Lovable Cloud (banco de dados integrado) e criar a tabela de leads. O formulário em `/simulador` coleta modalidade, valor aproximado da carta, aporte mensal pretendido, nome, WhatsApp, e-mail, cidade/UF e ciência da Política de Privacidade (validação com Zod), grava o lead e só então mostra confirmação; em seguida oferece continuar no WhatsApp com mensagem estruturada identificando a modalidade. UTM/gclid/fbclid capturados e salvos junto ao lead. A página deixa claro que é solicitação de simulação, não cálculo automático.

## 6. SEO técnico

- `lang="pt-BR"`, 404 e telas de erro em português, nenhum texto/metadado em inglês nem "Lovable App".
- Title e meta description únicos por rota; um H1 por página; hierarquia H2/H3 correta.
- Constante única `SITE_URL` para canonical e `og:url` absolutos, Open Graph e Twitter Card por página.
- Imagem OG oficial da marca (gerada a partir da logo), substituindo o screenshot de preview; removida do `__root` e definida por página.
- JSON-LD: Organization na Home, BreadcrumbList nas internas, AboutPage + Organization em `/sobre`, Article em `/como-funciona-o-consorcio`, BlogPosting nos artigos. Sem Product, sem AggregateRating/Review.
- Sitemap XML com URLs absolutas de todas as rotas e artigos; `robots.txt` com `Allow: /`, referência ao sitemap e sem bloquear OAI-SearchBot.
- Sem `noindex` nas páginas comerciais e no blog.

## 7. Home

Visual preservado. Cards de modalidades apontando para as novas páginas, incluindo Moto, Avião, Lancha e Investidores. Seção de depoimentos e indicadores fictícios removida (conforme sua escolha). Todos os CTAs funcionais.

## 8. Config centralizada (dados pendentes)

Um único arquivo de configuração de marca/contato com WhatsApp, e-mail, Instagram, NAP e `sameAs`. Como esses dados estão pendentes, ficam marcados como não configurados: o número placeholder deixa de ser exibido como contato real e os blocos de contato mostram o canal disponível sem inventar dados. Ao preencher a config, contato, WhatsApp e schema local passam a funcionar automaticamente.

## 9. LGPD, termos, performance e acessibilidade

- `/politica-de-privacidade`: dados coletados, finalidade, formulários, cookies/analytics apenas se usados, compartilhamento, segurança, direitos do titular e contato.
- `/termos-de-uso`: caráter informativo, condições sujeitas à administradora/contrato, sem garantia de contemplação, propriedade intelectual, links externos, limitações.
- Lazy loading abaixo da dobra, hero priorizado como LCP, `width`/`height` e alt descritivo, foco/teclado, aria-labels, `prefers-reduced-motion`, contraste e prevenção de CLS.
- Camada de eventos sem vendor lock-in para: clique WhatsApp, clique CTA, início e envio do simulador, clique por modalidade — sem IDs inventados.

## Detalhes técnicos

- Rotas via `createFileRoute` com paths batendo com o nome do arquivo; `routeTree.gen.ts` regenerado automaticamente.
- Conteúdo das modalidades e artigos em módulos de dados tipados (`src/content/*`), renderizados por componentes de página compartilhados para consistência visual e manutenção.
- Persistência do lead via server function do TanStack Start com validação Zod no cliente e no servidor; tabela com RLS e grants (insert público para o formulário, leitura apenas via service role).
- Validação final: build e typecheck limpos, todas as rotas respondendo, links e imports íntegros, menu desktop/mobile, responsividade, sitemap/robots válidos, JSON-LD válido e console sem erros.

## Dependente de dados reais do cliente

Domínio oficial, WhatsApp, e-mail, Instagram, CNPJ/endereço (se aplicável) e administradora parceira, caso seja divulgada.
