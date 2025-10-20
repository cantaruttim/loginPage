console.log('Script carregado!'); 

const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita envio padrão

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
});
