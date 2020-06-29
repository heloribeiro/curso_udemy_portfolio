function openNav() {

	var x = document.getElementById('navegation');

	if (x.className === 'navegation') {
		x.className += " menujs";
		document.getElementById('menu-cel').innerHTML = "&Cross;";
	} else {

		x.className = "navegation";
		document.getElementById('menu-cel').innerHTML = "&equiv;";
	}
}
