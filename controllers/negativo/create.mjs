import negativoDAO from "../../models/negativo/dao.mjs";

import HTTPerror from "http-errors";

const create = async (req, res, next) => {
  try {
    if (!req.body.desc || !req.body.point || !req.body.question || !req.body.user) {
      next(HTTPerror(400, { message: "desc or point or question or user not found" }));
    } else {
      const negativo = await negativoDAO.create(
        Object.assign({}, req.body)
      );

      res.send(negativo);
    }
  } catch (error) {
    next(error);
  }
};

export default create;
