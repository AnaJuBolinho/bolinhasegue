let x = 100; // posição inicial do círculo
let y = 100;
let diametro = 50; // tamanho inicial do círculo
let corR = 255; // valor inicial da cor vermelha
let corG = 0; // valor inicial da cor verde
let corB = 0; // valor inicial da cor azul
let opacidade = 200; // valor inicial da opacidade

function setup() {
  createCanvas(400, 400); // cria um canvas de 400x400
}

function draw() {
  background(220); // fundo branco

  let distancia = dist(mouseX, mouseY, x, y);

  
  if (distancia < diametro / 2) {
    corR = random(255);
    corG = random(255);
    corB = random(255);
  }

  fill(corR, corG, corB, opacidade);
  circle(x, y, diametro);


  if (mouseX > x) {
    x += 1;
  } else if (mouseX < x) {
    x -= 1;
  }

  if (mouseY > y) {
    y += 1;
  } else if (mouseY < y) {
    y -= 1;
  }
}
