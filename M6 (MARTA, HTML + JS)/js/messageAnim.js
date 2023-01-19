function showPromptMessage(texto) {
	let elemento = document.getElementById("backgroundBlur");
	let elementoTexto = document.getElementById("messagePrompt");

	elemento.style.transform = "scale(1)";
	elemento.style.animation = "smoothOpacity 0.15s forwards";
	elementoTexto.style.animation = "fullExpand 0.3s forwards";
	elementoTexto.style.animationDelay = "0.15s";
	elementoTexto.innerHTML = texto;
	setTimeout(function() {
		elemento.style.opacity = "1";
		elementoTexto.style.transform = "scale(1)";
		elemento.style.animation = "";
		elementoTexto.style.animation = "";
	}, 450);
}

function hidePromptMessage() {
	let elemento = document.getElementById("backgroundBlur");
	let elementoTexto = document.getElementById("messagePrompt");
	elementoTexto.onclick = "";

	elementoTexto.style.animation = "fullExpand 0.3s forwards";
	elementoTexto.style.animationDirection = "reverse";
	elemento.style.animation = "smoothOpacity 0.15s forwards";
	elemento.style.animationDirection = "reverse";
	elemento.style.animationDelay = "0.3s";
	setTimeout(function() {
        deleteNewScript();
		elemento.style.transform = "scale(0)";
		elementoTexto.style.transform = "scale(0)";
		elemento.style.animation = "";
		elementoTexto.style.animation = "";
	}, 450);
}