import express from 'express';
import controllerPregunta from './controllers/pregunta/index.mjs';
import controllerPositivo from './controllers/positivo/index.mjs';
import controllerNegativo from './controllers/negativo/index.mjs';
import controllerUsuario from './controllers/usuario/index.mjs';
import errorHandler from './middleware/error-handler.mjs';
import auth from "./middleware/jwt_auth.mjs";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/users',controllerUsuario);

/* app.use(function(req, res, next) { //tratar CORS error en Angular
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

app.use('/pregunta',auth.isAuth,controllerPregunta);
app.use('/positivos',auth.isAuth,controllerPositivo);
app.use('/negativos',auth.isAuth,controllerNegativo);

app.use(errorHandler.logError);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler);

export default app;
