function calcularICMS(dados) {
    const { estadoOrigem, estadoDestino, valorProduto, aliquota } = dados;

    // Se uma alíquota foi fornecida, usar ela; caso contrário, usar a padrão
    let aliquotaUsada = aliquota !== undefined ? aliquota : 0.18;

    if (estadoOrigem !== estadoDestino && aliquota === undefined) {
        aliquotaUsada = 0.12; // interestadual padrão
    }

    const baseCalculo = valorProduto;
    const valor = baseCalculo * aliquotaUsada;

    return {
        baseCalculo,
        aliquota: aliquotaUsada,
        valor
    };
}

module.exports = { calcularICMS };