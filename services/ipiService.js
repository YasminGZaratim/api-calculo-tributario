function calcularIPI(dados) {
    const {valorProduto} = dados;

    const aliquota = 0.05; //5%
    const baseCalculo = valorProduto;
    const valor = baseCalculo * aliquota;

    return {
        baseCalculo,
        aliquota,
        valor
    };
}

module.exports = {calcularIPI};