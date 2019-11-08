import negativoDAO from "../../models/negativo/dao.mjs";
import HTTPerror from "http-errors";

const list = async (req, res, next) => {
  try {
    if (!req.params.id_quest) {
      next(HTTPerror(404));
    } else {
      const negativos = await negativoDAO.list(req.params.id_quest);

      res.json(negativos);
    }
  } catch (error) {
    next(error);
  }
};

export default list;