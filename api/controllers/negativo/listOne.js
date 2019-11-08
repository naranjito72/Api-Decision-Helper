import negativoDAO from "../../models/negativo/dao.js";
import HTTPerror from "http-errors";

const listOne = async (req, res, next) => {
  try {
    const negativo = await negativoDAO.listOne(req.params.id);

    res.json(negativo);

  } catch (error) {
    next(HTTPerror(404));
  }
};

export default listOne;