import express from "express";
import TodoController from "./controller";

const willPersist = parseInt(process.argv[2])
export const controller = new TodoController(willPersist);

export const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(controller.getTodos());
});

app.get("/todos/:id", (req, res) => {
  res.json(controller.getTodos(req.params.id));
});

app.post("/todos", (req, res) => {
  const updatedTodos = controller.addTodo(req.body);
  res.json(updatedTodos);
});

app.patch("/todos/:id/complete", (req, res) => {
  const updatedTodos = controller.toggleCompletion(req.params.id);
  res.json(updatedTodos);
});

app.delete("/todos/:id", (req, res) => {
	const updatedTodos = controller.deleteTodo(req.params.id);
	res.json(updatedTodos);
});

app.listen(8000, () => {
  console.log("server running");
});
