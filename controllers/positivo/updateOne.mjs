import positivoDAO from "../../models/positivo/dao.mjs";
import HTTPerror from "http-errors";

const updateOne = async (req, res, next) => {
  try {
    const positivo = await positivoDAO.updateOne(req.params.id, req.body);
    
    res.json(positivo);

  } catch (error) {
    next(HTTPerror(400));
  }
};

export default updateOne;