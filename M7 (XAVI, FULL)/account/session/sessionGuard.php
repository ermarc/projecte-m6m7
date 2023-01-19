<?php
    session_start();

    if (!checkSession()) activateGuard();

    function checkSession() {
        return isset($_SESSION['username']);
    }

    function activateGuard() {
        header('Location: ../../');
    }
?>