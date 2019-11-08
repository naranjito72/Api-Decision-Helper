import usuarioDAO from "../../models/usuario/dao.js";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(404));
    } else {
      const usuario = await usuarioDAO.remove(req.params.id);

      res.json(usuario);
    }
  } catch (error) {
    next(error);
  }
};

export default remove;