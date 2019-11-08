import Pregunta from "./model.mjs";
import mongo from "../../mongo/MongoManager.mjs";

class preguntaDAO {
  constructor() {
    mongo.connect();
  }

  create(data) {
    const pregunta = new Pregunta();
    Object.assign(pregunta, data);

    return pregunta.save();
  }

  list(id) {
    return Pregunta.find({user:id}).exec();
  }

  remove(id) {
    return Pregunta.deleteMany({user:id}).exec();
  }

  listOne(id) {
    return Pregunta.findById(id).exec();
  }

  updateOne(id, data) {
    return Pregunta.findByIdAndUpdate(id, { $set: { question: data.question }}, {
      new: false,
      useFindAndModify: false
    }).exec();
  }

  removeOne(id) {
    return Pregunta.findByIdAndRemove(id, { useFindAndModify: false }).exec();
  }
}

export default new preguntaDAO();
