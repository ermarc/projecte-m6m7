emptyArray();

let photoInput = document.getElementById("photoInput");
let photoInputText = document.getElementById("photoInput").getElementsByTagName("h4");

photoInput.addEventListener("dragover", function(event) {
    prevDefault(event);
    photoInput.style.backgroundColor = "rgba(18, 255, 247, 0.444);";
    photoInputText[0].innerHTML = "¡Rápido! ¡Suéltala! 😱";
})

photoInput.addEventListener("dragleave", function(event) {
    prevDefault(event);
    photoInput.style.backgroundColor = "";
    photoInputText[0].innerHTML = "Arrastra una foto aquí...";
})

photoInput.addEventListener("drop", function(event) {
    prevDefault(event);
    console.log("SSKEEREE");
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
                            <span style="text-overflow: ellipsis; min-width: 300px; width: auto; overflow: hidden;">${file.name}<br></span>
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