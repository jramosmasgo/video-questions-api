import "module-alias/register";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import databaseConnection from "./config/database";

databaseConnection();

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
