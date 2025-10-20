console.log('Script carregado!');

const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita envio padrão

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    // Aqui você pode adicionar fetch/ajax para enviar os dados
    /*
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    */
});
