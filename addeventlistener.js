/**
 * @author Víctor Jesús Temprano Hernández
 */

function cambiar() {
	writeElement.innerHTML = this.value;
	document.body.style.backgroundColor = this.value;
}

formElement = document.getElementById('entrada');
writeElement = document.getElementById('respuesta');
formElement.addEventListener('input', cambiar);

