const request = require("supertest");
import fs from "fs";
import { app, controller } from "../src/index";

describe("api tests", () => {
  let initialTodos;

  beforeEach(() => {
    initialTodos = JSON.parse(fs.readFileSync("todos.json", "utf8"));
  });

  test("should delete todo", done => {
    const startingCount = controller.getTodos().length;
    request(app)
      .delete("/todos/494035d2-8bb0-402b-acc5-804134edda66")
      .end((err, res) => {
      	expect(res.body.includes((val)=> val.id == '494035d2-8bb0-402b-acc5-804134edda66')).toBeFalsy()
        expect(res.body.length).toBeLessThan(startingCount);
        done();
      });
  });
});
