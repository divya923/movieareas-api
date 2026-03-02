import express from "express";
import movieRoutes from './routes/movies.route.js'

const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
  res.json({ msg: "hello world!!!" });
});


app.use('/movies',movieRoutes) 





app.listen(PORT, () => {
  console.log(`app runing at http://localhost:${PORT}`);
});
