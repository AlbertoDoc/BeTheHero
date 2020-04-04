const express = require('express');
const routes = require('./Routes');

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Paramêtros nomeados enviadosna rota após "?" (Filtros, paginação)
 * Route Params: Paramêtros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);
