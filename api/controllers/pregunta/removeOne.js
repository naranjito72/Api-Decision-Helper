import preguntaDAO from "../../models/pregunta/dao.js";
import HTTPerror from "http-errors";

const removeOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(404));
    } else {
      const pregunta = await preguntaDAO.removeOne(req.params.id);

      res.json(pregunta);
    }
  } catch (error) {
    next(error);
  }
};

export default removeOne;
