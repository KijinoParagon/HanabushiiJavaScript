//Library of functions to check for collision and adjust the screen accordingly

//Collision
function collision() {
	
	//Check margins to adjust background
	if(playerX >= (90-margins)){
		playerX = (90-margins);
		if (playerMagX !=0)
		{
			pos.forEach(moveBG);
			pos.forEach(bgAdjust);
			worldPosition += playerMagX;
		}
	}
	if(playerX <= margins){
		playerX = margins;
		if (playerMagX !=0)	
		{			
			pos.forEach(moveBG);
			pos.forEach(bgAdjust);
			worldPosition += playerMagX;
		}
	}
	
	//Check if the player has hit the floor
	if((playerY >= floor) && playerMagY < 0){
		playerMagY = 0;
		playerY = floor;
		jumping = false;
	}
	jumps = (playerY == floor) ? 0: jumps;
}

//Move the backgrounds
function moveBG(item, index)
{
	console.log(pos);
	pos[index] -= playerMagX/3*2;
	console.log(pos);
}
//Adjust the background
function bgAdjust(item, index)
{
	var length = pos.length;
	var half = (pos.length * 75 )/2;
	var next = (index+1)%length;
	var previous = (index + length - 1) % length;
	
	if(pos[index] > half)
	{
		pos[index] = pos[next] - 75;
		console.log(index, item, next, pos[next]);
	}
	if(pos[index] < -half)
	{
		pos[index] = pos[previous] + 75;
	}
	document.getElementById("bg" + index).style.left = pos[index] + "%";
}