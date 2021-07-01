class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visibility =255;
      World.add(world, this.body);

    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<4){
      var pos= this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
      }else{
        World.remove(world,this.body);
        push();
this.Visibility = this.Visibility-8;
tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
      }
    }
}