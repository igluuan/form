document.addEventListener('DOMContentLoaded', function() {
    const credenciaisValidas = [
        { user: "admin", password: "admin", nome: "Administrador" },
        { user: "Luan", password: "12345", nome: "Luan" },
        { user: "Julia", password: "abcde", nome: "Julia" },
    ];
    const form = document.getElementById("login-form");
    const createBtn = document.getElementById("button-create");
    const createForm = document.getElementById("create-form");
    const backPage = document.getElementById("back-page");
    const userWelcome = document.getElementById("user-welcome");
    const userName = document.getElementById("user-name");
    const pageTitle = document.title;
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    function verificarCredenciais(username, password) {
        for (const user of credenciaisValidas) {
            if (user.user === username && user.password === password) {
                return user; // Retorna o objeto do usuário se as credenciais forem válidas
            }
        }
        return null; // Retorna null se as credenciais forem inválidas
    }

    createBtn.addEventListener("click", function() {
        form.style.display = "none";
        createForm.style.display = "flex";
        document.title = "Pag-Create";
    });

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
    backPage.addEventListener("click", function() {
        window.location = "login.html";
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;

        const usuarioAutenticado = verificarCredenciais(user, password);

        if (usuarioAutenticado) {
            // Armazena o nome de usuário no localStorage após o login bem-sucedido
            localStorage.setItem("user", usuarioAutenticado.user);
            
            // Redireciona para a página inicial
            window.location = "pag_inicial.html";
        } else {
            alert('Credenciais inválidas!');
        }
    });
});
