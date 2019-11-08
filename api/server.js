import http from "http";
import app from "./app.js";
import fs from "fs";

http.createServer(app).listen(process.env.PORT, _ => {
  console.log(
    "Example app listening on port 3000! Go to http://localhost:3000/"
  );
});

/* https
  .createServer(
    {
      key: fs.readFileSync("./config/server.key"),
      cert: fs.readFileSync("./config/server.cert")
    },
    app
  )
  .listen(process.env.PORT, _ => {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  }); */
