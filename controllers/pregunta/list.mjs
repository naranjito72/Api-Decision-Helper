import preguntaDAO from "../../models/pregunta/dao.mjs";
import HTTPerror from "http-errors";

const list = async (req, res, next) => {
  try {
    if (!req.params.id_user) {
      next(HTTPerror(404));
    } else {
      const preguntas = await preguntaDAO.list(req.params.id_user);

      res.json(preguntas);
    }
  } catch (error) {
    next(error);
  }
};

export default list;