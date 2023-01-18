<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link rel="stylesheet" type="text/css" href="../../css/styles.css">
    <link rel="stylesheet" type="text/css" href="../../css/isolated_styles.css">
    <title>Cuenta</title>
</head>
<body>
    <br>
    <div id="backgroundBlur" style="transform: scale(0);">
        <div id="messagePrompt" style="transform: scale(0); pointer-events: all;"></div>
    </div>
    <script src="../../js/messageAnim.js"></script>
</body>
</html>

<?php
    function promptMessage($textMessage) {
        $newForm = "<form action='../../index.php'><h1>Aviso</h1><h4>$textMessage</h4><button type='submit'>Regresar</button></form>";
        echo("<script type='text/javascript'>showPromptMessage(\"$newForm\")</script>");
    }

    function promptMessageRaw($newForm) {
        echo("<script type='text/javascript'>showPromptMessage(\"$newForm\")</script>");
    }
?>