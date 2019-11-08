import negativoDAO from "../../models/negativo/dao.js";
import HTTPerror from "http-errors";

const remove = async (req, res, next) => {
  try {
    if (!req.params.id_quest) {
      next(HTTPerror(404));
    } else {
      const negativo = await negativoDAO.remove(req.params.id_quest);

      res.json(negativo);
    }
  } catch (error) {
    next(error);
  }
};

export default remove;