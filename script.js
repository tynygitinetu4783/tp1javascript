const tableaunom = [];
const nom = document.getElementById('enter');
const addr = document.getElementById('enteraddr');
const ul = document.getElementById('ulist');

function affichage() {
	let content = '';
	for (let i = 0; i < tableaunom.length; i++) {
		content += "<li>"+"Client : " + i +"<br> Nom :"+ tableaunom[i][0] +"<br> Adresse : "+ tableaunom[i][1] +" </li> ";
	}
	ul.innerHTML = content;
}

function ajoutfin() {
	const uniqueclie = [nom.value, addr.value]
	tableaunom.push(uniqueclie);
	affichage();
}

function ajoutdebut() {
	const uniqueclie = [nom.value, addr.value]
	tableaunom.unshift(uniqueclie);
	affichage();
}

const boutonh = document.getElementById('ajouterh');
const boutond = document.getElementById('ajouterd');

boutonh.addEventListener('click',ajoutfin);
boutond.addEventListener('click',ajoutdebut);