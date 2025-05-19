//Ejecución del proyecto
import { initServer } from "./configs/app.js"
import { config } from "dotenv" //Decirle a Node que se usa DOTENV
import { connect } from "./configs/mongo.js"
import mongoose from "mongoose";
import { createDefaultUsers } from "./src/user/user.controller.js";

config()
initServer()
connect()

mongoose.connection.once("open", async () => {
    console.log("Connected to MongoDB");
    await createDefaultUsers();
  

});