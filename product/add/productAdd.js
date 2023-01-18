summonAddProductForm();

let photoFiles = [];
let photoInput = document.getElementById("photoInput");
let photoInputText = document.getElementById("photoInput").getElementsByTagName("h4");

photoInput.addEventListener("dragover", function(event) {
    prevDefault(event);
    photoInput.style.backgroundColor = "rgba(18, 255, 247, 0.44)";    
    photoInputText[0].innerHTML = "¡Rápido! ¡Suéltala! 😱";
})

photoInput.addEventListener("dragleave", function(event) {
    prevDefault(event);
    photoInput.style.backgroundColor = "";
    photoInputText[0].innerHTML = "Arrastra una foto aquí...";
})

photoInput.addEventListener("drop", function(event) {
    prevDefault(event);
    photoFiles = photoFiles.concat(Array.from(event.dataTransfer.files));
    showFiles();
})

function emptyArray() {
    photoFiles = [];
}

function prevDefault(e) {
    e.preventDefault();
}

function showFiles() {
    document.getElementById("fileAgrouppation").innerHTML = "";
    if (photoFiles.length != 0) {
        photoFiles.forEach(function(item, index) {
            processFile(item, index);
        });
    }
}

function processFile(file, index) {
    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const fileType = file.type;
    if (validExtensions.some(item => item === fileType)) {
        let imageReader = new FileReader();
        let fileURL = "";
        imageReader.readAsDataURL(file);

        imageReader.addEventListener("load", function () {
            fileURL = imageReader.result;
            let str = document.createElement("div");
            str.className = "newProductImage";
            str.innerHTML = `<img src="${fileURL}"/>
                            <span style="text-overflow: ellipsis; max-width: 20vh; width: auto; overflow: hidden;">${file.name}<br></span>
                            <span onclick="deleteFile(${index}, true)" class="removeButton">X</span>`;
            document.getElementById("fileAgrouppation").appendChild(str);
        });
    } else {
        alert("¡ERROR CRÍTICO! ¡TIPO DE ARCHIVO NO VÁLIDO! Borrándolo...");
        deleteFile(index, false);
    }
}

function deleteFile(index, processAgain) {
    photoFiles.splice(index, 1);
    if (processAgain) {
        showFiles();
    }
}

function validateNewProductForm() {
    if (photoFiles.length() >= 3) {

    }
    hidePromptMessage();
    showPromptMessage('tula');
}

function summonAddProductForm() {
    let str = 	`<form action='../../index.php'>
                    <h1 style="font-style: italic;">Añadir producto</h1>
                    <h4><br>Nombre de producto<br><input type="text" style="margin: 4px;"></input></h3>
                    <h4>Descripción de producto<br><textarea style="width:350px; height: 55px; margin: 4px;"></textarea></h3>
                    <div id="photoInput" class="active" style="border: 5px dashed blue; border-radius: 0px; padding: 20px; margin:10px;">
                        <h4>Arrastra una foto aquí...</h4>
                        <button onclick="click()" type="button">Upload files</button>
                        <input type="file" name="inputFiles[]" id="input-file" hidden multiple />
                    </div>
                    <div id="fileAgrouppation">
                    </div>
                    <div id="buttonForm">
                        <button>Continuar</button>
                            <button>Cancelar</button>
                        </form>
                    </div>
                </form>`;
    showPromptMessage(str);
}