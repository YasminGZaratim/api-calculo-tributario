const { PIS_COFINS } = require('../utils/aliquotas');

function calcularPisCofins(dados) {
  const { regimeTributario, valorProduto } = dados;

  const regime = PIS_COFINS[regimeTributario];

  if (!regime) {
    throw new Error('Regime tributário inválido para PIS/COFINS');
  }

  // Define tipo automaticamente
  const tipo = regime.naoCumulativo ? 'naoCumulativo' : 'cumulativo';

  const aliquotas = regime[tipo];

  const baseCalculo = valorProduto;

  const valorPis = baseCalculo * aliquotas.pis;
  const valorCofins = baseCalculo * aliquotas.cofins;

  return {
    baseCalculo,
    pis: {
      aliquota: aliquotas.pis,
      valor: valorPis
    },
    cofins: {
      aliquota: aliquotas.cofins,
      valor: valorCofins
    },
    total: valorPis + valorCofins
  };
}

module.exports = { calcularPisCofins };
