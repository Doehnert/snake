function Snake()
{
  this.x = random(posicaox);
  this.y = random(posicaoy);
  this.xspeed = 0;
  this.yspeed = -1;
  this.rabo = [];
  this.flag_comeu = 0; //indica se comeu ou nao
  this.pontos = 0;
  
  
  this.aleatorio = function ()
  {
    al1 = random([1,2,3,4]);
    console.log(al1);
    if (al1 == 1 && this.xspeed!=1)
    {
      this.xspeed = -1;
      this.yspeed = 0;
    }
    else if(al1==2 && this.xspeed!=-1)
    {
      this.xspeed = 1;
      this.yspeed = 0;
    }
    else if (al1 == 3 && this.yspeed!=1)
    {
      this.yspeed = -1;
      this.xspeed = 0;
    }
    else if(al1==4 && this.yspeed!=-1)
    {
      this.yspeed = 1;
      this.xspeed = 0;
    }

    if(this.x==0)
    {
      this.xspeed = 1;
    }
    else if(this.x == width-scl)
    {
      this.xspeed = -1;
    }
    if(this.y==0)
    {
      this.yspeed = 1;
    }
    else if(this.y == height-scl)
    {
      this.yspeed = -1;
    }

  }

  this.morre = function()
  {
    for(cont=0;cont<this.rabo.length-2;cont++)
    {
      if(this.x==this.rabo[cont].x && this.y==this.rabo[cont].y)
      {
        console.log("fim de jogo");
        this.rabo = [];
        this.pontos = 0;
      }
    }
  }
  
  this.come = function()
  {
    for(cont=0;cont<comidas.length;cont++)
    {
      var d = dist(this.x, this.y, comidas[cont].x, comidas[cont].y);
      if (d === 0)
      {
        this.flag_comeu = 1; //indica que comeu
        comidas.splice(cont,1);
        append(comidas, new Food());
        this.pontos++;
        console.log('Pontos: ' + this.pontos);
      }
    }
  }
  
  this.move = function()
  {
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
    
    pos = createVector(this.x, this.y);
    
    this.rabo[0] = pos;
    
    //atualiza a posição do rabo
    if(this.flag_comeu == 1)
    {
      append(this.rabo, pos);      
      this.flag_comeu = 0;
    }
        
  //move o rabo
    for(cont=0;cont<this.rabo.length-1;cont++)
    {
      this.rabo[cont] = this.rabo[cont+1];
    }
    this.rabo[this.rabo.length-1] = pos;
  }
  
  this.mostra = function()
  {
    fill('blue');
    rect(this.x, this.y, scl, scl);
    
    //mostra o rabo
    for(cont=0;cont<this.rabo.length;cont++)
    {
      //console.log(this.rabo[cont].x);
      //console.log(this.rabo[cont].y);
      rect(this.rabo[cont].x, this.rabo[cont].y, scl, scl);
    }

  }
}