import express from "express";

export const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("server running");
});
