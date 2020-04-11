import fs from "fs";
import { v4 as uuid4 } from "uuid";

export default class TodoController {
  constructor(shouldPersist = false) {
    this.persistent = shouldPersist;
    this.todos = JSON.parse(fs.readFileSync("todos.json", "utf8"));
  }

  getTodos() {
    return this.todos;
  }

  /**
   *
   * @param due
   * @param description
   * @param done
   */
  addTodo({ description, done, due }) {
    const newTodo = {
      id: uuid4(),
      due: !!due ? due : Date.now(),
      description,
      done
    };
    this.todos.push(newTodo);
    if (this.persistent) {
      this.writeToFile(this.todos);
    }
    return this.todos;
  }

  toggleCompletion(id) {
    const todo = this.todos.find(val => val.id === id);
    todo.done = !todo.done;
    if (this.persistent) {
      this.writeToFile(this.todos);
    }
    return this.todos;
  }

  deleteTodo(id) {
  	const index = this.todos.findIndex(val => val.id === id);
  	this.todos.splice(index, 1);
	  if (this.persistent) {
		  this.writeToFile(this.todos);
	  }
	  return this.todos;
  }

  writeToFile(data) {
    try {
      fs.writeFile(
        "todos.json",
        JSON.stringify(data),
        {
          flag: "w+"
        },
        err => console.log(err)
      );
    } catch (err) {
      console.log(err);
    }
  }
}
