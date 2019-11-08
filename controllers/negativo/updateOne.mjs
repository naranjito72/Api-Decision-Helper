import negativoDAO from "../../models/negativo/dao.mjs";
import HTTPerror from "http-errors";

const updateOne = async (req, res, next) => {
  try {
    const negativo = await negativoDAO.updateOne(req.params.id, req.body);

    res.json(negativo);

  } catch (error) {
    next(HTTPerror(400));
  }
};

export default updateOne;