const app = require('./app'); // Importa o aplicativo Express do arquivo app.js

const PORT = process.env.PORT || 3000; // Define a porta em que o servidor irá rodar, usando a variável de ambiente PORT ou 3000 como padrão

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta ${PORT}`);
});