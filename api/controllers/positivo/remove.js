import positivoDAO from "../../models/positivo/dao.js";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id_quest) {
      next(HTTPerror(404));
    } else {
      const positivo = await positivoDAO.remove(req.params.id_quest);

      res.json(positivo);
    }
  } catch (error) {
    next(error);
  }
};

export default remove;