import Positivo from "./model.mjs";
import mongo from "../../mongo/MongoManager.mjs";

class positivoDAO {
  constructor() {
    mongo.connect();
  }

  create(data) {
    const positivo = new Positivo();
    Object.assign(positivo, data);

    return positivo.save();
  }

  list(id) {
    return Positivo.find({question:id}).exec();
  }

  remove(id) {
    return Positivo.deleteMany({question:id}).exec();
  }

  listOne(id) {
    return Positivo.findById(id).exec();
  }

  updateOne(id, data) {
    return Positivo.findByIdAndUpdate(id,
      { $set: { desc: data.desc, point: data.point }}, {
      new: true,
      useFindAndModify: false
    }).exec();
  }

  removeOne(id) {
    return Positivo.findByIdAndRemove(id, { useFindAndModify: false }).exec();
  }
}

export default new positivoDAO();