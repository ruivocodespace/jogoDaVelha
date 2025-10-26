// --------------
// ESTADO INICIAL DO JOGO
// --------------

let tabuleiro = ['', '', '', '', '', '', '', ''];
let jogadorAtual = '';
let jogadorAtivo = false;

//Elementos da página (html)

const tabuleiroDiv = document.getElementById('tabuleiro');
const message = document.getElementById('message');
const botaoReiniciar = document.getElementById('escolher-simbolo');

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
  jogadorAtual = jogadorHumano;
  jogoAtivo = true;
  mensagem.textContent = `Você é ${jogadorHumano}. Sua vez!`;
}

