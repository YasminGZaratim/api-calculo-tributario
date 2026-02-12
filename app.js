const express = require('express');
const cors = require('cors');
require('dotenv').config();

const calculoRoutes = require('./routes/calculoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/calculo', calculoRoutes);

module.exports = app;