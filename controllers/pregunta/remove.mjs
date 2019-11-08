import preguntaDAO from "../../models/pregunta/dao.mjs";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id_user) {
      next(HTTPerror(404));
    } else {
      const pregunta = await preguntaDAO.remove(req.params.id_user);

      res.json(pregunta);
    }
  } catch (error) {
    next(error);
  }
};

export default remove;