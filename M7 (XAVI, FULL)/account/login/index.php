<?php
    require '../../essentials/functions.php';
    require '../../essentials/decoration.php';
    require '../session/sessionCreator.php';
?>

<body>
    <?php
        $logUserName = $_POST["username"];
        $logPassword = $_POST["password"];
        $newConnection = new PDO('mysql:host=localhost;dbname=SCAMPCSHOP_DB', 'marc', '1234');

        if (existingUsername($newConnection, $logUserName)) {
            if (validPassword($newConnection, $logUserName, $logPassword)) {
                createSessionName($logUserName);
                header("Location:../../index.php");
            }
        }

        function existingUsername($newConnection, $logUserName) {
            $checkIfUserIsAlreadyRegisteredQuery = "SELECT * FROM USUARIO WHERE nombre_usuario=?";

            if (!checkIfQueryIsEmpty($newConnection, $logUserName, $checkIfUserIsAlreadyRegisteredQuery)) return true;
            promptMessage("No hay ningún usuario con ese nick. Consulta tu DNI para recordar tu nombre. :)");
            return false;
        }

        function validPassword($newConnection, $logUserName, $logPassword) {
            $storedPassword = retrievePassword($newConnection, $logUserName)[0][0];
            if (password_verify($logPassword, $storedPassword)) return true;
            promptMessage("La contraseña que has introducido no es correcta.");
            return false;
        }
    ?>
</body>