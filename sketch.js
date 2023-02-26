var player, lowerWall, upperWall, leftWallup, rightWallup, leftWalldown, rightWalldown;

var horizontalLeft1, horizontalLeft2, horizontalLeft3, horizontalLeft4, horizontalLeft5,
horizontalLeft6, horizontalLeft7, horizontalLeft8, horizontalLeft9;
var horizontalRight1,horizontalRight2, horizontalRight3, horizontalRight4, horizontalRight5,
horizontalRight6, horizontalRight7, horizontalRight8, horizontalRight9;

var verticalLeft1, verticalLeft2, verticalLeft3, verticalLeft4;
var verticalRight1, verticalRight2, verticalRight3, verticalRight4;

var upperMiddle1, upperMiddle2, upperMiddle3, upperMiddle4, upperMiddle5, upperMiddle6, upperMiddle7;

var squareLeft1, squareLeft2;
var squareRight1, squareRight2;

var wallsGroup;

var gameState = "wait"

var playerImg

var pantallajugador, finjugador, finnina
var ninaImg
var pantallanina
var heartImg, heart, heart1, heart2, heart3, heart4, heart5;
var corasGroup;
var cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6;
var celebra1, celebra2, celebra3, celeImg1, celeImg2;

function preload(){
  playerImg = loadImage("player_cumpleaños3.png");
  ninaImg = loadImage("cumpleaños_nina.png");
  heartImg = loadImage("heart.png");
  finjugador = loadAnimation("player_cumpleaños.png","cumpleanero_pastel.png");
  finnina = loadAnimation("cumpleaños_nina.png","nina_sinpastel.png");
  celeImg1 = loadAnimation("celebrate1.png","celebrate2.png");
  celeImg2 = loadImage("celebrate3.png");
}

function setup() {
  createCanvas(600, 400);
  //Creación de grupo
  wallsGroup = createGroup();
  corasGroup = createGroup();
  cumpleanero();
  iniciojugador();
  coras();
  muros();
}

function draw() {
  background("#404040");

if(gameState === "wait"){
  player.visible = false;
  wallsGroup.setVisibleEach(false);
  textSize(20);
  fill(255,0,128) 
  text("Holis, solo tienes que conseguir todos los corazones <3", 40,100);
  textSize(15);
  fill(234,137,154);
  text("No toques los muros jiji", 200,200);
  text("Te mueves con las flechitas", 190,220);
  textSize(15);
  fill(255,224,233);
  text("Apachurrale la (a) para empezar", 185,330);
  textSize(15);
  fill(255,224,233);
  text("Tu personaje trae una chelita pero no se le ve jajaja", 140,300);
  if(keyDown("a")){
    gameState = "play";
    pantallajugador.visible = false;
    pantallanina.visible = false;
    wallsGroup.setVisibleEach(true);
  }
}
  
  if(gameState === "play"){
    player.visible=true;
    if(player.x === 0 && (player.y >=180 || player.y <= 220)){
      player.x = 600;
      player.y = 200;                                   
    }
    else if(player.x === 600 && (player.y >=180 || player.y <= 220)){
      player.x = 0;
      player.y = 200;
    }
 if(keyDown("LEFT_ARROW")){
  player.x=player.x - 3;
 }
 if(keyDown("RIGHT_ARROW")){
  player.x=player.x + 3;
 }
 if(keyDown("UP_ARROW")){
  player.y=player.y - 3;
 }
 if(keyDown("DOWN_ARROW")){
  player.y=player.y + 3;
 }
 if(player.isTouching(wallsGroup)){
  player.x=300;
  player.y=200;
 }

 barrita();
 if(!corasGroup[0]){
  gameState = "yay";
  wallsGroup.destroyEach();
 }

}

if(gameState === "yay"){
  cuadro1.destroy();
  cuadro2.destroy();
  cuadro3.destroy();
  cuadro4.destroy();
  cuadro5.destroy();
  cuadro6.destroy();

  player.destroy();
  pantallajugador.visible = true;
  pantallanina.visible = true;
  pantallajugador.changeAnimation("finfin", finjugador);
  pantallanina.changeAnimation("finninafin", finnina);

  textSize(30);
  fill(224,0,104);
  text("Feliz cumpleaños corazón",130,100);
  textSize(20);
  fill(255,224,233);
  text("Gracias por permitirme celebrarlo contigo", 100, 130);
  text("Que tengas un excelente día, flaquito! ",110,160);
  text("Estas son las 400 lineas de código con más amor",80,190);
  textSize(35);
  fill(255,224,233);
  text("JIJI",280,250)


  celebra1 = createSprite(25,25,10,10);
  celebra1.addAnimation("yupi",celeImg1);
  celebra1.scale = 0.5;

  celebra2 = createSprite(275,25,10,10);
  celebra2.addImage(celeImg2);
  celebra2.scale = 0.4;

  celebra3= createSprite(575,25,10,10);
  celebra3.addAnimation("yupi",celeImg1);
  celebra3.scale = 0.5;
}
drawSprites();
  
}

