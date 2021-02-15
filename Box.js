class Box {
    constructor(){
        var options = {
            'restitution':1
        }
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.postion;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);

    }
}
