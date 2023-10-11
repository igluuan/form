document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem("user");
    const btnback = document.getElementById("back-page");
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    // Corrija a verificação do estado do tema no localStorage
    const isDarkmode = localStorage.getItem('dark-mode') === "enabled"; // "enabled" em vez de "enable"

    // Atualize o tema com base no estado do localStorage
    if (isDarkmode) {
        body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener("click", function() {
        // Inverta o estado do tema ao clicar no botão
        body.classList.toggle('dark-mode');

        // Atualize o estado do tema no localStorage após a troca
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', "enabled");
        } else {
            localStorage.setItem('dark-mode', "disabled");
        }
    });

    btnback.addEventListener("click", function() {
        window.location = "login.html";
    });

    if (username) {
        const userName = document.getElementById("user-name");
        userName.textContent = username;
        const userWelcome = document.getElementById("user-welcome");
        userWelcome.style.display = "block";
    } else {
        window.location = "login.html";
    }
});
