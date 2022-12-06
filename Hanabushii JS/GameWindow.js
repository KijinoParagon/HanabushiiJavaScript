//Set the gamewindow and make it targetable
gameWindow = document.getElementById("gameWindow");	//Get the div for the game window, and alias it
gameWindow.setAttribute('tabindex', '0');

//Scale the window
gwWidth = document.getElementsByTagName("body")[0].offsetWidth;
gwHeight = gwWidth/ 2;
gameWindow.style = "width: " + gwWidth + "px; height: " + gwHeight + "px;";
var res = new Array();
var pos = new Array();


function addBackground(path, id)
{
	gameWindow.innerHTML += '<img class="background res" id="' + id + '" src="' + path + '" />';
	res.push(id);	
	pos[id] = 0;
	document.getElementById(id).style.position = "absolute";
	document.getElementById(id).style.width = "75vw";
	document.getElementById(id).style.height = "75vh";
	
	
}