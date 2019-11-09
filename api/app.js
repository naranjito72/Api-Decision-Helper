import express from 'express';
import controllerPregunta from './controllers/pregunta/index.js';
import controllerPositivo from './controllers/positivo/index.js';
import controllerNegativo from './controllers/negativo/index.js';
import controllerUsuario from './controllers/usuario/index.js';
import errorHandler from './middleware/error-handler.js';
import controllerNotFound from './controllers/notfound/index.js';

const app = express();

app.use(function(req, res, next) { //tratar CORS 
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/users/',controllerUsuario);

app.use('/pregunta/',controllerPregunta);
app.use('/positivos/',controllerPositivo);
app.use('/negativos/',controllerNegativo);

app.use('*',controllerNotFound);

app.use(errorHandler.logError);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler);

export default app;
