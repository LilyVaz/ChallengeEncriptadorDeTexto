document.getElementById("encrypt-btn").addEventListener("click", handleEncrypt);
document.getElementById("decrypt-btn").addEventListener("click", handleDecrypt);
document.getElementById("copy-btn").addEventListener("click", copyToClipboard);

function handleEncrypt() {
    let inputText = document.getElementById("input-text").value;
    if (validateText(inputText)) {
        let encryptedText = encryptText(inputText);
        displayEncryptedText(encryptedText);
        document.getElementById("message").textContent = "";
    } else {
        document.getElementById("message").textContent = "No se permiten mayúsculas ni caracteres especiales.";
    }
}

function handleDecrypt() {
    let inputText = document.getElementById("input-text").value;
    if (validateText(inputText)) {
        let decryptedText = decryptText(inputText);
        displayDecryptedText(decryptedText);
        document.getElementById("message").textContent = "";
    } else {
        document.getElementById("message").textContent = "No se permiten mayúsculas ni caracteres especiales.";
    }
}

function encryptText(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function displayEncryptedText(encryptedText) {
    document.getElementById("output-image").style.display = 'none'; // Esconde la imagen
    document.getElementById("output-text").style.display = 'block'; // Muestra el texto encriptado
    document.getElementById("output-text").value = encryptedText;   // Asigna el valor encriptado al área de texto
    document.getElementById("copy-btn").style.display = 'block';    // Muestra el botón de copiar
}

function displayDecryptedText(decryptedText) {
    document.getElementById("output-image").style.display = 'none'; // Esconde la imagen
    document.getElementById("output-text").style.display = 'block'; // Muestra el texto desencriptado
    document.getElementById("output-text").value = decryptedText;   // Asigna el valor desencriptado al área de texto
    document.getElementById("copy-btn").style.display = 'block';    // Muestra el botón de copiar
}

function copyToClipboard() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
