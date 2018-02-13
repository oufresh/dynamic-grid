

var grid = null;
var num = 3;
function _addElemToGrid(num)
{
	var elem = document.createElement('div');
	elem.className = "dynamic-grid-elem";
	elem.innerText = num;
	grid.appendChild(elem);
}

window.onload = function()
{
	console.log("Dynamic grid start");
	grid = document.querySelector(".dynamic-grid");
	document.getElementById('add').addEventListener('click', function(){
		num++;
		_addElemToGrid(num);
	});
	
	document.getElementById('toggle').addEventListener('click', function(){
		if (grid.style.gridTemplateColumns == "auto auto auto auto")
			grid.style.gridTemplateColumns = "auto auto auto auto auto";
		else
			grid.style.gridTemplateColumns = "auto auto auto auto";
	});
}