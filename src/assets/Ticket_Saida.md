### 🎟️ Ticket de Saída

1. **Qual é a diferença entre um componente que recebe props e um que usa useState? Dê um exemplo da sua página para cada um.**
   * As **props** servem para carregar dados fixos enviados de fora para dentro do componente (como o `CartaoAtracao` que recebe as informações do mentor), enquanto o **useState** cria uma memória interna que guarda e atualiza ações do usuário na mesma tela (como o `Inscricao` que monitora as mudanças de texto do formulário e calcula o preço).

2. **Se amanhã o evento ganhar uma quinta atração, quais arquivos você precisa mudar?**
   * É necessário atualizar apenas o arquivo de dados **`src/data/evento.js`**, inserindo os dados do novo mentor dentro do array `mentores`, já que a nossa seção de atrações renderiza os elementos de forma automática usando o método `.map`.
