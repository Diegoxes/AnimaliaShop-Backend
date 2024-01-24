import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

config();

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// server.use("/api/v1", router);

export default server;
