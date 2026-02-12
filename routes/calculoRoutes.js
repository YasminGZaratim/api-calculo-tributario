const express = require('express');
const router = express.Router();
const { calcularImpostos } = require('.../controllers/calculoController');

router.post('/', calcularImpostos);

module.exports = router;