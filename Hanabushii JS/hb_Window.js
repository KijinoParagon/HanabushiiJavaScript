//Set the gamewindow and make it targetable
gameWindow = document.getElementById("gameWindow");	//The div containing the game window is now gameWindow
gameWindow.setAttribute('tabindex', '0');			//Give the gamewindow a tab index so that it's targetable

//Scale the window
gwWidth = document.getElementsByTagName("body")[0].offsetWidth;
gwHeight = gwWidth/ 2;
gameWindow.style = "height: " + gwHeight + "px;";

//Create the arrays for ??
var res = new Array();

//--Used in the foreach to scroll bg in tick
//--Used to push in this file
/*
	document.getElementById(res[0]).style.left = "-75vw";
	document.getElementById(res[1]).style.left = "0vw";
	document.getElementById(res[2]).style.left = "75vw";
	document.getElementById(res[3]).style.left = "150vw";
*/

var pos = new Array();		//Holds the position for elements in the res array


function addBackground(path)
{
	//Set the new index
	var index = pos.length;
	
	//Set the position of the new img in the pos array
	pos.push((index - 1) * 75);
	
	
	//Add the new bg img
	gameWindow.innerHTML += '<img class="background res" id="bg' + index + '" src="' + path + '" />';
	
	document.getElementById("bg" + index).style.position = "absolute";
	document.getElementById("bg" + index).style.width = "75%";
	document.getElementById("bg" + index).style.height = "100%";
	
}