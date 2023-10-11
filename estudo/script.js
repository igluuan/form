'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const titleH1 = document.getElementById("title");
    const inputName = document.getElementById("name");
    const inputAge = document.getElementById("age");
    const btnSubmit = document.getElementById("btnSubmit");

    btnSubmit.addEventListener("click", function(){
        const name = inputName.value;
        const age = inputAge.value;

        if (name.length <= 2){
            alert('Nome inválido!');
        }
        else if(age <= 17){
            titleH1.textContent = 'você é de menor!';
        }
        else{
            titleH1.textContent = 'você é de maior!'
        }
    })
});