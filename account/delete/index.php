<?php
    require '../session/sessionGuard.php';
    require '../../essentials/functions.php';
    require '../../essentials/decoration.php';

    $userNameToDelete = $_SESSION["username"];
    $newConnection = new PDO('mysql:host=localhost;dbname=SCAMPCSHOP_DB', 'marc', '1234');

    $deletionQuery = $newConnection->prepare("DELETE FROM USUARIO WHERE nombre_usuario = '".$userNameToDelete."'");
    $deletionQuery->execute();

    header('Location: ../session/sessionDestructor.php');
?>