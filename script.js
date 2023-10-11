'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const formContent = document.getElementById("form-content");
    const inputName = document.getElementById("name");
    const inputAge = document.getElementById("age");
    const inputCheckBox = document.getElementById("checkBox");
    const btnSubmit = document.getElementById("btnSubmit");
    const errorMsg1 = document.getElementById("error1-msg"); // Corrigido para selecionar pelo ID
    const errorMsg2 = document.getElementById("error2-msg"); // Corrigido para selecionar pelo ID
    const errorMsg3 = document.getElementById("error3-msg"); // Corrigido para selecionar pelo ID

    formContent.addEventListener("submit", function(event) {
        event.preventDefault(); // Impedir o recarregamento da página

        const name = inputName.value;
        const age = Number(inputAge.value);

        if (name.length <= 3) {
            errorMsg1.style.display = "block";
            errorMsg1.textContent = "Erro, nome inválido!";
        }
        else{
            errorMsg1.style.display = "none";
        }
        if (age <= 18){
            errorMsg2.style.display = "block";
            errorMsg2.textContent = "Erro, você é de menor!";
        }
        else{
            errorMsg2.style.display = "none";
        }
    });

    inputCheckBox.addEventListener("change", function() {
        errorMsg3.style.display = "block";
        if (inputCheckBox.checked) {
            errorMsg3.textContent = "Oba, você é casada!";
            btnSubmit.style.display = "block";
        } else {
            errorMsg3.textContent = "Você deve ser casada!";
            btnSubmit.style.display = "none";
        }
    });
});
