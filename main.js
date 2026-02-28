import express from "express";

const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
  res.json({ msg: "hello world!!!" });
});
//  CRUD
app.get("/movies", () => {
  console.log("Get a movie");
});

app.post("/movies", () => {
  console.log("Insert a movie");
});
app.put("/movies/:id", () => {
  console.log("Update a movies");
});
app.delete("/movies/:id", () => {
  console.log("Delete movie");
});
app.listen(PORT, () => {
  console.log(`app runing at http://localhost:${PORT}`);
});
