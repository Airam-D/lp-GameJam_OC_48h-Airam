# Relatório de acessibilidade

## Antes
- Nota do Lighthouse (mobile): 83
- Problemas apontados pelo Lighthouse:
  - Buttons do not have an accessible name
  - Background and foreground colors do not have a sufficient contrast ratio
- Problemas apontados pelo axe:
  - Buttons must have discernible text (botão de fechar)
  - Elements must meet minimum color contrast ratio thresholds (link de inscrições)
- Problemas encontrados no teste do teclado:
  - Nenhum problema crítico encontrado na navegação por Tab/Enter.

## Depois
- Nota do Lighthouse (mobile): 100
- O que foi corrigido:
  - Ajustado o contraste do `--color-destaque` no CSS para satisfazer a taxa mínima de 4.5:1.
  - Inclusão de `aria-label` e `aria-expanded` nos botões interativos do cabeçalho.
  - Implementação completa do componente FAQ utilizando os padrões ARIA (`aria-expanded`, `aria-controls` e `hidden`).
  - Adicionado suporte a propriedades `autoComplete` e alertas estruturados `role="status"` no fluxo do formulário.
- O que ainda não está bom (e por quê):
  - Tudo está em conformidade com o escopo atual do projeto, alcançando nota máxima nas ferramentas.

## Um problema que a ferramenta NÃO apontou e eu encontrei
- O vídeo de plano de fundo do Hero não possui controles visíveis de pausa/reprodução. Para usuários com distúrbios de atenção ou vestibulopatias, animações automáticas longas e sem controle imediato podem causar desconforto ou distração severa.

---

## Ticket de saída (individual)

1. Sua página tirou 100 no Lighthouse. Isso garante que ela é acessível? Por quê?
Não garante. Ferramentas automatizadas capturam apenas uma fração lógica dos problemas de acessibilidade de uma interface (como a presença de atributos ou cores calculadas). Elas são incapazes de analisar critérios de experiência humana real, como se o texto alternativo de uma imagem descreve com coerência o seu conteúdo ou se a estrutura de navegação do site é logicamente compreensível.

2. Cite uma correção de hoje e quem ela ajuda (que tipo de pessoa, em que situação).
A correção do contraste de cor ajustando o laranja das chamadas de ação. Essa modificação ajuda diretamente pessoas com baixa visão, daltonismo (como a protanopia) ou indivíduos expostos a situações cotidianas desfavoráveis, como telas de celulares sob incidência direta de luz solar intensa, facilitando a legibilidade e o uso fluido da interface.