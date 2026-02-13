const request = require('supertest');
const app = require('../app');

describe('API de Cálculo Tributário', () => {
  
  test('POST /api/calculo - Calcula impostos corretamente', async () => {
    const payload = {
      estadoOrigem: 'SP',
      estadoDestino: 'RJ',
      valorProduto: 1000,
      regimeTributario: 'LUCRO_REAL'
    };

    const response = await request(app)
      .post('/api/calculo')
      .send(payload)
      .expect(200);

    expect(response.body).toHaveProperty('icms');
    expect(response.body).toHaveProperty('ipi');
    expect(response.body).toHaveProperty('pisCofins');
    expect(response.body).toHaveProperty('totalImpostos');
    
    expect(response.body.icms).toHaveProperty('valor');
    expect(response.body.icms).toHaveProperty('aliquota');
    expect(response.body.ipi).toHaveProperty('valor');
    expect(response.body.pisCofins).toHaveProperty('total');
  });

  test('POST /api/calculo - Testa com regime LUCRO_PRESUMIDO', async () => {
    const payload = {
      estadoOrigem: 'SP',
      estadoDestino: 'SP',
      valorProduto: 500,
      regimeTributario: 'LUCRO_PRESUMIDO'
    };

    const response = await request(app)
      .post('/api/calculo')
      .send(payload)
      .expect(200);

    expect(response.body.totalImpostos).toBeGreaterThan(0);
  });

  test('POST /api/calculo - Retorna erro com regime inválido', async () => {
    const payload = {
      estadoOrigem: 'SP',
      estadoDestino: 'RJ',
      valorProduto: 1000,
      regimeTributario: 'REGIME_INVALIDO'
    };

    const response = await request(app)
      .post('/api/calculo')
      .send(payload)
      .expect(500);

    expect(response.body).toHaveProperty('erro');
  });

});
