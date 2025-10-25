🧾 REQUISITOS DO PROJETO

Projeto: Jogo da Velha (versão web)
Tecnologias: HTML5, CSS3, JavaScript puro (sem frameworks)
Versão inicial: v1.0

🎯 1. Objetivo geral

Desenvolver uma aplicação web interativa do Jogo da Velha (Tic-Tac-Toe), permitindo partidas entre dois jogadores humanos no mesmo dispositivo, com interface intuitiva, responsiva e funcionamento direto no navegador (sem servidor backend).

🧩 2. Objetivos específicos

Implementar as regras clássicas do jogo (X e O alternando turnos).

Identificar automaticamente vitória, empate e final de jogo.

Exibir mensagens de status (vez do jogador, vitória ou empate).

Permitir reiniciar a partida sem recarregar a página.

Garantir boa experiência visual e de usabilidade (UI/UX simples).

Suportar navegação em dispositivos móveis (responsividade).

🧱 3. Requisitos funcionais (RF)

🔹 São as funções que o sistema deve ter — o que o jogo faz.

Código	Requisito funcional	Descrição
RF01	Exibir tabuleiro 3x3	O sistema deve renderizar um grid de 3x3 células.
RF02	Registrar jogadas	Cada célula deve aceitar apenas uma jogada por partida.
RF03	Alternar jogadores	O sistema deve alternar entre os jogadores X e O a cada jogada.
RF04	Detectar vitória	O sistema deve identificar automaticamente quando um jogador vence.
RF05	Detectar empate	O sistema deve identificar quando todas as casas são ocupadas sem vencedor.
RF06	Mostrar mensagens	O sistema deve exibir mensagens informando o status da partida (vez, vitória, empate).
RF07	Reiniciar jogo	O usuário deve poder reiniciar o jogo sem atualizar a página.
RF08	Suporte mobile	O jogo deve ajustar automaticamente o layout para telas menores.
RF09	Jogabilidade via clique	O jogador deve conseguir jogar clicando nas células.
RF10	Jogabilidade via teclado (opcional avançado)	Permitir jogar usando teclado (Tab/Enter).
⚙️ 4. Requisitos não funcionais (RNF)

🔹 São as características de qualidade e comportamento do sistema.

Código	Requisito não funcional	Descrição
RNF01	Usabilidade	Interface intuitiva, clara e com feedback visual imediato.
RNF02	Performance	O jogo deve carregar em menos de 2 segundos em navegadores modernos.
RNF03	Compatibilidade	Deve funcionar nos principais navegadores (Chrome, Edge, Firefox, Safari).
RNF04	Responsividade	Layout adaptável a telas de celular, tablet e desktop.
RNF05	Acessibilidade	Deve ter contraste adequado e ser jogável por teclado.
RNF06	Manutenibilidade	Código separado em módulos (index.html, css/style.css, js/app.js).
RNF07	Portabilidade	Deve funcionar offline (sem necessidade de servidor).
RNF08	Segurança	Não deve permitir execução de código malicioso nem sobrescrever DOM indevido.
🎨 5. Requisitos de interface (UI)
Código	Requisito de interface	Descrição
UI01	Layout centralizado	O tabuleiro e botões devem estar centralizados na página.
UI02	Feedback visual	Cada célula deve ter destaque ao passar o mouse (hover).
UI03	Paleta de cores	Utilizar tons de roxo e branco (ex: #490066, #A300FF).
UI04	Tipografia legível	Fonte padrão sem serifa (ex: Arial ou Poppins).
UI05	Botão de reinício	Botão destacado abaixo do tabuleiro com efeito de hover.
🧠 6. Requisitos de lógica de jogo
Código	Descrição
LJ01	O tabuleiro deve ser um array de 9 posições.
LJ02	Cada jogada deve atualizar o estado interno (['X', 'O', ...]).
LJ03	As condições de vitória devem ser baseadas nas combinações de índices: [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6].
LJ04	O jogo termina quando há vitória ou todas as posições ocupadas.
LJ05	Após o término, novas jogadas são bloqueadas até reiniciar.
🧭 7. Requisitos futuros (para próximas versões)

(Não obrigatórios agora, mas fáceis de adicionar depois.)

RF11: Escolha inicial de símbolo (X ou O).

RF12: Placar persistente (número de vitórias).

RF13: Modo solo (contra IA simples).

RF14: Animações de vitória (linha destacada).

RF15: Tema claro/escuro.

🧰 8. Requisitos técnicos
Item	Descrição
Linguagens	HTML5, CSS3, JavaScript ES6
Ambiente	Navegador web moderno (sem servidor backend)
Editor sugerido	VS Code
Controle de versão	Git e GitHub
Deploy	GitHub Pages / Netlify / Vercel
Estrutura	/index.html, /css/style.css, /js/app.js, /assets/*
🧪 9. Critérios de aceitação (testes básicos)
Teste	Condição	Resultado esperado
Jogador X clica em célula vazia	A célula mostra "X"	✅ Jogada registrada
Jogador O joga depois	A célula mostra "O"	✅ Alternância correta
Jogador completa linha	Mensagem “Jogador X venceu!” aparece	✅ Vitória detectada
Tabuleiro cheio sem vitória	Mensagem “Empate!” aparece	✅ Empate detectado
Botão reiniciar clicado	Tabuleiro limpa e reinicia jogo	✅ Reinício funcional
📦 10. Entregável final

Um site estático que:

Rode localmente abrindo o arquivo index.html;

Seja publicado online via GitHub Pages ou Netlify;

Tenha design limpo, responsivo e código organizado em pastas.