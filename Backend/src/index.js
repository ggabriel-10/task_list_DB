const express = require('express'); //Importação Express
const routes = require('./routes'); //Importação arquivo routes
const cors = require('cors'); //Importação para comunicação com o Front-end

const app = express();
require('./config/dbConfig'); //Buscando o arquivo de configuração de Banco de dados

app.use(cors());
app.use(express.json()); //Recurso para converter o Json
app.use(routes); //Falando para o index, que deve usar as rotas definidas neste arquivo


app.listen(3333); //Definindo porta do server