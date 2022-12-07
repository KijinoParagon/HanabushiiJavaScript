var wLock = false;
var sLock = false;
//Actions
gameWindow.addEventListener("keydown", event => {

	if(event.key != "w" && event.key != "d")
		inputs[event.key] = true;
	
	
	if(wLock == false && event.key == "w" && jumps < 2)
	{
		playerMagY += 5;
		console.log("Hello");
		jumps++;
		jumping = true;
		jumpHeight = 3;
		wLock = true;
	}
	if(sLock == false && event.key == "s" && slideTimer < 1)
	{
		slideTimer = 8;
		playerMagX = facingRight ? playerMagX + slideTimer : playerMagX - slideTimer;
		dLock = true;
	}
});

gameWindow.addEventListener("keypress", event => {
	inputs[event.key] = true;
	runningTime = (inputs["a"] == true) || (inputs["d"] == true) ? runningTime+1 : runningTime;
});

gameWindow.addEventListener("keyup", event => {
	inputs[event.key] = false;
	if((inputs["a"] == false ) && (inputs["d"] == false))
	{
		if (runningTime < 30)
			runningTime = 5;
		else
			runningTime = 10;
		playerImg = 1;
	}
	
	if(event.key == "w")
	{
		wLock = false;
		playerMagY = 0;
		jumping = false;
		jumpHeight = 4;
	}
	
	if(event.key == "s")
	{
		sLock = false;
	}
	
});