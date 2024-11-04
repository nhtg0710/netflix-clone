import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";

// Need to create a mongoDB database and connect to it

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
    server.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
    }).catch((error) => {
        console.log(error);
        process.exit(1);
    });

    