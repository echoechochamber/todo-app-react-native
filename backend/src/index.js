import express from "express";
import TodoController from "./controller";

// export const controller = new TodoController(process.argv[2]);
export const controller = new TodoController();

export const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log("server running");
});
