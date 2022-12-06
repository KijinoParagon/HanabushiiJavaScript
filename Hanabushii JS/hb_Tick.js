function tick()
{
	//Get the frames, resetting every 100 frames
	frameNum++;
	frameNum%=100;
	
	
	//Gravity/Jumping things
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
		{
			pos.forEach(moveBG);
			pos.forEach(bgAdjust);
		}
	}
	if(playerX <= margins){
		playerX = margins;
		if (playerMagX !=0)	
		{			
			pos.forEach(moveBG);
			pos.forEach(bgAdjust);
		}
	}
	
	if((playerY >= floor) && playerMagY < 0){
		playerMagY = 0;
		playerY = floor;
		jumps = 0;
	}
	playerY -= playerMagY;
	
	
	player.style.top = playerY + "%";
	player.style.left = playerX + "%";
	
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
	console.log(pos);
	pos[index] -= playerMagX/3*2;
	console.log(pos);
}

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