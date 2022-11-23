<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <title>¡Bienvenido a ScamPC-Shop!</title>
</head>
<header>
    <img src="beta_logo.png">
    <div class="accountDiv">
        <button class="accountButton" id="regButton" onclick="createRegisterForm()">Registrarse</button>
        <button class="accountButton" id="logButton" onclick="createLoginForm()">Login</button>
    </div>
</header>
<body>
    <div id="welcomeTitle">
        <p>¡Bienvenido a ScamPC-Shop!
        <br />
        Tu tienda de confianza... (?)</p>
    </div>

    <div id="listedFeaturedProducts"></div>

    <div id="divSelectProducts">
        <!--
        <select id="selectProducts" style="width: 350px; height: 60px; font-size: 16px; font-style: italic; margin-right: 30px"></select>
        <button style="width: 150px; height: 60px; font-size: 19px; margin-right: 30px">Añadir al carro</button> -->
        <button id="addProductButton" onclick="summonAddProductForm()" class="accountButton" style="width: auto; padding: 3vh">Menú de agregación de producto</button>
    </div>

    <div id="productSelectorDiv">
        <selector class="normalSelector" id="superCategorySelector"></selector>
        <selector class="normalSelector" id="categorySelector"></selector>
    </div>


    <div id="backgroundBlur" style="transform: scale(0);">
        <div id="messagePrompt" style="transform: scale(0); pointer-events: all;"></div>
    </div>

    <audio id="epilepsyAudio">
        <source src="dope.mp3" type="audio/mpeg">
    </audio>

    <footer>© ScamPC-Shop.com 2022, todos los derechos reservados. Deja de leer y compra ya, cojones.
        <button id="epilepsyButton" onclick="doNotUse()" style="margin-left: 100vh; transform: scale(0.5);">Modo epilepsia</button>
    </footer>
    <script src="script.js"></script> 
</body>
</html>