//Actions
gameWindow.addEventListener("keydown", event => {

	if(event.key == "w")
	{
		jumps++;
		playerMagY = 0;
	}
	inputs[event.key] = true;
});

gameWindow.addEventListener("keypress", event => {
	inputs[event.key] = true;
	runningTime = (inputs["a"] == true) || (inputs["d"] == true) ? runningTime+1 : runningTime;
});

gameWindow.addEventListener("keyup", event => {
	inputs[event.key] = false;
	if((inputs["a"] == false ) && (inputs["d"] == false))
	{
		runningTime = 0;
		playerImg = 1;
	}
	jumpingTime = event.key =="w" ? 0 : jumpingTime;
});