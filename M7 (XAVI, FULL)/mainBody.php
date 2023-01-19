<?php
    session_start();

    addSpacing();
    if (isset($_SESSION['username'])) {
        createAddProductButton();
    }
?>

<body>
    <?php
        function createAddProductButton() {
            $html = "<form id=\"divSelectProducts\" action=\"./product/add/\"><div><button id=\"addProductButton\" class=\"accountButton\" style=\"width: auto; padding: 3vh\">Menú de agregación de producto</button></div></form>";
            echo($html);
        }

        function addSpacing() {
            echo("<div style=\"margin-top: 17vh;\"></div>");
        }
    ?>
</body>