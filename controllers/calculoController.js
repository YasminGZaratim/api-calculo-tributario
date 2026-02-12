const icmsService = require('../services/icmsService');
const ipiService = require('../services/ipiService');
const pisCofinsService = requite('../services/pisCofinsService');

async function calcularImpostos(req, res) {
    try {
        const dados = req.body;

        const icms = icmsService.calcularICMS(dados);
        const ipi = ipiService.calcularIPI(dados);
        const pisCofins = pisCofinsService.calcularPisCofins(dados);

        const resultado = {
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