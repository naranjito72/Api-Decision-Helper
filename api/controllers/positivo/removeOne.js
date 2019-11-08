import positivoDAO from "../../models/positivo/dao.js";
import HTTPerror from "http-errors";

const removeOne = async (req, res, next) => {
  try {
    if (!req.params.id) {
      next(HTTPerror(404));
    } else {
      const positivo = await positivoDAO.removeOne(req.params.id);

      res.json(positivo);
    }
  } catch (error) {
    next(error);
  }
};

export default removeOne;
