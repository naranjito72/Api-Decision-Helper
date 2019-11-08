import Usuario from "./model.js";
import mongo from "../../mongo/MongoManager.js";

class usuarioDAO {
  constructor() {
    mongo.connect();
  }

  create(data) {
    const usuario = new Usuario(data);
    return usuario.save();
  }

  checkUser(data) {
    return Usuario.findOne(data)
      .lean();
  }

  // hasta aquí
/*
  listOne(id) {
    return Usuario.findById(id).exec();
  }

  update(id, data) {
    return Usuario.findByIdAndUpdate(id, data, {
      new: true,
      useFindAndModify: false
    }).exec();
  }

  remove(id) {
    return Usuario.findByIdAndRemove(id, { useFindAndModify: false }).exec();
  }
  */
}

export default new usuarioDAO();