import usuarioDAO from "../../models/usuario/dao.mjs";
import auth from "../../middleware/jwt_auth.mjs";
import HTTPerror from "http-errors";
import bcrypt from "bcrypt";
import moment from "moment";

const login = async (req, res, next) => {
  console.log(req.body);
  try {
    if (!req.body.email || !req.body.password) {
      next(HTTPerror(404, { message: "No existe el usuario o password" }));
    } else {
      const usuario = await usuarioDAO.checkUser({"email": req.body.email});
      if(usuario != null) {
        if (await bcrypt.compare(req.body.password, usuario.password)) {
            const salidaToken = auth.createToken(usuario.name);
              res.status(200).send({
              message: "Login Ok",
              token: salidaToken.token,
              expires_in: ((parseInt(salidaToken.orig.exp)-parseInt(salidaToken.orig.iat))/86400)+' days',
              expires_at: moment(salidaToken.fech).format("DD-MM-YYYY hh:mm:ss"),
              id_user: usuario._id
            });
        } else next(HTTPerror(404, { message: "Password incorrecto" }));
      } else next(HTTPerror(404, { message: "No existe el usuario" }));
    }
  } catch (error) {
    next(HTTPerror(404));
  }
};

export default login;