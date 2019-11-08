import preguntaDAO from "../../models/pregunta/dao.js";
import HTTPerror from "http-errors";

const updateOne = async (req, res, next) => {
  try {
    const pregunta = await preguntaDAO.updateOne(req.params.id, req.body);
    
    res.json(pregunta);

  } catch (error) {
    next(HTTPerror(400));
  }
};

export default updateOne;
