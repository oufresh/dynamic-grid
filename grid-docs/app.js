

var grid = null;
var num = 3;
var editing = false;
var inp = null;
function _addElemToGrid(num)
{
	if (editing == true) {
		if (inp) {
			inp.blur();
			inp.setAttribute("readonly", "");
			editing = false;
		}
	}
	var elem = document.createElement('div');
	elem.classList.add("dynamic-grid-elem", "dynamic-grid-elem-doc")
	elem.innerHTML = '<input autofocus placeholder="New document"/>';
	grid.appendChild(elem);
	inp = elem.querySelector('input');
	inp.focus();
	editing = true;
	inp.addEventListener('keyup', (e)=> {
		if (e.keyCode == 13) {
			inp.blur();
			inp.setAttribute("readonly", "");
			editing = false;
		}
	});
}

function openNav() {
    document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
	document.getElementById("mySidenav").classList.remove("open");
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