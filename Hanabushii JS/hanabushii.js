/*	TODO
	I need the following cases:
		-Desktop layout
		-Have scaleWindow() account for mobile
		-Touch screen controls
		-Vertical, put the controls below
		-Horizontal put them on, opacity up
*/

//Set Initial values
var playerX = 25;
var playerY = 0;
var playerMagX = 0;
var playerMagY = 0;
var movingX = 0;
var movingY = 0;
var playerImg = 0;
var floor = ((100 / 10) * 7.2);
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
pos["bg1"] = -75;
pos["bg2"] = 0;
pos["bg3"] = 75;
pos["bg4"] = 150;
document.getElementById(res[0]).style.left = "-75vw";
document.getElementById(res[1]).style.left = "0vw";
document.getElementById(res[2]).style.left = "75vw";
document.getElementById(res[3]).style.left = "150vw";


//res[2].style.left = (res[0].width);
player.style.position = "absolute";
player.style.width = "6vw";
//document.getElementById("player").style.width = "150vw";
player.style.height = "8vh";
player.style.top = "0px";
player.style.left = "600px";

//Actions
gameWindow.addEventListener("keydown", event => {

	if(event.key == "w")
	{
		jumps++;
		playerMagY = 0;
	}
	inputs[event.key] = true;
	//console.log(inputs);
});
gameWindow.addEventListener("keypress", event => {
	inputs[event.key] = true;
	if((inputs["a"] == true) || (inputs["d"] == true))
	{
		runningTime++;
	}
	//console.log(inputs);
});
gameWindow.addEventListener("keyup", event => {
	inputs[event.key] = false;
	if((inputs["a"] == false ) && (inputs["d"] == false))
	{
		runningTime = 0;
		playerImg = 1;
	}
	if(event.key =="w")
	{
		jumpingTime = 0;
	}
});


console.log(playerY, gameWindow.offsetHeight);
setInterval("tick()", 16);

function tick()
{
	frameNum++;
	frameNum %=100;
	
	if((playerMagY > -10))
	{
		playerMagY--;
		
	}
	
	if(inputs["w"] == true && jumpingTime < 6 && jumps <=2)
	{
		jumpingTime++;
		playerMagY+=2;
	}
	
	if((playerMagX < 0) && !runningTime)
	{
		playerMagX+=0.5;
		
	}
	if((playerMagX > 0) && !runningTime)
	{
		playerMagX-=0.5;
		
	}
	//console.log(runningTime);
	if (runningTime <= 30)
	{
		if(inputs["d"] == true && playerMagX < 0.5)
		{
			playerMagX += 0.5;
		}
		if(inputs["a"] == true && playerMagX > -0.5)
		{
			playerMagX -= 0.5;
		}
	}
	else {
		if(inputs["d"] == true && playerMagX < 1)
		{
			playerMagX += 0.5;
			runningTime++;
		}
		if(inputs["a"] == true && playerMagX > -1)
		{
			playerMagX -= 0.5;
			runningTime++;
		}
		//console.log(playerMagX);
	}
	
	
	
	
	playerX	+= playerMagX;
	if(playerX >= (90-margins)){
		playerX = (90-margins);
		if (playerMagX !=0)
			res.forEach(moveBG);		
	}
	if(playerX <= margins){
		playerX = margins;
		if (playerMagX !=0)		
			res.forEach(moveBG);
	}
	
	if((playerY >= floor) && playerMagY < 0){
		playerMagY = 0;
		playerY = floor;
		jumps = 0;
	}
	playerY -= playerMagY;
	
	
	player.style.top = playerY + "vh";
	player.style.left = playerX + "vw";
	
	if((runningTime > 0 && frameNum%5 == 1) || (runningTime > 30 && frameNum%2 == 1) )
	{
		playerImg++;
	}
	
	player.src = "res/Alex Run_" + (playerImg%3 + 1) + ".png";
	if ( playerMagX < 0)
	{
		player.style.transform = "scaleX(-1)";
	}
	else if ( playerMagX > 0)
	{
		player.style.transform = "scaleX(1)";
	}
	document.getElementById("counter").textContent = "xMag: " + playerMagX + "  runningTime: " + runningTime + "  frame: " + frameNum%3;

}

function moveBG(item, index)
{
	pos[item] -= playerMagX/2;
	if(pos[item] < -100)
	{
		pos[item] += 300;
	}
	if(pos[item] > 100)
	{
		pos[item] -= 300;
	}
	
	//2 should be 3
	

	document.getElementById(item).style.left = pos[item] + "vw";
	
	//console.log(item, pos[item]);
	
}