function muros(){
//Límites del juego superior e inferior
lowerWall= createSprite(300,395,1200,10);
lowerWall.shapeColor="#F36C0F";
upperWall= createSprite(550,5,1200,10);
upperWall.shapeColor="#F36C0F";

//Límites extremo izquierdo 
leftWallup= createSprite(5,72,10,122);
leftWallup.shapeColor="#44C96C";
leftWalldown= createSprite(5,322,10,132);
leftWalldown.shapeColor="#44C96C";

//Límites extremo derecho
rightWallup= createSprite(595,72,10,122);
rightWallup.shapeColor="#44C96C";
rightWalldown= createSprite(595,322,10,132);
rightWalldown.shapeColor="#44C96C";

// Paredes horizontales izquierdas
horizontalLeft1 = createSprite(75,157,150,45);
horizontalLeft1.shapeColor="#CAFDFF";
horizontalLeft2 = createSprite(75,233,150,45);
horizontalLeft2.shapeColor="#E963C2";
horizontalLeft3 = createSprite(200,40,120,20);
horizontalLeft3.shapeColor="#F13652";
horizontalLeft4 = createSprite(195,115,50,20);
horizontalLeft4.shapeColor="#F8B700";
horizontalLeft5 = createSprite(270,150,40,20);
horizontalLeft5.shapeColor="#1F9781";
horizontalLeft6 = createSprite(63,290,30,25);
horizontalLeft6.shapeColor="#823589";
horizontalLeft7 = createSprite(117,325,30,25);
horizontalLeft7.shapeColor="#823589";
horizontalLeft8 = createSprite(210,295,100,20);
horizontalLeft8.shapeColor="#F13652";
horizontalLeft9 = createSprite(150,375,230,25);
horizontalLeft9.shapeColor="#21C3D8";

//Paredes horizontales Derechas
horizontalRight1 = createSprite(525,157,150,45);
horizontalRight1.shapeColor="#CAFDFF";
horizontalRight2 = createSprite(525,233,150,45);
horizontalRight2.shapeColor="#E963C2";
horizontalRight3 = createSprite(400,40,120,20);
horizontalRight3.shapeColor="#F13652";
horizontalRight4 = createSprite(410,115,50,20);
horizontalRight4.shapeColor="#F8B700";
horizontalRight5 = createSprite(330,150,40,20);
horizontalRight5.shapeColor="#1F9781";
horizontalRight6 = createSprite(535,290,30,25);
horizontalRight6.shapeColor="#823589";
horizontalRight7 = createSprite(481,325,30,25);
horizontalRight7.shapeColor="#823589";
horizontalRight8 = createSprite(390,295,100,20);
horizontalRight8.shapeColor="#F13652";
horizontalRight9 = createSprite(450,375,230,25);
horizontalRight9.shapeColor="#21C3D8";

//Paredes verticales izquierdas
verticalLeft1 = createSprite(190,200,20,90);
verticalLeft1.shapeColor="#44C96C";
verticalLeft2 = createSprite(240,200,20,120);
verticalLeft2.shapeColor="#1F9781";
verticalLeft3 = createSprite(90,307,25,60);
verticalLeft3.shapeColor="#823589";
verticalLeft4 = createSprite(180,348,25,30);
verticalLeft4.shapeColor="#F8B700";

//Paredes verticales derechas
verticalRight1 = createSprite(410,200,20,90);
verticalRight1.shapeColor="#44C96C";
verticalRight2 = createSprite(360,200,20,120);
verticalRight2.shapeColor="#1F9781";
verticalRight3 = createSprite(508,307,25,60);
verticalRight3.shapeColor="#823589";
verticalRight4 = createSprite(420,348,25,30);
verticalRight4.shapeColor="#F8B700";

//Sprites medios
upperMiddle1 = createSprite(300,32,20,45);
upperMiddle1.shapeColor="#E963C2";
upperMiddle2 = createSprite(300,85,120,20);
upperMiddle2.shapeColor="#D66A27";
upperMiddle3 = createSprite(300,105,20,20);
upperMiddle3.shapeColor="#D66A27";
upperMiddle4 = createSprite(300,250,100,20);
upperMiddle4.shapeColor="#1F9781";
upperMiddle5 = createSprite(300,282,20,45);
upperMiddle5.shapeColor="#1F9781";
upperMiddle6 = createSprite(300,335,70,20);
upperMiddle6.shapeColor="#F36C0F";
upperMiddle7 = createSprite(300,360,20,30);
upperMiddle7.shapeColor="#F36C0F";

//Sprites cuadros izquierda
squareLeft1 = createSprite(75,73,80,80);
squareLeft1.shapeColor="#865797";
squareLeft2 = createSprite(165,65,50,30);
squareLeft2.shapeColor="#F13652";

//Sprites cuadrados derecha
squareRight1 = createSprite(525,73,80,80);
squareRight1.shapeColor="#865797";
squareRight2 = createSprite(435,65,50,30);
squareRight2.shapeColor="#F13652";

//Agrupar los elementos
  wallsGroup.add(lowerWall);
  wallsGroup.add(upperWall);
  wallsGroup.add(leftWallup);
  wallsGroup.add(rightWallup);
  wallsGroup.add(leftWalldown);
  wallsGroup.add(rightWalldown);
  wallsGroup.add(horizontalLeft1);
  wallsGroup.add(horizontalLeft2);
  wallsGroup.add(horizontalLeft3);
  wallsGroup.add(horizontalLeft4);
  wallsGroup.add(horizontalLeft5);
  wallsGroup.add(horizontalLeft6);
  wallsGroup.add(horizontalLeft7);
  wallsGroup.add(horizontalLeft8);
  wallsGroup.add(horizontalLeft9);
  wallsGroup.add(horizontalRight1);
  wallsGroup.add(horizontalRight2);
  wallsGroup.add(horizontalRight3);
  wallsGroup.add(horizontalRight4);
  wallsGroup.add(horizontalRight5);
  wallsGroup.add(horizontalRight6);
  wallsGroup.add(horizontalRight7);
  wallsGroup.add(horizontalRight8);
  wallsGroup.add(horizontalRight9);
  wallsGroup.add(verticalLeft1);
  wallsGroup.add(verticalLeft2);
  wallsGroup.add(verticalLeft3);
  wallsGroup.add(verticalLeft4);
  wallsGroup.add(verticalRight1);
  wallsGroup.add(verticalRight2);
  wallsGroup.add(verticalRight3);
  wallsGroup.add(verticalRight4);
  wallsGroup.add(upperMiddle1);
  wallsGroup.add(upperMiddle2);
  wallsGroup.add(upperMiddle3);
  wallsGroup.add(upperMiddle4);
  wallsGroup.add(upperMiddle5);
  wallsGroup.add(upperMiddle6);
  wallsGroup.add(upperMiddle7);
  wallsGroup.add(squareLeft1);
  wallsGroup.add(squareLeft2);
  wallsGroup.add(squareRight1);
  wallsGroup.add(squareRight2);
}

