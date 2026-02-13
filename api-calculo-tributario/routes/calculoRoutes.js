const express = require('express'); // Importa o framework Express para criar o aplicativo web
const router = express.Router(); // Cria um roteador do Express, que é usado para definir rotas específicas para cálculos. O roteador permite organizar as rotas em módulos separados, facilitando a manutenção e a escalabilidade do código.
const { calcularImpostos } = require('../controllers/calculoController'); // Importa a função calcularImpostos do arquivo calculoController.js localizado na pasta controllers. Essa função será usada como controlador para lidar com as requisições de cálculo de impostos.
const { buscarProdutoPorNCM, listarTodosNCMs } = require('../utils/produtos'); // Importa funções para buscar produtos por NCM

// Rota para listar todos os NCMs disponíveis
router.get('/ncms', (req, res) => {
  try {
    const ncms = listarTodosNCMs();
    res.json(ncms);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Rota para buscar produto por NCM
router.get('/ncm/:ncm', (req, res) => {
  try {
    const produto = buscarProdutoPorNCM(req.params.ncm);
    res.json(produto);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
});

router.post('/', calcularImpostos); // Define uma rota POST na raiz do roteador (que será acessível como '/api/calculo' devido à configuração em app.js). Quando uma requisição POST for feita para essa rota, a função calcularImpostos será chamada para processar a requisição e retornar a resposta adequada.

module.exports = router; // Exporta o roteador para que ele possa ser importado e usado em outros arquivos, como app.js, onde as rotas de cálculo serão configuradas para serem acessíveis a partir do caminho base '/api/calculo'.