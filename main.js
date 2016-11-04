var posicaox = [];
var posicaoy = [];
var scl = 20;
var comidas = [];

function setup()
{
  frameRate(10);
 createCanvas(600,600); 
 for(cont=0;cont<width/scl;cont++)
 {
   posx = cont*scl;
   append(posicaox, posx);
 }
 for(cont=0;cont<height/scl;cont++)
 {
   posy = cont*scl;
   append(posicaoy, posy);
 }
 s = new Snake();
 comidas[0] = new Food();
 comidas[1] = new Food();

 s2 = new Snake();

 console.log(random([1,-1]))
}

function draw()
{
  background(51);
  
  s.come();
  s.morre();
  s.move();
  s.mostra();

  s2.aleatorio();
  s2.come();
  s2.morre();
  s2.move();
  s2.mostra();
  
  for(cont=0;cont<comidas.length;cont++)
  {
    comidas[cont].mostra();
  }
  //log.console(posicaox);
}

function keyPressed()
{
  if (keyCode == UP_ARROW && s.yspeed!=1)
  {
    s.xspeed = 0;
    s.yspeed = -1;
  }
  else if (keyCode == DOWN_ARROW && s.yspeed!=-1)
  {
    s.xspeed = 0;
    s.yspeed = 1;
  }
  else if (keyCode == RIGHT_ARROW && s.xspeed!=-1)
  {
    s.xspeed = 1;
    s.yspeed = 0;
  }
  else if (keyCode == LEFT_ARROW && s.xspeed!=1)
  {
    s.xspeed = -1;
    s.yspeed = 0;
  }
}