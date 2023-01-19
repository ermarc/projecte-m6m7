<?php
    session_start();

    function destroySession() {
        session_destroy();
    }

    function updateSession($sessionName) {
        $_SESSION['username'] = $sessionName;
    }
?>