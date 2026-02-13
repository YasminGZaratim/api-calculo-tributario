const { PIS_COFINS } = require('../utils/aliquota');

function calcularPisCofins(dados) {
  const { regimeTributario, valorProduto, pis, cofins } = dados;

  // Se foram fornecidas alíquotas customizadas, usar elas
  if (pis !== undefined && cofins !== undefined) {
    const baseCalculo = valorProduto;
    const valorPis = baseCalculo * pis;
    const valorCofins = baseCalculo * cofins;

    return {
      baseCalculo,
      pis: {
        aliquota: pis,
        valor: valorPis
      },
      cofins: {
        aliquota: cofins,
        valor: valorCofins
      },
      total: valorPis + valorCofins
    };
  }

  // Caso contrário, usar o regime tributário padrão
  const regime = PIS_COFINS[regimeTributario];

  if (!regime) {
    throw new Error('Regime tributário inválido para PIS/COFINS');
  }

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
