class Box  {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   // this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){ 
   // console.log(this.body.speed)
    if(this.body.speed < 4){
      push(); 
      fill("blue")
      var pos =this.body.position;
     rect(pos.x, pos.y, this.width, this.height);
      rectMode(CENTER);
      pop();
     } 
  else{ 
    var pos =this.body.position;
      World.remove(world, this.body);  
     // rect(pos.x, pos.y,50,50);
    //  push(); 
      //rect(this.pos.x, this.body.pos.y,50,50);
     // this.Visibility = this.Visibility - 5;
     // tint(255,this.Visibility); 
      
     // pop();
    } 
  } 
  score (){
  if(this.body.speed>4 && this.body.speed<100){
      score = score+1;
    }
  
     } 
    }
  
  
  
  


