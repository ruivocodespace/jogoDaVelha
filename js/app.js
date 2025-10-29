// --------------
// ESTADO INICIAL DO JOGO
// --------------

let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorHumano = '';
let jogadorIA = '';
let jogoAtivo = false;


//Elementos da página (html)

const tabuleiroDiv = document.getElementById('tabuleiro');
const message = document.getElementById('message');
const botaoReiniciar = document.getElementById('reiniciar');
const botaoEscolher = document.getElementById('escolher-simbolo');

//----
//Printar tabuleiro
//----
function renderizarTabuleiro() {
    tabuleiroDiv.innerHTML = ''; //Limpa o conteúdo anterior
    tabuleiro.forEach((valor, i) => {
        const celula = document.createElement('div');
        celula.classList.add('celula');
        celula.textContent = valor;
        celula.addEventListener('click', () => jogar(i)); 
        tabuleiroDiv.appendChild(celula);
    });
}

//----
//Escolher simbolo
//----
function escolherSimbolo() {
  const escolha = prompt('Escolha X ou O:').toUpperCase();
  if (escolha !== 'X' && escolha !== 'O') return escolherSimbolo();

  jogadorHumano = escolha;
  jogadorIA = escolha === 'X' ? 'O' : 'X';
  jogoAtivo = true;

  message.textContent = `Você é ${jogadorHumano}. Sua vez!`;
  renderizarTabuleiro();

}
//----
// Função principal de clique
//----
function jogar(posicao) {
  if (!jogoAtivo || tabuleiro[posicao] !== '') return;
  jogarHumano(posicao);
}

//----
//Jogada humano
//----

function jogarHumano(posicao){
  tabuleiro[posicao] = jogadorHumano;
  renderizarTabuleiro();

  //verificar vitoria ou empate
  const resultado = verificarVitoria();
  if (resultado === 'empate'){
    message.textContent = 'Deu velha! Empate!';
    jogoAtivo = false;
    return;
  }
  if (resultado){
    message.textContent = 'Você venceu!';
    jogoAtivo = false;
    return;
  }
  setTimeout(jogarIA, 500); //atraso na jogada da ia para "humanizar"
}


function jogarIA(){
  if (!jogoAtivo) return;
  //escolhe a posocao
  const pos = escolherMelhorPosicao();
  
  if (pos === undefined) return; //nenhuma posicao disponivel
  tabuleiro[pos] = jogadorIA;
  renderizarTabuleiro();
  

  //verifica vitoria ou empate
  const resultado = verificarVitoria();
  if (resultado === 'empate'){
    message.textContent = 'Deu velha! Empate!';
    jogoAtivo = false;
    return;
  }
  if (resultado){
    message.textContent = 'IA venceu!';
    jogoAtivo = false;
    return;
  }

  message.textContent = 'Sua vez!';

}

function verificarVitoria(){
  const combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  //checar cada combinação

  for (let combo of combos){
    const [a,b,c] = combo;
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]){
      return true; //alguem ganhou
    }
  }

  //se nao ha celulas vazias, é empate
  if (!tabuleiro.includes('')) return 'empate';
  
  //se nao o jogo continua
  return false;
}

//jogada da maquina
function escolherMelhorPosicao(){
    //1. tentar vencer
    for (let i = 0; i < tabuleiro.length; i++){
        if(tabuleiro[i] === ''){
            tabuleiro[i] = jogadorIA;

            if(verificarVitoria() === true){
                tabuleiro[i] = ''; // CORREÇÃO 3: Resetar após o teste
                return i;
            }
            tabuleiro[i] = ''; // CORREÇÃO 4: Resetar após o teste
        }
    }

  //2. bloquear vitoria do jogador
  for(let i = 0; i < tabuleiro.length; i++){
    if(tabuleiro[i] === ''){
      tabuleiro[i] = jogadorHumano;
      if(verificarVitoria() === true){
        tabuleiro[i] = '';
        return i;
      }
      tabuleiro[i] = '';
    }
  }

  //3. escolher posicao aleatoria
  const vazias = [];
  for(let i = 0; i < tabuleiro.length; i++){
    if(tabuleiro[i] === '') vazias.push(i);
  }
  if (vazias.length === 0) return undefined;

  //retorna indicia aleatorio entre as celulas vazias
  return vazias[Math.floor(Math.random() * vazias.length)];
}

function reiniciarJogo(){
  tabuleiro = ['', '', '', '', '', '', '', '', '']; 
  jogadorHumano = '';
  jogadorIA = '';
  jogoAtivo = false;
  message.textContent = 'Escolha um símbolo para começar!';
  renderizarTabuleiro();
}

//----
//evento dos botoes
//----

botaoReiniciar.addEventListener('click', reiniciarJogo);
botaoEscolher.addEventListener('click', escolherSimbolo);

//----
//iniciar jogo
//----
renderizarTabuleiro();




