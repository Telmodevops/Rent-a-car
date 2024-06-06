document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "test") {
        window.location.href = "index front.html"; // Redireciona para a área do cliente se as credenciais forem corretas
    } else {
        document.getElementById("errorMessage").innerText = "Credenciais inválidas"; // Exibe uma mensagem de erro se as credenciais forem incorretas
    }
});
