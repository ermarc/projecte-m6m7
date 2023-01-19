<?php
    function checkIfQueryIsEmpty($newConnection, $newParameter, $newQuery) {
        $newPreparation = $newConnection->prepare($newQuery);
        $newPreparation->bindParam(1, $newParameter);
        $newPreparation->execute();
        $newResult = $newPreparation->fetchAll();
        if (count($newResult) == 0) return true;
        return false;
    }

    function retrievePassword($newConnection, $logUserName) {
        $getUserPasswordQuery = "SELECT password_usuario FROM USUARIO WHERE nombre_usuario=?";
        $newPreparation = $newConnection->prepare($getUserPasswordQuery);
        $newPreparation->bindParam(1, $logUserName);
        $newPreparation->execute();
        $newResult = $newPreparation->fetchAll();
        return $newResult;
    }

    function logToBrowserConsole($message) {
        echo "<script type='text/javascript'>console.log('$message')</script>";
    }
?>