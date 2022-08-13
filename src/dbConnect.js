import seeds from "./seeds";
import mongoose from "mongoose";
// import Closet from "./Closet";
// import Looks from "./Looks";
// const { db } = require("./Lookbook");
// const tables = [Closet, Looks];
const port = 3000;
const DB_URL = /*process.env.DB_URL || */ `mongodb://localhost:27017/Lookbook`;

//DEVELOPMENT DB:
function connectToDB() {
    mongoose
        .connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MONGO CONNECTION OPEN!!!");
        })
        .catch((error) => {
            console.log("OH NO MONGO CONNECTION ERROR!!!!");
            console.log(error);
        });
}

// const dotenv = require("dotenv");
// dotenv.config();

// // PRODUCTION DB:
// mongoose
//     .connect(process.env.PROD_DB_CONNECTION, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log("MONGO CONNECTION OPEN!!!");
//     })
//     .catch((error) => {
//         console.log("OH NO MONGO CONNECTION ERROR!!!!");
//         console.log(error);
//     });

export default connectToDB;
