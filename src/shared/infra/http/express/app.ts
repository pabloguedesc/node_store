import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";
import { port } from "../../../../config/ServerConfig";
import "express-async-errors";
import "../../../container";
import { ErrorMiddleware } from "../../../middlewares/ErrorMiddleware";
import { router } from "../../../routes";

interface IApp {
  start: () => void;
}

export function App(): IApp {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use(ErrorMiddleware);

  const start = () => {
    app.listen(port, () => {
      console.log(`Server is running in http://localhost:${port}`);
    });
  };

  return { start };
}
