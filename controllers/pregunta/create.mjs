import preguntaDAO from "../../models/pregunta/dao.mjs";

import HTTPerror from "http-errors";

const create = async (req, res, next) => {
  try {
    if (!req.body.question || !req.body.user) {
      next(HTTPerror(400, { message: "question or user not found" }));
    } else {
      const pregunta = await preguntaDAO.create(
        Object.assign({}, req.body)
      );

      res.send(pregunta);
    }
  } catch (error) {
    next(error);
  }
};

export default create;
