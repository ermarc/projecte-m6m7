<?php
    require '../../essentials/decoration.php';
    require '../../essentials/functions.php';
    require '../../account/session/sessionGuard.php';

    $message = '<form onsubmit="return validateNewProductForm()"><h1 style=\"font-style: italic;\">Añadir producto</h1><h4><br>Nombre de producto<br><input type=\"text\" style=\"margin: 4px;\" name="productName"></input></h3><h4>Descripción de producto<br><textarea style="width:350px; height: 55px; margin: 4px;" name="productDesc"></textarea></h3><div id="photoInput" class=\"active\" style=\"border: 5px dashed blue; border-radius: 0px; padding: 20px; margin:10px;\"><h4>Arrastra una foto aquí...</h4><button onclick=\"click()\" type=\"button\">Upload files</button><input "inputFiles[] id="input-file" hidden multiple/></div><div id="fileAgrouppation"></div><div id=\"buttonForm\"><button>Continuar</button></div></form>';
    promptMessageRaw($message);
?>

<body>
    <script src="productAdd.js"></script>
</body>