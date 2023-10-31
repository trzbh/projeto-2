let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  createCanvas(400, 400);
  background("black");
  cor = color(random(0, 225),random(0, 225),random(0, 225));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  circle(posicaoHorizontal,posicaoVertical, 50);
  fill(cor);
  
 if(mouseX < posicaoHorizontal){
   posicaoHorizontal --;
 }
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal ++;
  }
  if(mouseY< posicaoVertical){
   posicaoVertical --;
 }
  
  if(mouseY> posicaoVertical)
  {posicaoVertical ++;
  }
  
   if(mouseIsPressed) {cor = color(random(0, 255),random(0, 255), random(0, 255),random(0,100));}







}