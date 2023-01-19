<?php
    require '../../essentials/functions.php';
    require '../../essentials/decoration.php';
    require '../session/sessionCreator.php';
    require '../session/sessionDestructorManual.php';
    require '../session/sessionGuard.php';
?>

<body>
    <?php
        $existingUsername = $_SESSION["username"];
        $newUserName = $_POST["username"];
        $newUserMail = $_POST["mail"];
        $newUserPassword = $_POST["password"];
        $newConnection = new PDO('mysql:host=localhost;dbname=SCAMPCSHOP_DB', 'marc', '1234');

        logToBrowserConsole("UPDATE USUARIO SET nombre_usuario = ?, mail_usuario = ?, password_usuario = ? WHERE nombre_usuario = \"$existingUsername\"");
        $newUpdateQuery = $newConnection->prepare("UPDATE USUARIO SET nombre_usuario = ?, mail_usuario = ?, password_usuario = ? WHERE nombre_usuario = \"$existingUsername\"");
        $newUpdateQuery->bindParam(1, $newUserName);
        $newUpdateQuery->bindParam(2, $newUserMail);
        $newUpdateQuery->bindParam(3, $newUserPassword);
        $newUserPassword = password_hash($newUserPassword, PASSWORD_DEFAULT);
        $newUpdateQuery->execute();
        updateSession($newUserName);
        promptMessage("¡Has cambiado correctamente tu información!");
    ?>
</body>