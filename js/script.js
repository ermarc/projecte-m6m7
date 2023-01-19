let productArray;

fetch("./js/productes.json")
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
        setTimeout(function() {
            document.getElementById("listedFeaturedProducts").appendChild(productParentDiv);
        }, 450);
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


function createRegisterForm() {
	let str = 	`<form action="./account/register/" onsubmit="return validRegistre()" method="POST">
					<h1 style="font-style: italic;">Formulario de registro</h1>
                    <h3><br>Nombre de usuario<br><input type="text" id="usernameInput" name="username"></input></h3>
                    <h3>Email<br><input type="text" id="emailInput" name="mail"></input></h3>
                    <h3>Su contraseña<br><input type="password" id="passwordInput" name="password" onfocus="retrievePasswordLiveCheckMenu()"></input></h3>
                    <h3>Repita su contraseña<br><input type="password" id="confirmPasswordInput"></input></h3>
                    <div id="buttonForm">
                        <button type="submit">Continuar</button>
                        <button onclick="hidePromptMessage()" type="button">Cancelar</button>
                    </div>
                </form>
                <div class="passwordAdvisorsDiv"><h4 class="passwordAdvisors unresolvedField">Longitud</h4><h4 class="passwordAdvisors unresolvedField">Minúscula</h4><h4 class="passwordAdvisors unresolvedField">Mayúscula</h4><h4 class="passwordAdvisors unresolvedField">Carácter especial</h4><h4 class="passwordAdvisors unresolvedField">Dígito</h4></div>`;
    showPromptMessage(str);
    createNewScript("./js/eventListeners.js");
}

function createLoginForm() {
    let str = 	`<form action="./account/login/" method="POST" >
					<h1 style="font-style: italic;">Iniciar sesión</h1>
                    <h3><br>Nombre de usuario<br><input type="text" id="usernameInput" name="username"></input></h3>
                    <h3>Su contraseña<br><input type="password" id="passwordInput" name="password"></input></h3>
                    <div id="buttonForm">
                        <button type="submit">Continuar</button>
                        <button onclick="hidePromptMessage()" type="button">Cancelar</button>
                    </div>
                </form>`;
    showPromptMessage(str);
}

function createProductPopUp(productArrayIndex) {
    let str = 	`<form>
					<h2 id="productPopupTitle" style="font-style: italic;">${productArray[productArrayIndex].name}</h2>
                    <h4>${productArray[productArrayIndex].category}</h4>
                    <img src=${productArray[productArrayIndex].img}></img>
                    <h5>${productArray[productArrayIndex].description}</h5>

                    <div id="buttonForm">
                        <button onclick="hidePromptMessage()" type="button">Volver</button>
                    </div>
                </form>`;
    showPromptMessage(str);
}

function summonAddProductForm() {
    let str = 	`<form>
                    <h1 style="font-style: italic;">Añadir producto</h1>
                    <h4><br>Nombre de producto<br><input type="text" style="margin: 4px;"></input></h3>
                    <h4>Descripción de producto<br><textarea style="width:350px; height: 55px; margin: 4px;"></textarea></h3>
                    <div id="photoInput" class="active" style="border: 5px dashed blue; border-radius: 0px; padding: 20px; margin:10px;">
                        <h4>Arrastra una foto aquí...</h4>
                        <button onclick="click()" type="button">Upload files</button>
                        <input type="file" name="inputFiles[]" id="input-file" hidden multiple />
                    </div>
                    <div id="fileAgrouppation">
                    </div>
                    <div id="buttonForm">
                        <button>Continuar</button>
                        <button onclick="hidePromptMessage()" type="button">Cancelar</button>
                    </div>
                </form>`;
    showPromptMessage(str);
    createNewScript("productAdd.js");
}

function createUserForm() {
    let username = document.getElementById("loggedUser").textContent;
    let str =   `
                    <h1 style="font-style: italic;">${username}</h1>
                    <img id="userconBig" src="./css/usercon.png">
                    <div id="buttonForm">
                        <button type="button" onclick="hidePromptMessage()">Regresar a la tienda</button>
                        <form action="./account/session/sessionDestructor.php">
                            <button type="submit">Cerrar sesión</button>
                        </form>
                        <form action="./account/delete">
                            <button type="submit">Borrar usuario</button>
                        </form>
                        <button onclick="actualizarUsuario()">Actualizar información</button>
                    </div>`;
    showPromptMessage(str);
}

