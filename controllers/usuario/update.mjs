import usuarioDAO from "../../models/usuario/dao.mjs";
import HTTPerror from "http-errors";

const update = async (req, res, next) => {
  try {
    const usuario = await usuarioDAO.update(req.params.id, req.body);
    res.json(usuario);
    // }
  } catch (error) {
    next(HTTPerror(400));
  }
};

export default update;