console.log('Script carregado!');

const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // evita envio padrão

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Enviando para o backend...');
    console.log('Username:', username);
    console.log('Password:', password);

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();
        console.log('Resposta do backend:', data);

        // Exibe mensagem no HTML
        if (data.success) {
            messageDiv.style.color = 'green';
            messageDiv.textContent = 'Login realizado com sucesso!';
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = 'Usuário ou senha incorretos.';
        }

    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Erro ao conectar com o servidor.';
    }
});
