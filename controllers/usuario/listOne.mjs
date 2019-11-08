import usuarioDAO from "../../models/usuario/dao.mjs";
import HTTPerror from "http-errors";

const listOne = async (req, res, next) => {
  try {
    const usuario = await usuarioDAO.listOne(req.params.id);

    res.json(usuario);

  } catch (error) {
    next(HTTPerror(404));
  }
};

export default listOne;