document.addEventListener("DOMContentLoaded", () => {
  const encryptButton = document.getElementById("encrypt-button");
  const decryptButton = document.getElementById("decrypt-button");
  const copyButton = document.getElementById("copy-button");
  const textInput = document.getElementById("text-input");
  const outputMessage = document.getElementById("output-message");

  encryptButton.addEventListener("click", () => handleEncryption(textInput.value, true));
  decryptButton.addEventListener("click", () => handleEncryption(textInput.value, false));
  copyButton.addEventListener("click", copyToClipboard);

  function handleEncryption(text, isEncrypt) {
      const processedText = isEncrypt ? encrypt(text.toLowerCase()) : decrypt(text.toLowerCase());
      updateOutputMessage(processedText);
  }

  function copyToClipboard() {
      const messageText = outputMessage.innerText;
      if (messageText && messageText !== "Ningún mensaje fue encontrado") {
          navigator.clipboard.writeText(messageText)
              .then(() => showAlert("success", "Texto copiado al portapapeles"))
              .catch((err) => showAlert("error", "Error al copiar el texto", err));
      } else {
          showAlert("info", "No hay texto para copiar");
      }
  }

  function showAlert(icon, title, text = "") {
      Swal.fire({
          icon,
          title,
          text,
          showConfirmButton: !text,
          timer: text ? null : 1500,
      });
  }

  function encrypt(text) {
      return text.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
  }

  function decrypt(text) {
      return text.replace(/enter/g, "e")
                 .replace(/imes/g, "i")
                 .replace(/ai/g, "a")
                 .replace(/ober/g, "o")
                 .replace(/ufat/g, "u");
  }

  function updateOutputMessage(text) {
      outputMessage.innerText = text || "Ningún mensaje fue encontrado";
      document.querySelector(".output-section img").style.display = "none";
      document.querySelector(".output-section .advice-info").style.display = "none";
      document.querySelector(".output-section").classList.add("customClass");
      document.querySelector(".output-section .message").classList.add("new-style");
      copyButton.style.display = "block";
  }
});
