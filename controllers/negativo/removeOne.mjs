import negativoDAO from "../../models/negativo/dao.mjs";
import HTTPerror from "http-errors";

const removeOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(404));
    } else {
      const negativo = await negativoDAO.removeOne(req.params.id);

      res.json(negativo);
    }
  } catch (error) {
    next(error);
  }
};

export default removeOne;