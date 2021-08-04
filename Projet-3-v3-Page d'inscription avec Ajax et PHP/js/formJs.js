function om() {

	var name = document.getElementById("nom").value;
	var Prénome = document.getElementById("pre").value;
	var Adresse = document.getElementById("adr").value;
	var Telephone = document.getElementById("tel").value;
	var Email = document.getElementById("eml").value;


	document.getElementById("space").innerHTML += "Nom: " + name + "<br>";
	document.getElementById("space").innerHTML += "prenom: " + Prénome + "<br>";
	document.getElementById("space").innerHTML += "Adresse: " + Adresse + "<br>";
	document.getElementById("space").innerHTML += "Telephone: " + Telephone + "<br>";
	document.getElementById("space").innerHTML += "E-mail: " + Email + "<br>";
}
