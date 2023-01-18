<?php
    require '../../essentials/functions.php';
    require '../../essentials/decoration.php';
    require '../session/sessionCreator.php';
?>

<body>
    <?php
        $newUserName = $_POST["username"];
        $newUserMail = $_POST["mail"];
        $newUserPassword = $_POST["password"];
        $newConnection = new PDO('mysql:host=localhost;dbname=SCAMPCSHOP_DB', 'marc', '1234');

        if (availableUsername($newConnection, $newUserName)) {
            if (availableMail($newConnection, $newUserMail)) {
                $newRegisterQuery = $newConnection->prepare("INSERT INTO USUARIO(nombre_usuario, mail_usuario, password_usuario) VALUES( ? , ? , ? )");
                $newRegisterQuery->bindParam(1, $newUserName);
                $newRegisterQuery->bindParam(2, $newUserMail);
                $newRegisterQuery->bindParam(3, $newUserPassword);
                $newUserPassword = password_hash($newUserPassword, PASSWORD_DEFAULT);
                $newRegisterQuery->execute();
                createSessionName($newUserName);
                promptMessage("¡Bienvenido/a a SCAMPCSHOP! Pulse el botón de abajo para volver.");
            }
        }

        function availableUsername($newConnection, $newUserName) {
            $checkIfUserIsAlreadyRegisteredQuery = "SELECT * FROM USUARIO WHERE nombre_usuario=?";

            if (checkIfQueryIsEmpty($newConnection, $newUserName, $checkIfUserIsAlreadyRegisteredQuery)) return true;
            promptMessage("El nombre de usuario que has introducido ya ha sido registrado anteriormente");
            return false;
        }

        function availableMail($newConnection, $newUserMail) {
            $checkIfMailIsAlreadyRegisteredQuery = "SELECT * FROM USUARIO WHERE mail_usuario=?";

            if (checkIfQueryIsEmpty($newConnection, $newUserMail, $checkIfMailIsAlreadyRegisteredQuery)) return true;
            promptMessage("El correo electrónico que has introducido ya ha sido registrado anteriormente.");
            return false;
        }
    ?>
</body>