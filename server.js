const app = require('./app');

const PORT = ProcessingInstruction.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});