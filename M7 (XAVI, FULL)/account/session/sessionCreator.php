<?php
    session_start();

    function createSessionName($sessionUsername) {
        $_SESSION['username'] = $sessionUsername;
    }
?>