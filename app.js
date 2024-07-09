// scripts.js

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
    document.getElementById("output-text").value = encryptedText;
}

function displayDecryptedText(decryptedText) {
    document.getElementById("output-text").value = decryptedText;
}

function copyToClipboard() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    alert("Texto copiado");
}
