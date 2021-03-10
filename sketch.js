//Create variables here
var dog, happyDog, foodS, foodStock, database
function preload()
{
	//load images here
  dogImg = loadImage("images/dog.png");
  happyDogImg = loadImage("images/happyDog.png");
}

function setup() {
	createCanvas(600, 600);
  database = firebase.database();

  dog = createSprite(300, 350)
  dog.addImage(dogImg);
  dog.scale = 0.3
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87)
 

  if(keyWentDown(UP_ARROW)){
   
   writeStock(foodS)
   dog.addImage(happyDogImg)
   foodStock =foodStock -1
  }
  textSize(20)
  fill('red')
  text("food remaining:" + foodS, 250, 100) 
  

  drawSprites();
  //add styles here
 
 
 

}

function readStock(data){
  foodS= data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