function cumpleanero(){

  player = createSprite(300, 200, 10, 10);
  player.addImage("player_running",playerImg);
  player.scale = 0.012;

}

function iniciojugador(){
 pantallajugador = createSprite(110,350,40,40);
 pantallajugador.addImage("player_running",playerImg);
 pantallajugador.scale = 0.11
 pantallanina = createSprite(470,350,40,40);
 pantallanina.addImage("io",ninaImg);
 pantallanina.scale = 0.05

 pantallajugador.addAnimation("finfin", finjugador);
 pantallanina.addAnimation("finninafin", finnina);
}

function coras(){
  heart = createSprite(25,25,10,10);
  heart.addImage(heartImg);
  heart.scale = 0.05

  heart2 = createSprite(275,25,10,10);
  heart2.addImage(heartImg);
  heart2.scale = 0.05

  heart3 = createSprite(575,25,10,10);
  heart3.addImage(heartImg);
  heart3.scale = 0.05

  heart4 = createSprite(25,350,10,10);
  heart4.addImage(heartImg);
  heart4.scale = 0.05

  heart5 = createSprite(250,350,10,10);
  heart5.addImage(heartImg);
  heart5.scale = 0.05

  heart6 = createSprite(575,350,10,10);
  heart6.addImage(heartImg);
  heart6.scale = 0.05

  corasGroup.add(heart);
  corasGroup.add(heart2);
  corasGroup.add(heart3);
  corasGroup.add(heart4);
  corasGroup.add(heart5);
  corasGroup.add(heart6);
}

function barrita(){
  if(player.isTouching(heart)){
    cuadro1 = createSprite(360,21,15,15);
    cuadro1.shapeColor="red";
    heart.destroy();
  }

  if(player.isTouching(heart2)){
    cuadro2 = createSprite(377,21,15,15);
    cuadro2.shapeColor="red";
    heart2.destroy();
  }

  if(player.isTouching(heart3)){
    cuadro3 = createSprite(394,21,15,15);
    cuadro3.shapeColor="red";
    heart3.destroy();
  }

  if(player.isTouching(heart4)){
    cuadro4 = createSprite(411,21,15,15);
    cuadro4.shapeColor="red";
    heart4.destroy();
  }

  if(player.isTouching(heart5)){
    cuadro5 = createSprite(428,21,15,15);
    cuadro5.shapeColor="red";
    heart5.destroy();
  }

  if(player.isTouching(heart6)){
    cuadro6 = createSprite(445,21,15,15);
    cuadro6.shapeColor="red";
    heart6.destroy();
  }
}