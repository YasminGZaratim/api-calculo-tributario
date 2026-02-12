function calcularICMS(dados) {
    const { estadoOrigem, estadoDestino, valorProduto } = dados;

    let aliquota = 0.18; // exemplo padrão

    if (estadoOrigem !== estadoDestino) {
        aliquota = 0.12 // interestadual exemplo
    }

    const baseCalculo = valorProduto;
    const valor = baseCalculo * aliquota;

    return {
        baseCalculo,
        aliquota,
        valor
    };
}
module.exports = {calcularICMS};