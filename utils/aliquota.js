// src/utils/aliquotas.js

// Alíquotas padrão PIS/COFINS por regime
const PIS_COFINS = {
  SIMPLES_NACIONAL: {
    cumulativo: {
      pis: 0,
      cofins: 0
    }
  },

  LUCRO_PRESUMIDO: {
    cumulativo: {
      pis: 0.0065,   // 0,65%
      cofins: 0.03   // 3%
    }
  },

  LUCRO_REAL: {
    naoCumulativo: {
      pis: 0.0165,   // 1,65%
      cofins: 0.076  // 7,6%
    }
  }
};

// ICMS padrão por estado (exemplo inicial)
const ICMS_PADRAO = {
  SP: 0.18,
  RJ: 0.20,
  MG: 0.18,
  ES: 0.17
};

module.exports = {
  PIS_COFINS,
  ICMS_PADRAO
};
