import positivoDAO from "../../models/positivo/dao.js";
import HTTPerror from "http-errors";

const listOne = async (req, res, next) => {
  try {
    const positivo = await positivoDAO.listOne(req.params.id);

    res.json(positivo);

  } catch (error) {
    next(HTTPerror(404));
  }
};

export default listOne;