function tick()
{
	//Get the frames, resetting every 100 frames
	frameNum++;
	frameNum%=100;
	
	/*=====================================
		Gravity/Jumping Things
	=====================================*/
	if(jumpHeight == 0)
		playerMagY -= 0.5;
	else
		jumpHeight--;
	
	
	if(slideTimer > 0)
	{
		slideTimer--;
	}
	
	if(playerMagX > 1 && slideTimer > 0)
		playerMagX--;
	if(playerMagX < 1 && slideTimer > 0)
		playerMagX++;
	
	/*=====================================
		Running/Walking things
	=====================================*/
	//Smooth out the stopping animation
	if((playerMagX < 0) && !runningTime)
	{
		playerMagX+=0.5;
		
	}
	if((playerMagX > 0) && !runningTime)
	{
		playerMagX-=0.5;
		
	}
	
	if(!inputs["d"] && !inputs["a"] && runningTime)
	{
		runningTime--;
	}
	
	//Adjust the player magnitude based on running or walking
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
	}
	
	//Reposition the player based on their magnitude
	playerX	+= playerMagX;
	playerY -= playerMagY;
	playerX += facingRight ? (+slideTimer) : (-slideTimer);
	//Check for collision
	collision();
	//Move the player image on the page
	player.style.top = playerY + "%";
	player.style.left = playerX + "%";
	
	//Make the image change if the player is moving
	if((runningTime > 0 && frameNum%5 == 1) || (runningTime > 30 && frameNum%2 == 1) )
	{
		playerImg++;
	}
	
	//Set the image
	player.src = "res/Alex Run_" + (playerImg%3 + 1) + ".png";
	
	//Turn the player left and right
	if ( playerMagX < 0)
	{
		player.style.transform = "scaleX(-1)";
		facingRight = false;
	}
	else if ( playerMagX > 0)
	{
		player.style.transform = "scaleX(1)";
		facingRight = true;
	}
	
	//Diagnostics for the top of the page
	document.getElementById("counter").textContent = "  frame: " + frameNum%3 + "   jumps: " + jumps + "   jumpHeight: " + jumpHeight + "   jumping: " + jumping + "   ymag: " + playerMagY;
	console.log(document.getElementById("counter").textContent);

}

