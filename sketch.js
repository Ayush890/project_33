const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var snow;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  snow = new Snow(100,100,20,20);
 
}

function preload(){

 bg = loadImage("snow1.jpg");

}

function draw() {
  background(bg)
  snow.display();
  drawSprites();
}