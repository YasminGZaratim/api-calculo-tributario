const icmsService = require('../services/icmsService');
const ipiService = require('../services/ipiService');
const pisCofinsService = require('../services/pisCofinsService');
const { buscarProdutoPorNCM } = require('../utils/produtos');

async function calcularImpostos(req, res) {
    try {
        const dados = req.body;
        const { ncm, valorProduto, estadoOrigem, estadoDestino, regimeTributario } = dados;

        // Buscar produto pelo NCM para obter as alíquotas específicas
        const produto = buscarProdutoPorNCM(ncm);

        // Calcular impostos usando as alíquotas do produto
        const icms = icmsService.calcularICMS({
            estadoOrigem,
            estadoDestino,
            valorProduto,
            aliquota: produto.icmsState  // Usar alíquota do produto
        });

        const ipi = ipiService.calcularIPI({
            valorProduto,
            aliquota: produto.ipi  // Usar alíquota do produto
        });

        const pisCofins = pisCofinsService.calcularPisCofins({
            regimeTributario,
            valorProduto,
            pis: produto.pis,      // Usar alíquota do produto
            cofins: produto.cofins  // Usar alíquota do produto
        });

        const resultado = {
            ncm: produto.ncm,
            descricaoProduto: produto.descricao,
            icms,
            ipi,
            pisCofins,
            totalImpostos: icms.valor + ipi.valor + pisCofins.total
        };

        res.json(resultado);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

module.exports = { calcularImpostos };