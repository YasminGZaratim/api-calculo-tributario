function calcularIPI(dados) {
    const { valorProduto, aliquota } = dados;

    // Se uma alíquota foi fornecida, usar ela; caso contrário, usar 5% como padrão
    const aliquotaUsada = aliquota !== undefined ? aliquota : 0.05;
    const baseCalculo = valorProduto;
    const valor = baseCalculo * aliquotaUsada;

    return {
        baseCalculo,
        aliquota: aliquotaUsada,
        valor
    };
}

module.exports = { calcularIPI };