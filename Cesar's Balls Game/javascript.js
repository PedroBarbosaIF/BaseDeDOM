const barra = document.getElementById('barra');
const div = document.getElementById('caixa');
const botaoIniciar = document.getElementById('botaoIniciar');
let segurando = false;
let posiçãoY;
let distânciaBB;
let intervaloCriaBola;
let pausado = true;
let score = 0;

//função ABAIXO para mover a barra
barra.addEventListener('mousedown', (evento) => {
  segurando = true;
  posiçãoY = evento.clientY;/*clientY fornece a coordenada vertical do cliente dentro 
  da aplicacão em que o evento ocorreu.*/

  distânciaBB = barra.offsetTop; /*retorna a medida, em pixels, da distância do 
  elemento atual em relação ao topo do offsetParent.*/ 
});

document.addEventListener('mousemove', (evento) => {
  if (segurando == true && !pausado) {
    const offsetPosição = evento.clientY - posiçãoY;
    const novaPosição = distânciaBB + offsetPosição;

    const divAltura = div.offsetHeight;
    const barraAltura = barra.offsetHeight;

    if (novaPosição >= 0 && novaPosição <= divAltura - barraAltura) {
      barra.style.top = `${novaPosição}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  segurando = false;
});

//função ABAIXO para criar as bolas
function criarBola() 
{
  if (pausado) return;
  //para criação de bolas
  
  const bola = document.createElement('div');
  bola.classList.add('bola');
  bola.style.top = `${Math.random() * (div.offsetHeight - 20)}px`; // Posição aleatória no eixo Y
  div.appendChild(bola);
  moverBola(bola);
}

//Função ABAIXO para mover as bolas
function moverBola(bola) {
  let posição = 20; // Posição inicial da bola (esquerda)

  const intervalo = setInterval(() => {
    if (!pausado) {
      posição += 4;
      bola.style.left = `${posição}px`;

      const barraColide = barra.getBoundingClientRect();
      const bolaColide = bola.getBoundingClientRect();

      //verifica se a bola colidiu com a barra
      if (
        bolaColide.right >= barraColide.left &&
        bolaColide.top < barraColide.bottom &&
        bolaColide.bottom > barraColide.top
      ) {
        bola.remove(); // Remove a bola se colidir com a barra
        clearInterval(intervalo);
        score++
        document.getElementById('score').textContent = 'Score: ' + score;
      }

      //Remove a bola se ela ultrapassar a borda da div
      if (posição > div.offsetWidth) {
        bola.remove();
        clearInterval(intervalo);
      }
    }
  }, 20);
}

//cria uma nova bola a cada 3 segundos
function criarBolas() {
  intervaloCriaBola = setInterval(criarBola, 3000);
}

//pausa ou inicia o jogo
botaoIniciar.addEventListener('click', () => {
  pausado = !pausado;

  if (pausado == true) {
    botaoIniciar.textContent = 'Iniciar';
    clearInterval(intervaloCriaBola); // Pausa a criação de bolas
  } else {
    botaoIniciar.textContent = 'Pausar';
    criarBolas(); //reinicia a criação de bolas
  }
});

//inicia o jogo
criarBolas();
