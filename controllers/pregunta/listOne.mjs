import preguntaDAO from "../../models/pregunta/dao.mjs";
import HTTPerror from "http-errors";

const listOne = async (req, res, next) => {
  try {
    const pregunta = await preguntaDAO.listOne(req.params.id);

    res.json(pregunta);

  } catch (error) {
    next(HTTPerror(404));
  }
};

export default listOne;
