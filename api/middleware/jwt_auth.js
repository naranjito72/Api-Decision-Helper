import jwt from "jwt-simple";
import moment from "moment";

const decodeToken = token => {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, process.env.SECRET_TOKEN);
      console.log(payload);
      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: "El token ha expirado"
        });
      }
      resolve(payload.sub);
    } catch (err) {
      reject({
        status: 500,
        message: "Invalid Token"
      });
    }
  });
  return decoded;
};

export default {
  createToken(user) {
    const f1 = moment().unix();
    const f2 = moment().add(14, "days");
    const payload = {
      sub: user,
      iat: f1,
      exp: f2.unix()
    };
    const salidaToken = {
      orig: payload,
      fech: f2,
      token: jwt.encode(payload, process.env.SECRET_TOKEN)
    }
    return salidaToken;
  },

  isAuth(req, res, next) {
/*     console.log(req.headers.authorization);
    next(); */
    if (!req.headers["authorization"]) {
      return res.status(403).send({ message: "No tienes autorización" });
    } else {
      const token = req.headers["authorization"].split(" ")[1];
      //services
      decodeToken(token)
        .then(response => {
          req.user = response;
          next();
        })
        .catch(response => {
          res.status(response.status);
        });
    }
  } 
};
