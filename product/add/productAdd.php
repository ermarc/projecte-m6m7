<?php
    require '../../essentials/functions.php';
    require '../../essentials/decoration.php';
    require '../../account/session/sessionGuard.php';

?>

<?php
    $newProductName = $_POST["productName"];
    $newProductDescription = $_POST["productDesc"];
    $newConnection = new PDO('mysql:host=localhost;dbname=SCAMPCSHOP_DB', 'marc', '1234');

    if (availableProductName($newConnection, $newProductName)) {
        $newProductQuery = $newConnection->prepare("INSERT INTO PRODUCTO(nombre_producto, desc_producto) VALUES( ?, ?);");
        $newProductQuery->bindParam(1, $newProductName);
        $newProductQuery->bindParam(2, $newProductDescription);
        $newProductQuery->execute();
        promptMessage("Producto ".$newProductName." subido exitosamente");
    }
    
    function availableProductName($newConnection, $newProductName) {
        $checkIfProductIsAlreadyFound = "SELECT * FROM PRODUCTO WHERE nombre_producto=?";

        if (checkIfQueryIsEmpty($newConnection, $newProductName, $checkIfProductIsAlreadyFound)) return true;
        promptMessage("El nombre de producto que has introducido ya existe en la base de datos.");
        return false;
    }
?>