<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="./css/styles.css" rel="stylesheet" type="text/css">
</head>
<body>
    <header>
    <img src="./css/beta_logo.png">
    <button class="accountButton" id="regButton" onclick="createRegisterForm()">Registrarse</button><button class="accountButton" id="logButton" onclick="createLoginForm()">Login</button>
    </header>

    <div style="margin-top: 17vh;"></div>
    <div>
        <button onclick="summonAddProductForm()" id="addProductButton" class="accountButton" style="width: auto; padding: 3vh">Menú de agregación de producto</button>
    </div>


    <div id="backgroundBlur" style="transform: scale(0);">
        <div id="messagePrompt" style="transform: scale(0); pointer-events: all;"></div>
    </div>


    <div id="listedFeaturedProducts"></div>

    <audio id="epilepsyAudio">
        <source src="dope.mp3" type="audio/mpeg">
    </audio>

    <footer>© ScamPC-Shop.com 2022, todos los derechos reservados. Deja de leer y compra ya, cojones.
        <button id="epilepsyButton" onclick="doNotUse()" style="margin-left: 100vh; transform: scale(0.5);">Modo epilepsia</button>
    </footer>

    <script src="./js/script.js"></script>
    <script src="./js/messageAnim.js"></script>
</body>
</html>