function actualizarUsuario() {
    hidePromptMessage();
    setTimeout(function() {
        let str = 	`<form action="./account/update/" onsubmit="return validRegistre()" method="POST">
        <h1 style="font-style: italic;">Actualizar usuario</h1>
        <h3><br>Nombre de usuario<br><input type="text" id="usernameInput" name="username"></input></h3>
        <h3>Email<br><input type="text" id="emailInput" name="mail"></input></h3>
        <h3>Su contraseña<br><input type="password" id="passwordInput" name="password" onfocus="retrievePasswordLiveCheckMenu()"></input></h3>
        <h3>Repita su contraseña<br><input type="password" id="confirmPasswordInput"></input></h3>
        <div id="buttonForm">
            <button type="submit">Continuar</button>
            <button onclick="hidePromptMessage()" type="button">Cancelar</button>
        </div>
    </form>
    <div class="passwordAdvisorsDiv"><h4 class="passwordAdvisors unresolvedField">Longitud</h4><h4 class="passwordAdvisors unresolvedField">Minúscula</h4><h4 class="passwordAdvisors unresolvedField">Mayúscula</h4><h4 class="passwordAdvisors unresolvedField">Carácter especial</h4><h4 class="passwordAdvisors unresolvedField">Dígito</h4></div>`;
    showPromptMessage(str);
    createNewScript("./js/eventListeners.js");
    }, 1500);
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
    if (suma == 4) return true;
    return false;
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
    let passwordAdvisors = document.getElementsByClassName("passwordAdvisors");
    let passwordVal = password.value;
    let suma = 0;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let digits = /[0-9]/g;
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    (passwordVal.length >= 8 && passwordVal.length <= 15) ? suma += turnAdvisorResolved(passwordAdvisors[0]) : turnAdvisorUnresolved(passwordAdvisors[0]);
    (lowerCaseLetters.test(passwordVal)) ? suma += turnAdvisorResolved(passwordAdvisors[1]) : turnAdvisorUnresolved(passwordAdvisors[1]);
    (upperCaseLetters.test(passwordVal)) ? suma += turnAdvisorResolved(passwordAdvisors[2]) : turnAdvisorUnresolved(passwordAdvisors[2]);
    (specialChars.test(passwordVal)) ? suma += turnAdvisorResolved(passwordAdvisors[3]) : turnAdvisorUnresolved(passwordAdvisors[3]);
    (digits.test(passwordVal)) ? suma += turnAdvisorResolved(passwordAdvisors[4]) : turnAdvisorUnresolved(passwordAdvisors[4]);

    if (suma == 5) {
        password.style.backgroundColor = "greenyellow";
        return 1;
    } else {
        password.style.backgroundColor = "rgb(255, 62, 62)";
        return 0;
    }
}

function turnAdvisorUnresolved(element) {
    element.className = "passwordAdvisors unresolvedField";
}

function turnAdvisorResolved(element) {
    element.className = "passwordAdvisors resolvedField";
    return 1;
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

function doNotUse() {
    let str =   `<form>
                    <h2>¿Seguro que quieres proceder?</h1>
                    <h5>(alerta de sonido)</h5>
                    <div id="buttonForm">
                        <button type="button" onclick="epilepsyParty()">end my suffering 💀</button>
                        <button onclick="hidePromptMessage()" type="button">w8w8w8 hell nah</button>
                    </div>
                </form>`;
    showPromptMessage(str);
}

function retrievePasswordLiveCheckMenu() {
    let element = document.getElementsByClassName("passwordAdvisorsDiv")[0];
    element.style.animation = "bringToCenter 0.5s forwards ease-in-out";

}

function epilepsyParty() {
    let featuredProducts = document.body.getElementsByClassName("featuredProduct");
    document.getElementById("epilepsyAudio").play();
    document.getElementById("epilepsyButton").remove();
    hidePromptMessage();
    setTimeout(function() {
        document.getElementsByTagName("body")[0].style.backgroundSize = "0vh";
        let everythingSelector = document.querySelectorAll('*');
        for (let i = 0; i < everythingSelector.length; i++) {
            everythingSelector[i].style.animation = "textColor 0.25s infinite";
        }
        document.getElementsByTagName("header")[0].style.animation = "multiInvert 0.08s infinite";
        for (let i = 0; i < featuredProducts.length; i++) {
            featuredProducts[i].style.animation = "multiInvert 0.1s infinite";
        }
    }, 6650);
}