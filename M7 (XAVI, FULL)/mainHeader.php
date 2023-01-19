<?php
    session_start();
    require './essentials/functions.php';
?>

<header>
    <?php
        createMainHeaderStructure();
        if (isset($_SESSION['username'])) {
            $showName = $_SESSION['username'];
            createButtonsForAlreadyLoggedInUser($showName);
        } else {
            createButtonsForNonLoggedUser();
        }
        echo("</div>");

        function createMainHeaderStructure() {
            echo("<img src=\"./css/beta_logo.png\"><div class=\"accountDiv\">");
        }

        function createButtonsForAlreadyLoggedInUser($showName) {
            echo("<div id=\"userDiv\"><img id=\"usercon\" src=\"./css/usercon.png\" onclick=\"createUserForm()\"><h2>¡Bienvenido, <strong id=\"loggedUser\">$showName</strong>!</h2></div>");
        }

        function createButtonsForNonLoggedUser() {
            echo("<button class=\"accountButton\" id=\"regButton\" onclick=\"createRegisterForm()\">Registrarse</button><button class=\"accountButton\" id=\"logButton\" onclick=\"createLoginForm()\">Login</button>");
        }
    ?>
</header>