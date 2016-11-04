function Food()
{
  this.x = random(posicaox);
  this.y = random(posicaoy);
  
  this.mudalugar = function()
  {
    this.x = random(posicaox);
    this.y = random(posicaoy);
  }
  
  this.mostra = function()
  {
    fill('red');
    
    if(s.flag_come === 0)
    {
        //verifica se a comida foi criada na cabeca da cobra
        if(this.x==s.x && this.y==s.y)
        {
          this.mudalugar();
        }
        else
        {
          //verifica se a comida foi criada no rabo da cobra
          for(cont=0;cont<s.rabo.length;cont++)
          {
            if(this.x==s.rabo[cont] && this.y==s.rabo[cont].y)
            {
              this.mudalugar();
            }
          }
        }
    }
    rect(this.x, this.y, scl, scl);
  }
}