//Set Initial values
var playerX = 25;
var playerY = 0;
var playerMagX = 0;
var playerMagY = 0;
var movingX = 0;
var movingY = 0;
var playerImg = 0;
var floor = 85;
var margins = 20;
var inputs = new Array();
var runningTime = 0;
var jumpingTime = 0;
var jumps = 0;
var worldPosition = 0;
var frameNum = 0;

inputs["w"] = "false";
inputs["a"] = "false";
inputs["s"] = "false";
inputs["d"] = "false";


//Add the initial background and player
gameWindow.innerHTML += '<img class="midground res" id="player" src="res/Alex Run_1.png" />';

addBackground("res/Background 3.png", "bg1");
addBackground("res/Background 3.png", "bg2");
addBackground("res/Background 3.png", "bg3");
addBackground("res/Background 3.png", "bg4");

//Alias the player and put the bg in the res array
player = document.getElementById("player");
document.getElementById("bg0").style.left = "-75%";
document.getElementById("bg1").style.left = "0%";
document.getElementById("bg2").style.left = "75%";
document.getElementById("bg3").style.left = "150%";



player.style.position = "absolute";
player.style.width = "6%";
player.style.height = "8%";
player.style.top = "0px";
player.style.left = "600px";

setInterval("tick()", 16);


