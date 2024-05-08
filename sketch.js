let palavra; // cria a variavel GLOBAL palavra


function palavraAleatoria() { //cria função palavraAleatoria
  let palavras = ["Tecnologia", "Javascript", "Programação", "Alura", "Robótica", "P5JS", "Escola"]; //cria uma variável tipo array palavras
  
  
  return random(palavras); //retorna a palavra sorteada para a chamada da função
    
}

function setup() {
  createCanvas(600, 400); //cria a tela e define tamanho (x,y)(largura,altura)
  
  palavra = palavraAleatoria(); //chama a função palavraAleatoria()
  
}

function inicializarCores() { //cria a função
  background("lightblue"); //core de fundo de tela
  fill("black"); //cor da caneta/letra
  textSize(64); //tamanho da fonte
  textAlign(CENTER, CENTER); //alinhamento do texto  
  
}

function draw() {
  inicializarCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  if(quantidade < 1){
    palavra = palavraAleatoria();
  }
  let parcial = palavra.substring(0,quantidade)
  text(parcial,300,200)
  }  