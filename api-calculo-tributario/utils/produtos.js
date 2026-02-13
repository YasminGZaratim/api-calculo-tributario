// Banco de dados de produtos com NCM e alíquotas
const produtos = {
  '01012100': {
    descricao: 'Gado bovino',
    icmsState: 0.18,
    ipi: 0.00,
    pis: 0.0165,
    cofins: 0.076
  },
  '02012000': {
    descricao: 'Carne bovina',
    icmsState: 0.12,
    ipi: 0.00,
    pis: 0.0165,
    cofins: 0.076
  },
  '04011000': {
    descricao: 'Leite de vaca',
    icmsState: 0.07,
    ipi: 0.00,
    pis: 0.0165,
    cofins: 0.076
  },
  '10051090': {
    descricao: 'Milho',
    icmsState: 0.18,
    ipi: 0.00,
    pis: 0.0165,
    cofins: 0.076
  },
  '27101200': {
    descricao: 'Óleo diesel',
    icmsState: 0.25,
    ipi: 0.00,
    pis: 0.0165,
    cofins: 0.076
  },
  '48201010': {
    descricao: 'Papelão ondulado',
    icmsState: 0.18,
    ipi: 0.05,
    pis: 0.0165,
    cofins: 0.076
  },
  '62064200': {
    descricao: 'Camisetas',
    icmsState: 0.18,
    ipi: 0.20,
    pis: 0.0165,
    cofins: 0.076
  },
  '85171290': {
    descricao: 'Componentes eletrônicos',
    icmsState: 0.18,
    ipi: 0.15,
    pis: 0.0165,
    cofins: 0.076
  },
  '39269090': {
    descricao: 'Peças plásticas',
    icmsState: 0.18,
    ipi: 0.08,
    pis: 0.0165,
    cofins: 0.076
  },
  '72029000': {
    descricao: 'Aço laminado',
    icmsState: 0.18,
    ipi: 0.00,
    pis: 0.0165,
    cofins: 0.076
  }
};

function buscarProdutoPorNCM(ncm) {
  // Remove dashes e espaços do NCM
  const ncmLimpo = ncm.replace(/[-.]/g, '').trim();
  
  if (!produtos[ncmLimpo]) {
    throw new Error(`NCM inválido ou não encontrado: ${ncm}`);
  }
  
  return {
    ncm: ncmLimpo,
    ...produtos[ncmLimpo]
  };
}

function listarTodosNCMs() {
  return Object.keys(produtos).map(ncm => ({
    ncm,
    descricao: produtos[ncm].descricao
  }));
}

module.exports = {
  buscarProdutoPorNCM,
  listarTodosNCMs,
  produtos
};
