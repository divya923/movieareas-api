import express from "express";
import movieRoutes from './routes/movies.route.js'
import connectDB from "./lib/db.js";
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
  res.json({ msg: "hello world!!!" });
});

connectDB()
app.use('/movies',movieRoutes) 





app.listen(PORT, () => {
  console.log(`app runing at http://localhost:${PORT}`);
});
