var Ball
var database
var position

function setup(){

database=firebase.database();

createCanvas(500,500);

Ball=createSprite(250,250,20,20);
var ballPosition = database.ref('Pelota/Posicion');
ballPosition.on("value",readPosition,ShowError);

}

function draw(){

background("blue");

if(keyDown(LEFT_ARROW)){

writePosition(-1,0);

}

else if(keyDown(RIGHT_ARROW)){

writePosition(1,0);

}

else if(keyDown(UP_ARROW)){

writePosition(0,-1);

}

else if(keyDown(DOWN_ARROW)){

writePosition(0,1);

}

drawSprites();

}

function writePosition(x,y){

database.ref('Pelota/Posicion').set({'x': Position.X+10*x, 'y': Position.Y+y*10});

}

function readPosition(data){
Position=data.value();

Ball.x=Ball.x + 10*x

Ball.y=Ball.y + 10*y

}

function ShowError(){
console.log("error de escritura en la base de datos")    
}