let productArray;
let photoFiles = [];

fetch("./productes.json")
    .then(result => result.json())
    .then((fetchedData) => {
        productArray = fetchedData.productes;
        convertProductArrayToHTML();
    });

function convertProductArrayToHTML() {
    productArray.forEach(function(item, productArrayIndex) {
        var productParentDiv = document.createElement("div");
        productParentDiv.className = "featuredProduct";
        addChildItemsToProduct(item, productParentDiv, productArrayIndex);
        // addChildItemsToOptionSelector(item);
        document.getElementById("listedFeaturedProducts").appendChild(productParentDiv);
    });
}

function addChildItemsToProduct(item, productParentDiv, productArrayIndex) {
    var productImage = document.createElement("img");
    var productTitle = document.createElement("h1");
    var productPrice = document.createElement("h2");

    productParentDiv.onclick = function() { createProductPopUp(productArrayIndex); };
    productImage.src = item.img;
    productTitle.textContent = item.name;
    productPrice.textContent = `${item.price}€`;
    
    productParentDiv.appendChild(productImage);
    productParentDiv.appendChild(productTitle);
    productParentDiv.appendChild(productPrice);
}

/*
function addChildItemsToOptionSelector(item) {
    var newSelectorOption = document.createElement("option");

    newSelectorOption.value = item.id;
    newSelectorOption.textContent = item.name;

    document.getElementById("selectProducts").appendChild(newSelectorOption);
}
*/

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
    deleteNewScript();
	setTimeout(function() {
		elemento.style.transform = "scale(0)";
		elementoTexto.style.transform = "scale(0)";
		elemento.style.animation = "";
		elementoTexto.style.animation = "";
	}, 450);
}

function createRegisterForm() {
	let str = 	`<section>
					<h1 style="font-style: italic;">Formulario de registro</h1>
                    <h3><br>Nombre de usuario<br><input type="text" id="usernameInput"></input></h3>
                    <h3>Email<br><input type="text" id="emailInput"></input></h3>
                    <h3>Su contraseña<br><input type="password" id="passwordInput"></input></h3>
                    <h3>Repita su contraseña<br><input type="password" id="confirmPasswordInput"></input></h3>
                    <div id="buttonForm">
                        <button onclick="validRegistre()">Continuar</button>
                        <button onclick="hidePromptMessage()">Cancelar</button>
                    </div>
                </section>`;
    showPromptMessage(str);
    createNewScript("eventListeners.js");
}

function createLoginForm() {
    let str = 	`<section>
					<h1 style="font-style: italic;">Iniciar sesión</h1>
                    <h3><br>Nombre de usuario<br><input type="text" id="usernameInput"></input></h3>
                    <h3>Su contraseña<br><input type="password" id="passwordInput"></input></h3>
                    <div id="buttonForm">
                        <button onclick="validRegistre()">Continuar</button>
                        <button onclick="hidePromptMessage()">Cancelar</button>
                    </div>
                </section>`;
    showPromptMessage(str);
    createNewScript("eventListeners.js");
}

function createProductPopUp(productArrayIndex) {
    let str = 	`<section>
					<h2 id="productPopupTitle" style="font-style: italic;">${productArray[productArrayIndex].name}</h2>
                    <h4>${productArray[productArrayIndex].category}</h4>
                    <img src=${productArray[productArrayIndex].img}></img>
                    <h5>${productArray[productArrayIndex].description}</h5>

                    <div id="buttonForm">
                        <button onclick="hidePromptMessage()">Volver</button>
                    </div>
                </section>`;
    showPromptMessage(str);
}

function summonAddProductForm() {
    let str = 	`<section style="inline-size: 500px;">
                    <h1 style="font-style: italic;">Añadir producto</h1>
                    <h4><br>Nombre de producto<br><input type="text" style="margin: 4px;"></input></h3>
                    <h4>Descripción de producto<br><textarea style="width:350px; height: 55px; margin: 4px;"></textarea></h3>
                    <div id="photoInput" class="active" style="border: 5px dashed blue; border-radius: 0px; padding: 20px; margin:10px;">
                        <h4>Arrastra una foto aquí...</h4>
                        <button>Upload files</button>
                        <input type="file" name="inputFiles[]" id="input-file" hidden multiple />
                    </div>
                    <div id="fileAgrouppation">
                    </div>
                    <div id="buttonForm">
                        <button>Continuar</button>
                        <button onclick="hidePromptMessage()">Cancelar</button>
                    </div>
                </section>`;
    showPromptMessage(str);
    createNewScript("productAdd.js");
}

function createNewScript(scriptSource) {
    var createScript = document.createElement("script");
    createScript.src = scriptSource;
    createScript.id = "recentlyCreatedScript";
    document.body.appendChild(createScript);
}

function deleteNewScript() {
    var detectScripts = document.getElementById("recentlyCreatedScript");
    if (detectScripts) {
        detectScripts.innerHTML = "";
        detectScripts.outerHTML = "";
    }
}

function validRegistre() {
    let suma = (validateUsername() + validateEmail() + validatePassword() + validateConfirmedPassword());
    if (suma == 4) {
        console.log("Success!");
    } else {
        console.log("Not success!");
    }
}

function validateUsername() {
    var element = document.getElementById("usernameInput");
    if (element.value.trim() != "") {
        element.style.backgroundColor = "greenyellow";
        return 1;
    } else {
        element.style.backgroundColor = "rgb(255, 62, 62)";
        return 0;
    }
}

function validateEmail() {
    let email = document.getElementById("emailInput");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.backgroundColor = "greenyellow";
        return 1;
    } else {
        email.style.backgroundColor = "rgb(255, 62, 62)";
        return 0;
    }
}

function validatePassword() {
    let password = document.getElementById("passwordInput");
    let passwordVal = password.value;
    let suma = 0;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let digits = /[0-9]/g;
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var validLowerCase = false;
    var validUpperCase = false;
    var validDigit = false;
    var validSpecialChar = false;

    if (passwordVal.length >= 8 && passwordVal.length <= 15) suma++;
    if (lowerCaseLetters.test(passwordVal)) suma++;
    if (upperCaseLetters.test(passwordVal)) suma++;
    if (specialChars.test(passwordVal)) suma++;
    if (digits.test(passwordVal)) suma++;

    if (suma == 5) {
        password.style.backgroundColor = "greenyellow";
        return 1;
    } else {
        password.style.backgroundColor = "rgb(255, 62, 62)";
        return 0;
    }
}

function validateConfirmedPassword() {
    let password = document.getElementById("passwordInput");
    let passwordConfirm = document.getElementById("confirmPasswordInput");
    if (password.value == passwordConfirm.value) {
        passwordConfirm.style.backgroundColor = "greenyellow";
        return 1;
    } else {
        passwordConfirm.style.backgroundColor = "rgb(255, 62, 62)";
        return 0;
    }
}
