const express = require('express'); // Importa o framework Express para criar o aplicativo web
const cors = require('cors'); // Importa o middleware CORS para permitir solicitações de diferentes origens
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env para process.env

const calculoRoutes = require('./routes/calculoRoutes'); // Importa as rotas de cálculo do arquivo calculoRoutes.js localizado na pasta routes

const app = express(); // Cria uma instância do aplicativo Express, que será usada para configurar as rotas e middlewares
const path = require('path'); // Importa o módulo path para trabalhar com caminhos de arquivos

app.use(cors()); // Habilita o middleware CORS para permitir solicitações de diferentes origens, o que é útil para APIs que serão consumidas por clientes em domínios diferentes
app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições como JSON, permitindo que o aplicativo processe dados enviados no formato JSON

// Serve os arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Rota raiz que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.use('/api/calculo', calculoRoutes); // Configura o aplicativo para usar as rotas de cálculo, prefixando-as com '/api/calculo'. Isso significa que todas as rotas definidas em calculoRoutes.js estarão acessíveis a partir desse caminho base, por exemplo, '/api/calculo/soma' para uma rota de soma.

module.exports = app; // Exporta o aplicativo Express para que ele possa ser importado e usado em outros arquivos, como server.js, onde o servidor será iniciado.