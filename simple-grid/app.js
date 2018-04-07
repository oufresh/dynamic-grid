window.onload = function() {
	var N = Math.floor(Math.random() * 100);
	while(N) {
		document.querySelector(".main").innerHTML += '<div>' + N + '</div>';
		N--;
	}
}